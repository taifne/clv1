import logo from './logo.svg';
import './App.css';
import Nav from "./layouts/nav.tsx"
import MainContent from './layouts/body.tsx';
import CanDo from './components/cando.tsx';
function App() {
  return (
    <div className="App">
     <Nav />
     <MainContent />
     <CanDo />
    </div>
  );
}

export default App;
