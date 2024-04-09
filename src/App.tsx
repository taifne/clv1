import React from 'react';

import Header from "./components/Header/index.tsx";
import HomePage from "./pages/index.tsx";
import Footer from "./components/Footer/index.tsx";

function App(): JSX.Element {
  return (
    <div className="App">
      <div className='w-full flex justify-center'> <Header /></div>
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;