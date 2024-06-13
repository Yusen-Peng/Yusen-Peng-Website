import './App.css';
import Aboutme from './sections/Aboutme';
import Education from './sections/Education';
import Industry from './sections/Industry';
import Research from './sections/Research';

function App() {
  return (
    <div className='App'>
      <Aboutme/>
      <Education/>
      <Industry/>
      <Research/>
      <div style={{height: '100px'}}/>
    </div>
  );
}

export default App;
