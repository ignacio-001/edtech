import React from "react";
import { useState } from "react";
import { NativeSelect } from "@mui/material";
const Inputform = (handleform) => {
  const [questions, setquestions] = useState("");
  const [topic, settopic] = useState("");
  const [classid, setclassid] = useState("");
  const [date, setdate] = useState("");
  const [questionid, setquestionid] = useState("");
  const addquestion=()=>{
    setquestions([...questions, questionid]);
    setquestionid('')
  }

  return (
    <>
      <div className="inputdetails">
        <input
          id="topic"
          name="topic"
          type="text"
          placeholder="topic"
          onChange={(event) => settopic(event.target.value)}
          value={topic}
        />
        <br />
        <input
          id="questiona"
          name="questions"
          type="text"
          placeholder="questions"
          onChange={(event) => setquestionid(event.target.value)}
          value={questionid}
        />
        <button onClick={addquestion}>
          Add questions
        </button>
        <br />
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={1}>class1_secA</option>
          <option value={2}>class1_secB</option>
          <option value={3}>class1_secC</option>
          onChange={(event) => setclassid(event.target.value)}
          value={classid}
        </NativeSelect>
        <input type="date"  onChange={(event) => setdate(event.target.value)} value={date} />
        {/* <button
          type="submit"
          onClick={handleform(questions, topic, classid, date)}
        >
          Submit form
        </button> */}
      </div>
    </>
  );
};
export default Inputform;
