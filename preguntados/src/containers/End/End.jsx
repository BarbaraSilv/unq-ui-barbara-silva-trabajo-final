import './End.css';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';


const End = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    const { correctAnswers } = location.state; 
    
    return (
        <div className='end-container'>
            <h1 className='fin-del-juego'>Game over</h1>
            <h2 className='respuesta-correctas'>
                 Correct answers: {correctAnswers}</h2>
             <button onClick={() => navigate("/difficulty")}>Play again</button>
        </div>
   
    )
};

export default End;