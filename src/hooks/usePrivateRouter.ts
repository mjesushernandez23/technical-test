import { useEffect } from "react";
import { useAppSelector } from "@hooks/useRedux";
import { useRouter } from "next/router";

export default function usePrivateRouter(): boolean {
  const isAuth = useAppSelector(state => state.ui.authStatus);
  const router = useRouter();
  useEffect(() => {
    !isAuth && router.push("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isAuth;
}
