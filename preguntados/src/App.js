import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home/Home';
import Difficulty from "./containers/Difficulty/Difficulty";
import Question from "./containers/Question/Question";
import End from "./containers/End/End";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/difficulty" element={<Difficulty/>}></Route>
        <Route path="/Question" element={<Question/>}></Route>
        <Route path="/End" element={<End/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
