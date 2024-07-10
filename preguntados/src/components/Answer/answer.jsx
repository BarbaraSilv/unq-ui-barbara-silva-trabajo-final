import React from "react";
import "./answer.css";

const Answer = ({ answers, onAnswer }) => {

  return (
    <>
    <div className="answers-container">
      <button onClick={() => onAnswer("option1")}>{answers.option1}</button>
      <button onClick={() => onAnswer("option2")}>{answers.option2}</button>
      <button onClick={() => onAnswer("option3")}>{answers.option3}</button>
      <button onClick={() => onAnswer("option4")}>{answers.option4}</button>
    </div>
    </>
  );
}

export default Answer;
