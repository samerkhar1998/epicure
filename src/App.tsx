import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Footer from './shared/footer/Footer';
import Header from './shared/header/Header';
import { MainContainer } from './styles';

function App() {
  return (
    <MainContainer>
      <Header/>
      {/* <Layout/> */}
      {/* <Footer/> */}
    </MainContainer>
  );
}

export default App;
