import './Question.css';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Answer from '../../components/Question/answer'

import Service from '../../service/Service';

import { useLocation } from 'react-router-dom';



const Question = () =>{
    const [questions, setQuestions] = useState([]);
    const location = useLocation();
    const { difficulty } = location.state; //

    useEffect(() => {
        waitTrend();
    }, []);


    async function waitTrend() {
        try {
            const data = await Service.getQuestions(difficulty);
            setQuestions(data.data);
            console.log(Question)
        } catch (error) {
            console.error("Error fetching difficulties:", error);
        }
    }

    
    return (
        <div className="question-container">
        <h1>Questions for difficulty: {difficulty}</h1>
        {questions.map((question) => (
          <div>
            <p>{question.question}</p>
            <Answer answers={question}></Answer>
            
                
           
          </div>
        ))}
      </div>
   
    )
};

export default Question;