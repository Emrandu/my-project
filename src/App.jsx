import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';

const App = () => {
  return (
    <>
       {/* Header */}
       <Header></Header>
       <div className='min-h-[calc(100vh-134px)]'>
       <Outlet />
       </div>
       {/* Footer */}
       <Footer/>
    </>
  );
};

export default App;