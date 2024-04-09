import React from 'react';

import Header from "./components/Header/Index.tsx";
import HomePage from "./pages/Index.tsx";
import Footer from "./components/Footer/Index.tsx";

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