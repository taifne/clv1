import React from 'react';

import Header from "./components/Header/index.tsx";
import HomePage from "./pages/index.tsx";
import Footer from "./components/Footer/index.tsx";
import PageNavigation from './components/PageNavigate.tsx';

function App(): JSX.Element {
  return (
    <div className="App select-none">
      <div className='w-full flex justify-center'> <Header /></div>
      <HomePage />
      <PageNavigation />
      <Footer />
    </div>
  );
}

export default App;