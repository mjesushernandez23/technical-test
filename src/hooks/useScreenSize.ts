import { ScreenSizesType } from "@interfaces/uiProps";
import { setBreakPoint } from "@store/slices/uiSlice";
import { useEffect } from "react";
import { useAppDispatch } from "./useRedux";

export interface PropsQueriesRanges {
  id: ScreenSizesType;
  value: number;
}

const queriesRanges: PropsQueriesRanges[] = [
  { id: "sm", value: 768 },
  { id: "md", value: 1024 },
  { id: "lg", value: 1280 },
  { id: "xl", value: 1920 },
  { id: "2xl", value: 2560 },
];

export default function useResizeScreen(): void {
  const dispatch = useAppDispatch();
  /* eslint-disable */
  useEffect(() => {
    handleScreen();
    window.addEventListener("resize", handleScreen);
    return () => {
      window.removeEventListener("resize", handleScreen);
    };
  }, []);
  /* eslint-enable */

  const handleScreen = (): void => {
    const withSize: number = window.innerWidth;
    const result = queriesRanges.find(({ value }) => value >= withSize);
    result && dispatch(setBreakPoint(result.id));
  };
}
