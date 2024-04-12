import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
// import {User} from "@nextui-org/react";
// import {users} from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import profile from '../assets/example_user2.jpg';
// import logo from '../assets/bw_main_logo.jpg';
// import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import Sidebar from "../dashboard/Sidebar";
import {Input} from "@nextui-org/react";
// import photo from "../assets/example_user2.jpg";
import {Card, CardBody} from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
// import { User} from "@phosphor-icons/react";
import { CaretLeft } from "@phosphor-icons/react";
import {call_review} from "./recordingsData";

export default function App() {
  const { user, isAuthenticated } = useAuth0();
  const searchParams = window.location.href.split('/');
//   console.log(window.location.href);
  const contact_id = searchParams[4].slice(19);
  console.log(call_review);
  var curr_recording = call_review[0][contact_id];
  const givennamespace = "https://givenname.example.com/";
  const familynamespace = "https://familyname.example.com/";
  const usernamespace = "https://username.example.com/";
  const rolenamespace = "https://role.example.com/";
  const namespace = "https://empid.example.com/";

  const handleCaretClick = () => {
    navigate('#/recordings'); 
  };

  return (
    isAuthenticated && (
    <div>
      <Container fluid>
        <Row>
          <Col className = "sidebar-bg" md = "2" lg = "2">

            <div>
       <div className="">
      <Sidebar/>
      </div>
            </div>
          </Col>
          <Col className = "team-bg" md = "10" lg = "10">
          <Row>
            <div className = "review-heading">
            {/* <a href="/recordings"> */}
            <span className="caret-icon"><CaretLeft size={32} weight="bold"/></span>
            {/* </a> */}
             <span>Call Review</span>
            </div>
            {/* <div className = "team-subheading">
              See which other members are currently available
            </div> */}
          </Row>
          <Row>
          <Col >
           
          {/* <div className = "team-heading">
              Call Review
            </div>
            <div className = "team-subheading">
            View the following recording that you selected previously
            </div> */}
    {/* <div className = "video-cont" style={{ maxWidth: '1000px', margin: 'auto' }}> */}
    {/* <Card className = "video-card">
      <CardBody> */}
        <Row>
        <div className = "video-cont" style={{ maxWidth: '1000px'}}>
      <video controls style={{ width: '100%' }}>
      <source src={curr_recording.screen_recording} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
        </Row>
  
  
      <Row>
        <Col  md = "9" lg = "9">
          <div className = "video-details">
          <p className = "header">Recording Details</p>
          <Divider className="my-1" />
          </div>
        </Col>
        {/* <Col  md = "3" lg = "3">
          <div className = "video-details-two">
          <Button color="primary" variant="ghost">
             View Transcript
          </Button> 
          </div>
        </Col> */}
      
      </Row>
      <Row>
        <Col md = "3" lg = "3">
        <div className = "video-details" style={{ marginTop: '10px' }}>
        <p className = "profile-subehading font-semibold text-default-400" >Name</p>
        <p className = "profile-info">{curr_recording.name}</p>
            
        <p className = "profile-subehading font-semibold text-default-400" >Employee ID</p>
        <p className = "profile-info">{curr_recording.id}</p>
      </div>

        </Col>
        <Col md = "3" lg = "3">
        <div className = "video-details" style={{ marginTop: '10px' }}>
        <p className = "profile-subehading font-semibold text-default-400" >Date of Call</p>
        <p className = "profile-info">{curr_recording.full_date}</p>
            
        <p className = "profile-subehading font-semibold text-default-400" >Length of Call</p>
        <p className = "profile-info">{curr_recording.time}</p>
      </div>

        </Col>
        <Col md = "3" lg = "3">
        <div className = "video-details" style={{ marginTop: '10px' }}>
        <p className = "profile-subehading font-semibold text-default-400" >Recording</p>
        <p className = "profile-info"><Link isExternal href={curr_recording.screen_recording}>Download </Link></p>
            
        <p className = "profile-subehading font-semibold text-default-400" >Transcript</p>
        <p className = "profile-info"><Link isExternal href={curr_recording.transcript}>View </Link></p>
      </div>

        </Col>
     
      </Row>
    {/* <Row>
      <div className = "feedback-input">
      <Input type="Feedback" label="hello" />
      </div>
    </Row> */}
      {/* </CardBody>
    </Card> */}
   
            
             </Col>
          </Row>
          </Col>
        </Row>
        </Container>
    </div>
    )

  );
}