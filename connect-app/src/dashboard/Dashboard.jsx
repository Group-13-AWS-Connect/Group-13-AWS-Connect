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
import {Link} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
import todaysDate from './todaysDate';
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
            <div className = "logo-container">
              <img className = "logo-style" src ={logo} alt="Bison Wireless Logo"/>
            </div>
            <div>
    
       <div className="">
      <div className ="sidebar-space">
      <a href="/dashboard" style={{ color: '#A3AED0' }}>Dashboard</a>
      </div>
      <div className ="sidebar-space">
      <a href="/profile" style={{ color: '#A3AED0' }}>Profile</a>
      </div>
      <div className ="sidebar-space">
      <a href="#" style={{ color: '#A3AED0' }}>Queue</a>
      </div>
      <div className ="sidebar-space">
      <a href="/recordings" style={{ color: '#A3AED0' }}>Recordings</a>
      </div>
      <div className ="sidebar-space">
      <a href="/team" style={{ color: '#A3AED0' }}>Team Members</a>
      </div>
      <LogOut/>
      </div>
            </div>
          </Col>
          <Col className = "team-bg" md = "10" lg = "10">
          <Row>
            <div className = "top-nav">
             
             <div className = "begin-btn">
           
             </div>
              
              <div className = "user-button">

            

                  {/* <User   
                    name="Jane Doe"
                    description="Agent"
                    src="https://i.postimg.cc/jSSqr9zp/bw-main-logo.jpg"
                  
                  /> */}
              </div>
              
            </div>
          </Row>
          <Row>
            <div className = "team-heading">
            <p>Welcome {user[`${namespace}given_name`]},</p>
            </div>
            <div className = "team-subheading">
            <p>{todaysDate()}</p>
            </div>
          </Row>
          <Row>
            <Col>
            <div className = "resources-card-cont">
            <Card className="resources-card">
              <CardHeader>
              <Chip color="primary">Learning</Chip>
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
        
            </div>
            <div className = "resources-card-cont">
            <Card className="resources-card">
              <CardHeader>
              <Chip color="primary">Queue</Chip>
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
        
            </div>
            
            </Col>
            <Col>
            <div className = "feedback-card-cont">
            <Card className="resources-card">
              <CardHeader>
              <Chip color="primary">Feedback</Chip>
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
        
            </div>
            <div className = "feedback-card-cont">
            <Card className="resources-card">
              <CardHeader>
              <Chip color="primary">Employees</Chip>
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
        
            </div>
            
            </Col>
          
          </Row>
          </Col>
        </Row>
        </Container>
    </div>

    )
  );
}
