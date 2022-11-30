import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Footer from './shared/Footer';
import Header from './shared/Header';

function App() {
  return (
    <div>
      <Header/>
      <Layout/>
      <Footer/>
    </div>
  );
}

export default App;
