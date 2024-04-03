
import './App.css';
import Nav from "./layouts/nav.tsx"
import MainContent from './layouts/body.tsx';
import CanDo from './components/cando.tsx';
function App() {
  return (
    <div className="App">
      <div className='w-full flex justify-center'>  <Nav /></div>
   
     <MainContent />
     <CanDo />
    </div>
  );
}

export default App;
