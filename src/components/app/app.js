import React, { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../characterPage/";
import BookPage from "../bookPage/";
import HousesPage from "../housesPage/";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css';
import BooksItem from '../items/';


const App = () => {  

  const [isShown, setIsShown] = useState(true);  

  

  const toggle = () => setIsShown(!isShown); 

  
  return (
  <Router>
      <div className="app">
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {isShown && <RandomChar />}
  
              <Button onClick={toggle}>Toogle Random Character</Button>
            </Col>
          </Row>
          <Route path='/' exact component={() => <h1>Welcome to Game of Throne DB</h1>}></Route>
          <Route path='/characters/' component={CharacterPage}></Route>
          <Route path='/houses/' component={HousesPage}></Route>
          <Route path='/books/' exact component={BookPage}></Route> 
          <Route path='/books/:id' render={           
              ({match}) =>  {      
                const {id} = match.params;                  
              return <BooksItem bookId={id}></BooksItem> 
              }
            
          }></Route> 
        
        </Container>
      </div>
  </Router>
  );
};

export default App;
