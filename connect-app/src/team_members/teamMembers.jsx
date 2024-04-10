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
import Sidebar from "../dashboard/Sidebar";
import photo from "../assets/example_user2.jpg";

export default function App() {


  return (
    <div>
      <Container fluid>
        <Row>
          <Col className = "sidebar-bg" md = "2" lg = "2">
            {/* <div className = "logo-container">
              <img className = "logo-style" src ={logo} alt="Bison Wireless Logo"/>
            </div> */}
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
      <Sidebar/>
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

