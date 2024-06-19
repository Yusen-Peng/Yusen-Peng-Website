import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import IndustryPage from './pages/IndustryPage';
import ResearchPage from './pages/ResearchPage';
import EducationPage from './pages/EducationPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='/education' element={<EducationPage/>}/>
          <Route path='/industry' element={<IndustryPage/>}/>
          <Route path='/research' element={<ResearchPage/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
