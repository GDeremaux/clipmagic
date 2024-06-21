import { createContext, useContext } from "react";
import StoryPropsSchema from "../compositions/story/story-props-schema";

export const InputContext = createContext<any>(undefined);

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within a InputContextProvider");
  }
  return context;
};