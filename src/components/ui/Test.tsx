import { useEffect } from "react";

interface TestProps {}
const Test = (props: TestProps) => {
  useEffect(() => {
    console.log("test");
  }, []);
  return <div>test</div>;
};

export default Test;
