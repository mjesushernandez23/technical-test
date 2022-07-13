interface LayoutProps {
  children: JSX.Element;
}
const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
