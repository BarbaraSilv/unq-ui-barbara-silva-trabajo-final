import './End.css';
import { useNavigate } from "react-router";



const End = () =>{
    const navigate = useNavigate()
    
    return (
        <div className='end-container'>
             <button onClick={() => navigate("/difficulty")}>Jugar de nuevo</button>
        </div>
   
    )
};

export default End;