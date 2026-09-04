import { useState } from "react";
import TestForm from "./src/test/TestForm";
import Test from "./src/test/Test";

export default function TestBuilder() {
  const [test, setTest] = useState([]);

  function updateTest(update) {
    setTest(update);
  }

  return (
    <>
      <TestForm updateTest={updateTest} testObjects={[...test]} />
      <Test jobs={[...test]} />
    </>
  );
}
