import * as z from "zod";
import merge from "lodash/merge";

import { UseFormReturn } from "react-hook-form";

/**
 * from https://github.com/colinhacks/zod/discussions/1953
 * 
 * 
 * defaultInstance
 * @param schema z.object schema definition
 * @param options Optional object, may include property:
 *                - defaultArrayEmpty: true
 * @returns Object of type schema with defaults for all fields
 * @example
 * const schema = z.object( { ... } )
 * const default1 = defaultInstance<typeof schema>(schema)
 * const default2 = defaultInstance<typeof schema>(
 *                  schema,{ defaultArrayEmpty: true} )
 */
export function defaultInstance<T extends z.ZodTypeAny>(
  schema: z.AnyZodObject | z.ZodEffects<any>,
  options: object = {}
): z.infer<T> {
  const defaultArrayEmpty = 'defaultArrayEmpty' in options ? options.defaultArrayEmpty : false
  function run(): z.infer<T> {
    if (schema instanceof z.ZodEffects) {
      if (schema.innerType() instanceof z.ZodEffects) {
        return defaultInstance(schema.innerType(), options) // recursive ZodEffect
      }
      // return schema inner shape as a fresh zodObject
      return defaultInstance(z.ZodObject.create(schema.innerType().shape), options)
    }

    if (schema instanceof z.ZodType) {
      let the_shape = schema.shape as z.ZodAny // eliminates 'undefined' issue
      let entries = Object.entries(the_shape)
      let temp = entries.map(([key, value]) => {
        let this_default =
          value instanceof z.ZodEffects ? defaultInstance(value, options) : getDefaultValue(value)
        return [key, this_default]
      })
      return Object.fromEntries(temp)
    } else {
      console.log(`Error: Unable to process this schema`)
      return null // unknown or undefined here results in complications
    }

    function getDefaultValue(dschema: z.ZodTypeAny): any {
      if (dschema instanceof z.ZodDefault) {
        if (!('_def' in dschema)) return undefined // error
        if (!('defaultValue' in dschema._def)) return undefined // error
        return dschema._def.defaultValue()
      }
      if (dschema instanceof z.ZodArray) {
        if (!('_def' in dschema)) return undefined // error
        if (!('type' in dschema._def)) return undefined // error
        // return empty array or array with one empty typed element
        return defaultArrayEmpty ? [] : [getDefaultValue(dschema._def.type as z.ZodAny)]
      }
      if (dschema instanceof z.ZodString) return ''
      if (dschema instanceof z.ZodNumber) {
        let value = dschema.minValue ?? 0
        return value
      }
      if (dschema instanceof z.ZodPipeline) {
        if (!('out' in dschema._def)) return undefined // error
        return getDefaultValue(dschema._def.out)
      }
      if (dschema instanceof z.ZodObject) {
        return defaultInstance(dschema, options)
      }
      if (dschema instanceof z.ZodAny && !('innerType' in dschema._def)) return undefined // error?
      return getDefaultValue(dschema._def.innerType)
    }
  }
  return run()
}

export const getParsedFormValues = (
  form: UseFormReturn,
  schema: z.ZodObject<any>
) => {
  const formValues = form.getValues();
  const defaultValues = defaultInstance(schema);

  const parsedValues = merge({}, defaultValues, formValues);

  return parsedValues;
};