import { useVideoConfig } from "remotion";

const getUnits = () => {
  const { width, height } = useVideoConfig();

  const units = {
    vw: width / 100,
    vh: height / 100,
  }

  return units;
}

export const vw = (percentage: number) => {
  const { vw } = getUnits();

  return (vw * percentage).toString() + "px";
}

export const vh = (percentage: number) => {
  const { vh } = getUnits();

  return (vh * percentage).toString() + "px";
}

export default getUnits;