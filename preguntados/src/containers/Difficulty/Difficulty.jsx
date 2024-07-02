import './Difficulty.css';
import { useEffect, useState } from "react";
import Service from '../../service/Service';
import { useNavigate } from "react-router";


const Difficulty = () => {
    const [difficulties, setDifficulties] = useState([]);
    const navigate = useNavigate()


    useEffect(() => {
        waitTrend();
    }, []);


    async function waitTrend() {
        try {
            const data = await Service.getDifficulty();
            setDifficulties(data.data);
            console.log(data.data)
        } catch (error) {
            console.error("Error fetching difficulties:", error);
        }
    }

    const handleDifficultyClick = (diff) => {
        navigate('/Question', { state: { difficulty: diff } });
      };

    return (
        <div className="difficulty-container">
            <div className='title'>
                <h1>Seleciona la dificultad: </h1>
            </div>
            <div className='list'>
                {difficulties?.map((diff) => (
                    <button key={diff} onClick={() => handleDifficultyClick(diff)} className='buttonDifficulty'>{diff}</button>
                ))}

            </div>


        </div>

    )
};

export default Difficulty;