import './Question.css';
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Answer from '../../components/Question/answer'
import Service from '../../service/Service';
import { useLocation } from 'react-router-dom';


const Question = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState(null);
  const location = useLocation();
  const { difficulty } = location.state; 
  const [correctAnswers, setCorrectAnswers] = useState(0);

  
  
  useEffect(() => {
    fetchQuestions();
  }, []);


  const fetchQuestions = async () => {
    try {
      const apiQuestions = await Service.getQuestions(difficulty);
      setQuestions(apiQuestions.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const handleAnswer = async (answer) => {
    const resp = {
      questionId: questions[currentQuestionIndex].id,
      option: answer
    };
    try {
      const response = await Service.postAnswer(resp);
      setResult(response.data.answer ? "¡Correcto!" : "¡Incorrecto!");
      setCorrectAnswers(prev => prev + (response.data.answer ? 1 : 0));
      setTimeout(() => {
        setResult(null);
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }, 1000);
    } catch (error) {
      console.error("Error posting answer:", error);
    }
  };


  if (!questions.length) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= questions.length) {
    navigate('/End',{state: {correctAnswers}});
    return
  }


  return (
    <div className="question-container">
      <div className="score">
        Puntaje: {correctAnswers}
      </div>
      {result && <div className="feedback-message">{result}</div>}
      <div>
        <div className='question'>{questions[currentQuestionIndex].question}</div>
        <Answer answers={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
      </div>
    </div>
  );
};

export default Question;