import { useContext } from "react";
import InputContext from "../compositions/story/components/input-context";

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within a InputContextProvider");
  }
  return context;
};