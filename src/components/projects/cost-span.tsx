import * as z from "zod";

import estimateCost from "@/actions/project/generate-story-project/estimate-cost";
import { useFormContext } from "react-hook-form";
import { getParsedFormValues } from "@/lib/form";

interface CostSpanProps {
  schema: z.ZodObject<any, any>;
  formValues: any;
  project: any;
  refreshKey: number;
  add?: number;
}

const CostSpan = ({
  schema,
  formValues,
  project,
  refreshKey,
  add
}: CostSpanProps) => {
  const form = useFormContext();
  // form.watch();

  const cost = estimateCost(
    getParsedFormValues(formValues, schema),
    project
  ) + (add || 0);

  return (
    <span className="opacity-50 ml-2">Cost: {cost}</span>
  )
}

export default CostSpan;