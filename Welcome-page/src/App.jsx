// import React from 'react';
// import { useState } from 'react';
// import { NextUIProvider } from '@nextui-org/react';
// import Flashcard from './Flashcards'; // Import your Flashcard component
// // import Page from './page'
// import './App.css';



// function App() {
//   // const [count, setCount] = useState(0);
//   const date = new Date().toLocaleDateString();

//   return (
//     <NextUIProvider>
//       <div className="container" style={{ position: 'absolute', top: 0, left: 0, textAlign: 'left' }}>
//         <h1>Welcome, User</h1>
//         <div>
//           <p>Today's date is {date} </p>
//         </div>
//         <div className="flashcard-container">
//           {/* Use your Flashcard component here */}
//           <Flashcard title="Page 1" />
//           <Flashcard title="Page 2" />
//         </div>
        
//       </div>
//     </NextUIProvider>
//   );
// }

import {React} from "react";
import {NextUIProvider, Card, CardHeader, CardBody, CardFooter, Chip, Link} from "@nextui-org/react";
import {PhoneIcon, NewspaperIcon, BookOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import "./App.css";
import TodoList from "./TodoList"; // Import your TodoList component
import { Row, Col } from 'react-bootstrap';
import Flashcards from "./Flashcards";


function App() {
  const date = new Date().toLocaleDateString();

  return (
    <NextUIProvider>
        <div className="welcome-container">
          <h1>Welcome, User</h1>
          <p>Today's date is {date}</p>
        </div>
      <Row>
            <Col>
            {/* <div className = "resources-card-cont">
            <Card className="resources-card">
              <CardHeader>
              <p className="text-md">Enter Queue</p>
              <p className="text-small text-default-500">begin working</p>
              </CardHeader>
              <CardBody>
                <p>Discover vital information and support tools to assist you during calls.</p>
              </CardBody>
              <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Learn More.
              </Link>
            </CardFooter>
            </Card>
        
            </div> */}
             <Flashcards
                  title="Enter Queue"
                  subtitle="Begin Working"
                  content="Click here to log into Contact Control Panel (CCP) and begin working. Have a great day!"
                  icon={PhoneIcon} // Specify the icon for the first card
                />

              <Flashcards
                  title="FAQS"
                  subtitle="Customer Questions"
                  content="Explore Frequently Asked questions from customers to assist you while on a call"
                  icon={QuestionMarkCircleIcon} // Specify a different icon for the second card
                />
        
            </Col>
            <Col>
            <Flashcards
                  title="Resources"
                  subtitle="Agent Questions"
                  content="Discover vital information and support tools to assist you during calls"
                  icon={BookOpenIcon} 
                />

              
            <Flashcards
                  title="Feedback"
                  subtitle="Call reviews"
                  content="Browse feedback on your past interactions with customers to improve call handling"
                  icon={NewspaperIcon} // Specify a different icon for the third card
                />
            </Col>
            <div className="todo-card-cont">
            <Col>
            <Card className="card-text-title">
              <CardHeader>Todo List</CardHeader>
              <CardBody>
                <TodoList /> 
              </CardBody>
            </Card>
          </Col> 
          </div>
          
          </Row>
     
    </NextUIProvider>
  );
}

export default App;



 {/* <div className="container">
        Welcome, User section
        <div className="welcome-container">
          <h1>Welcome, User</h1>
          <p>Today's date is {date}</p>
        </div>

        TodoList as a card
        <div className="flashcards-container">
        <Row>
         
          Flashcards section 
            <Row>
              <Col sm = "5" md = "5" lg = "5">
                <Flashcards
                  title="Enter Queue"
                  subtitle="Begin Working"
                  content="Click here to log into Contact Control Panel (CCP) and begin working. Have a great day!"
                  icon={PhoneIcon} // Specify the icon for the first card
                />

                <Flashcards
                  title="FAQS"
                  subtitle="Customer Questions"
                  content="Explore Frequently Asked questions from customers to assist you while on a call"
                  icon={QuestionMarkCircleIcon} // Specify a different icon for the second card
                />
              </Col>
              <Col sm = "5" md = "5" lg = "5">
              <Flashcards
                  title="Resources"
                  subtitle="Agent Questions"
                  content="Discover vital information and support tools to assist you during calls"
                  icon={BookOpenIcon} 
                />

              <Flashcards
                  title="Feedback"
                  subtitle="Call reviews"
                  content="Browse feedback on your past interactions with customers to improve call handling"
                  icon={NewspaperIcon} // Specify a different icon for the third card
                /> 
              </Col>
        
        </Row>

        </Row>
        </div>
      </div> */}