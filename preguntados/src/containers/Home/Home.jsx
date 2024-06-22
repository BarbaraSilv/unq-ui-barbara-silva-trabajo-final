import HomeImage from '../../image/preguntados-google-home-2.jpg'
import './Home.css';
import { useNavigate } from "react-router";



const Home = () =>{
    const navigate = useNavigate()
    
    return (
        <div className='home-container'>
             <button onClick={() => navigate("/difficulty")}>Jugar</button>
        </div>
   
    )
};

export default Home;