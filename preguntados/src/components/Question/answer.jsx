import React from "react";

const Answer = ({ answers, onAnswer }) => {
 

  return (
    <>
      <button onClick={() => onAnswer("option1")}>{answers.option1}</button>
      <button onClick={() => onAnswer("option2")}>{answers.option2}</button>
      <button onClick={() => onAnswer("option3")}>{answers.option3}</button>
      <button onClick={() => onAnswer("option4")}>{answers.option4}</button>
    </>
  );
}

export default Answer;
