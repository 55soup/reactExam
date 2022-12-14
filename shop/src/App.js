import {useState} from "react";
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import logo from './logo.svg';
import bg from './img/bg.png';
import './App.css';
import {a,b} from './data.js'

function App() {
  
  let [shoes] = useState()

  return (
    <div className="App">
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="#home">ShoesMarket</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
      </Navbar>

      <div className='main-bg' style={{backgroundImage: 'url('+bg+')'}}></div>
      <div className='main-bg'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'> <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
          <div className='col-md-4'> <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
