import usePrivateRouter from "@hooks/usePrivateRouter";
import type { NextPage } from "next";

const Upload: NextPage = () => {
  const isAuth = usePrivateRouter();

  if (!isAuth) return <></>;

  return (
    <div>
      <h1>Upload</h1>
    </div>
  );
};

export default Upload;
