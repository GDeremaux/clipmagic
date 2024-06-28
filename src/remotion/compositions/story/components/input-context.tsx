import * as z from "zod";

import { storyInputSchema } from "../../../schemas/projects/story";
import { createContext } from "react";

const InputContext = createContext<z.infer<typeof storyInputSchema>>({} as z.infer<typeof storyInputSchema>);

export default InputContext;