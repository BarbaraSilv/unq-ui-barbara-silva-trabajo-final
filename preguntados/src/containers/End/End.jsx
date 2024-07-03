import './End.css';
import { useNavigate } from "react-router";
import { useLocation } from 'react-router-dom';


const End = () =>{
    const navigate = useNavigate()
    const location = useLocation();
    const { correctAnswers } = location.state; 
    
    return (
        <div className='end-container'>
            <h1 className='fin-del-juego'>Fin del juego</h1>
            <h2 className='respuesta-correctas'>
                Respuestas correctas: {correctAnswers}</h2>
             <button onClick={() => navigate("/difficulty")}>Jugar de nuevo</button>
        </div>
   
    )
};

export default End;