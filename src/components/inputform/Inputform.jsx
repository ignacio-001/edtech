import React from "react";
import { useState } from "react";
import { NativeSelect } from "@mui/material";
const Inputform = (handleform) => {
  const [questions, setquestions] = useState("");
  const [topic, settopic] = useState("");
  const [classid, setclassid] = useState("");
  const [date, setdate] = useState("");
  const [questionid, setquestionid] = useState("");
  const addquestion = () => {
    setquestions([...questions, questionid]);
    setquestionid("");
  };
  const handleinput = () => {
    handleform(topic,questions,classid,date);
    console.log(date);
    console.log(topic);
    console.log(classid);
    console.log(questions);
  };

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
        <button onClick={addquestion}>Add questions</button>
        <br />
        <NativeSelect
          defaultValue={30}
          onChange={(event) => setclassid(event.target.value)}
        >
          <option value={1}>class1_secA</option>
          <option value={2}>class1_secB</option>
          <option value={3}>class1_secC</option>
          value={classid}
        </NativeSelect>
        <input
          type="date"
          onChange={(event) => setdate(event.target.value)}
          value={date}
        />
        <button type="submit" onClick={handleinput}>
          Submit form
        </button>
      </div>
    </>
  );
};
export default Inputform;
