import usePrivateRouter from "@hooks/usePrivateRouter";
import type { NextPage } from "next";

const Employees: NextPage = () => {
  const isAuth = usePrivateRouter();
  if (!isAuth) return <></>;
  return (
    <div>
      <h1>employees</h1>
    </div>
  );
};

export default Employees;
