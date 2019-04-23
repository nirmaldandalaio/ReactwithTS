import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';
import Main from './components/MainComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <Container className="App">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Container>
    );
  }
}

export default App;
