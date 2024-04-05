import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {User} from "@nextui-org/react";
// import {users} from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../assets/example_user2.jpg';
import TeamTable from "./teamTable";
import logo from '../assets/bw_main_logo.jpg';
// import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";

export default function App() {


  return (
    <div>
      <Container fluid>
        <Row>
          <Col className = "sidebar-bg" md = "2" lg = "2">
            <div className = "logo-container">
              <img className = "logo-style" src ={logo} alt="Bison Wireless Logo"/>
            </div>
            {/* <div>
            <Link
        isExternal
        href="/dashboard"
        showAnchorIcon
      >
        Dashboard
      </Link>
            </div> */}
            <div>
            {/* <Link
        isExternal
        href="/team"
        showAnchorIcon
      >
        Team Members
      </Link> */}
       <div className="">
      <div className ="sidebar-space">
      <a href="/dashboard" style={{ color: '#A3AED0' }}>Dashboard</a>
      </div>
      <div className ="sidebar-space">
      <a href="#" style={{ color: '#A3AED0' }}>Profile</a>
      </div>
      <div className ="sidebar-space">
      <a href="#" style={{ color: '#A3AED0' }}>Queue</a>
      </div>
      <div className ="sidebar-space">
      <a href="#" style={{ color: '#A3AED0' }}>Recordings</a>
      </div>
      <div className ="sidebar-space">
      <a href="#" style={{ color: '#A3AED0' }}>Team Members</a>
      </div>
      </div>
            </div>
          </Col>
          <Col className = "team-bg" md = "10" lg = "10">
          <Row>
            <div className = "top-nav">
             
             <div className = "begin-btn">
             {/* <Button color="primary" variant="ghost">
                Begin Working
            </Button>  */}
            {/* <Link
              isExternal
              href="https://github.com/nextui-org/nextui"
              showAnchorIcon
            >
              Enter Queue
          </Link> */}
             </div>
              
              <div className = "user-button">

            

                  {/* <User   
                    name="Jane Doe"
                    description="Agent"
                    src={{profile}}
                  
                  /> */}
              </div> 
              {/* <div className="flex h-5 items-center space-x-4 text-small">
                <div>Enter Queue</div>
                <Divider orientation="vertical" />
                <div className="space-y-1">
                <h4 className="text-medium font-medium">NextUI Components</h4>
              </div>
       
              </div> */}
              
            </div>
          </Row>
          <Row>
            <div className = "team-heading">
              Team Members
            </div>
            <div className = "team-subheading">
              See which other members are currently available
            </div>
          </Row>
          <Row>
         
           
            <div className = "team-table">
            <TeamTable />
            </div>
            {/* <img src={profile}/> */}
      
          
          </Row>
          </Col>
        </Row>
        </Container>
    </div>


  );
}

