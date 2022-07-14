export interface UiProps {
  isLoading: boolean;
  authStatus: boolean;
  breakPoint: ScreenSizesType | null;
}
export type ScreenSizesType = "sm" | "md" | "lg" | "xl" | "2xl";
