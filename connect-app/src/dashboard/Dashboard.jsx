import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {User} from "@nextui-org/react";
// import {users} from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import profile from '../assets/example_user2.jpg';
// import TeamMembers from "../team_members/teamMembers";
import logo from '../assets/bw_main_logo.jpg';
// import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";
import LogOut from "../login/logout-button";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
import todaysDate from './todaysDate';
import Sidebar from "./Sidebar";
import photo from "../assets/example_user2.jpg";
import queue from "../assets/phone-pbg.jpg";
import faq from "../assets/faq-pbg.jpg";
import resources from "../assets/resources-pbg.jpg";
import feedback from "../assets/feedback-pbg.jpg";
import TodoList from './TodoList.jsx';
// import "./Cards.css"

// import UserGreeting from "../Greeting";

export default function App() {

  const { user, isAuthenticated, isLoading } = useAuth0();

  const namespace = "https://myapp.example.com/";

  return (
    isAuthenticated && (
    <div>
      <Container fluid>
        <Row>
          <Col className = "sidebar-bg" md = "2" lg = "2">
            <div>
    
                <div className="new-sidebar">
     
                    <Sidebar/>

                     {/* <LogOut/> */}
                </div>
            </div>
          </Col>
          <Col className = "team-bg" md = "10" lg = "10">
          <Row>
            <div className = "top-nav">
             
              
              <div className = "user-button">

            
              <div className="head">
                <div className="user-img">
                <img src={photo} alt="" />
              </div>
            <div className="user-details">
              <p className="title">web developer</p>
              <p className="name">John Doe</p>
            </div>
          </div>
                  {/* <User   
                    name="Jane Doe"
                    description="Agent"
                    src={{profile}}
                  
                  /> */}
              </div> 
              
            </div>
          </Row>
          <Row className="custom-gutter">
            <div className = "team-heading">
            <p>Welcome {user[`${namespace}given_name`]},</p>
            </div>
            <div className = "team-subheading">
            <p>{todaysDate()}</p>
            </div>
          </Row>
          <Row>
            <Col sm = "3" md = "3" lg = "3">
            <Card isHoverable className="card-cont max-w-[400px]">
      <CardHeader className="flex gap-3">
        <img
          alt="nextui logo"
          height={40}
          radius="sm"
          src={queue}
          width={40}
        />
        <div className="flex flex-col">
          <p className="card-header text-md">Enter Queue</p>
          <p className="text-small text-default-500">Begin Working</p>
        </div>
      </CardHeader>
      <CardBody className = "card-body">
        <p>Click here to log into the Contact Control Panel(CCP) and begin working. Have a great day!</p>
      </CardBody>
    </Card>
    <Card isHoverable className="card-cont max-w-[400px]">
      <CardHeader className="flex gap-3">
        <img
          alt="nextui logo"
          height={40}
          radius="sm"
          src={resources}
          width={40}
        />
        <div className="flex flex-col">
          <p className="card-header text-md">Resources</p>
          <p className="text-small text-default-500">Agent Questions</p>
        </div>
      </CardHeader>
      <CardBody className = "card-body">
        <p>Discover vital information and support tools to assist you during calls.</p>
      </CardBody>
    </Card>
    </Col>
    <Col sm = "3" md = "3" lg = "3">
  
    <Card isHoverable className="card-cont max-w-[400px]">
      <CardHeader className="flex gap-3">
        <img
          alt="nextui logo"
          height={40}
          radius="sm"
          src={faq}
          width={40}
        />
        <div className="flex flex-col">
          <p className="card-header text-md">FAQs</p>
          <p className="text-small text-default-500">Customer Questions</p>
        </div>
      </CardHeader>
      <CardBody className = "card-body">
        <p>Explore Frequently Asked questions from customers to assist you while on a call. </p>
      </CardBody>
    </Card>
    <Card isHoverable className="card-cont max-w-[400px]">
      <CardHeader className="flex gap-3">
        <img
          alt="nextui logo"
          height={40}
          radius="sm"
          src={feedback}
          width={40}
        />
        <div className="flex flex-col">
          <p className="card-header text-md">Feedback</p>
          <p className="text-small text-default-500">Call Reviews</p>
        </div>
      </CardHeader>
      <CardBody className = "card-body">
        <p>Browse feedback on your past interactions with customers to improve call handling.</p>
      </CardBody>
    </Card>
    </Col>

            <Col sm = "5" md = "5" lg = "5" >
            <Card className="todo-cont card-text-title">
              <CardHeader>Todo List</CardHeader>
              <CardBody>
                <TodoList /> 
              </CardBody>
            </Card>
            </Col >
 
         


          
          </Row>
          </Col>
        </Row>
        </Container>
    </div>

    )
  );
}


// import React from "react";
// import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
// import {User} from "@nextui-org/react";
// // import {users} from "../data";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// // import profile from '../assets/example_user2.jpg';
// // import TeamMembers from "../team_members/teamMembers";
// import logo from '../assets/bw_main_logo.jpg';
// // import { Link } from 'react-router-dom';
// import {Button} from "@nextui-org/react";
// import LogOut from "../login/logout-button";
// import {Link} from "@nextui-org/react";
// import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
// import {Chip} from "@nextui-org/react";
// import { useAuth0 } from "@auth0/auth0-react";
// import todaysDate from './todaysDate';
// import Sidebar from "./Sidebar";
// import AllCards from "./allCards";
// // import UserGreeting from "../Greeting";

// export default function App() {

//   const { user, isAuthenticated, isLoading } = useAuth0();

//   const namespace = "https://myapp.example.com/";

//   return (
//     isAuthenticated && (
//     <div>
//       <Container fluid>
//         <Row>
//           <Col className = "sidebar-bg" md = "2" lg = "2">
//             <div>
    
//                 <div className="new-sidebar">
     
//                     <Sidebar/>

//                      {/* <LogOut/> */}
//                 </div>
//             </div>
//           </Col>
//           <Col className = "team-bg" md = "10" lg = "10">
//           <Row>
//             <div className = "team-heading">
//             <p>Welcome {user[`${namespace}given_name`]},</p>
//             </div>
//             <div className = "team-subheading">
//             <p>{todaysDate()}</p>
//             </div>
//           </Row>
//           <Row>
//             <Col>
//             <div className = "resources-card-cont">
//             <Card className="resources-card">
//               <CardHeader>
//               <Chip color="primary">Learning</Chip>
//               </CardHeader>
//               <CardBody>
//                 <p>Discover vital information and support tools to assist you during calls.</p>
//               </CardBody>
//               <CardFooter>
//               <Link
//                 isExternal
//                 showAnchorIcon
//                 href="https://github.com/nextui-org/nextui"
//               >
//                 Learn More.
//               </Link>
//             </CardFooter>
//             </Card>
        
//             </div>
//             <div className = "resources-card-cont">
//             <Card className="resources-card">
//               <CardHeader>
//               <Chip color="primary">Queue</Chip>
//               </CardHeader>
//               <CardBody>
//                 <p>Discover vital information and support tools to assist you during calls.</p>
//               </CardBody>
//               <CardFooter>
//               <Link
//                 isExternal
//                 showAnchorIcon
//                 href="https://github.com/nextui-org/nextui"
//               >
//                 Learn More.
//               </Link>
//             </CardFooter>
//             </Card>
        
//             </div>
            
//             </Col>
//             <Col>
//             <div className = "feedback-card-cont">
//             <Card className="resources-card">
//               <CardHeader>
//               <Chip color="primary">Feedback</Chip>
//               </CardHeader>
//               <CardBody>
//                 <p>Discover vital information and support tools to assist you during calls.</p>
//               </CardBody>
//               <CardFooter>
//               <Link
//                 isExternal
//                 showAnchorIcon
//                 href="https://github.com/nextui-org/nextui"
//               >
//                 Learn More.
//               </Link>
//             </CardFooter>
//             </Card>
        
//             </div>
//             <div className = "feedback-card-cont">
//             <Card className="resources-card">
//               <CardHeader>
//               <Chip color="primary">Employees</Chip>
//               </CardHeader>
//               <CardBody>
//                 <p>Discover vital information and support tools to assist you during calls.</p>
//               </CardBody>
//               <CardFooter>
//               <Link
//                 isExternal
//                 showAnchorIcon
//                 href="https://github.com/nextui-org/nextui"
//               >
//                 Learn More.
//               </Link>
//             </CardFooter>
//             </Card>
        
//             </div>
            
//             </Col>
          
//           </Row>
//           </Col>
//         </Row>
//         </Container>
//     </div>

//     )
//   );
// }