import { useState } from "react";
import TestForm from "./src/test/TestForm";
import Job from "./src/employment/Job";

export default function TestBuilder() {
  const [test, setTest] = useState([]);

  function updateTest(update) {
    setTest(update);
  }

  function addTest() {
    const update = [...test];
    update.push(new Job());
    setTest(update);
  }

  return (
    <>
      <button onClick={addTest}>Add Test</button>
      <TestForm updateTest={updateTest} testObjects={[...test]} />
    </>
  );
}
