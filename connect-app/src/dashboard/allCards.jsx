import {React} from "react";
import {NextUIProvider, Card, CardHeader, CardBody, CardFooter, Chip, Link} from "@nextui-org/react";
import {PhoneIcon, NewspaperIcon, BookOpenIcon, QuestionMarkCircleIcon } from "@heroicons/react/20/solid";
import "./Cards.css";
import TodoList from "./TodoList"; // Import your TodoList component
import { Row, Col } from 'react-bootstrap';
import Cards from "./Cards";


function App() {
  const date = new Date().toLocaleDateString();

  return (
    <NextUIProvider>
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
             <Cards
                  title="Enter Queue"
                  subtitle="Begin Working"
                  content="Click here to log into Contact Control Panel (CCP) and begin working. Have a great day!"
                  icon={PhoneIcon} // Specify the icon for the first card
                />

              <Cards
                  title="FAQS"
                  subtitle="Customer Questions"
                  content="Explore Frequently Asked questions from customers to assist you while on a call"
                  icon={QuestionMarkCircleIcon} // Specify a different icon for the second card
                />
        
            </Col>
            <Col>
            <Cards
                  title="Resources"
                  subtitle="Agent Questions"
                  content="Discover vital information and support tools to assist you during calls"
                  icon={BookOpenIcon} 
                />

              
            <Cards
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