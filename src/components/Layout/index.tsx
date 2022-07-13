import { useAppDispatch, useAppSelector } from "@hooks/useRedux";
import { activeLoading, disabledLoading } from "@slices/uiSlice";

interface LayoutProps {
  children: JSX.Element;
}
const Layout = (props: LayoutProps) => {
  const { children } = props;
  const isLoading = useAppSelector(state => state.ui.isLoading);
  const dispatch = useAppDispatch();

  return (
    <div>
      {`${isLoading}`}
      <main>{children}</main>
      <button onClick={() => dispatch(activeLoading())}>active</button>
      <button onClick={() => dispatch(disabledLoading())}>disable</button>
    </div>
  );
};

export default Layout;
