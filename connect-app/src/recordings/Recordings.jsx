import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
import {User} from "@nextui-org/react";
// import {users} from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../assets/example_user2.jpg';
import Recordings from "./recordingsTable";
import logo from '../assets/bw_main_logo.jpg';
// import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import {DownChev} from "../assets/downChevron";
import { list } from 'aws-amplify/storage';
import Sidebar from "../dashboard/Sidebar";
import photo from "../assets/example_user2.jpg";

try {
  const result = await list({
    prefix: 'recordings/'
  });
  console.log(result)
} catch (error) {
  console.log(error);
}

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

            
{/* 
                  <User   
                    name="Jane Doe"
                    description="Agent"
                    src={{profile}}
                  
                  />  */}
              </div>
              {/* <span className="text-lg  cursor-pointer">
                <DownChev />
              </span> */}
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
              Recordings
            </div>
            <div className = "team-subheading">
            Explore and review recordings of agents' previous calls
            </div>
          </Row>
          <Row>
         
           
            <div className = "team-table">
            <Recordings />
            </div>
            {/* <img src={profile}/> */}
      
          <div>
            
          </div>
          </Row>
          </Col>
        </Row>
        </Container>
    </div>

  );
}
