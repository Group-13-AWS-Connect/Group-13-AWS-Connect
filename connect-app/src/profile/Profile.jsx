import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
// import {User} from "@nextui-org/react";
// import {users} from "../data";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../assets/example_user2.jpg';
import logo from '../assets/bw_main_logo.jpg';
// import { Link } from 'react-router-dom';
import {Button} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import Sidebar from "../dashboard/Sidebar";
import photo from "../assets/example_user2.jpg";
import {Card, CardBody} from "@nextui-org/react";
import { useAuth0 } from "@auth0/auth0-react";
import { User} from "@phosphor-icons/react";


export default function App() {
  const { user, isAuthenticated } = useAuth0();
  const givennamespace = "https://givenname.example.com/";
  const familynamespace = "https://familyname.example.com/";
  const usernamespace = "https://username.example.com/";
  const rolenamespace = "https://role.example.com/";
  const namespace = "https://empid.example.com/";

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
            <div className = "team-heading">
             <p>My Profile</p>
            </div>
            {/* <div className = "team-subheading">
              See which other members are currently available
            </div> */}
          </Row>
          <Row>
          <Col md = "8" lg = "8">
           
            <div className = "team-table">
         
            </div>
      

            <div >

              <Card className = "profile-cont">
              <CardBody>
                <Row>
                  <Col md = "3" lg = "3">
                  <div>
                <img className = "img" src={user.picture} alt={user.name} />
                </div>
                  </Col>
                  <Col md = "6" lg = "6">
                  <div className = "profile-text-cont">
                    <div className = "header-cont">
                    <p className="header">Personal Information</p>
                {/* <User weight="bold" className="icon" />
                    <span className="text">Profile</span> */}
                    </div>
                <Row>
                  <Col md = "6" lg = "6">
                    <div>
                    <p className = "profile-subehading font-semibold text-default-400" >First Name</p>
                    <p className = "profile-info">{user[`${givennamespace}given_name`]}</p>
            
                    <p className = "profile-subehading font-semibold text-default-400" >Email</p>
                    <p className = "profile-info">{user.email}</p>

                    <p className = "profile-subehading font-semibold text-default-400" >Employee ID</p>
                    <p className = "profile-info">{user[`${namespace}emp_id`]}</p>
                    </div>
                  </Col>
                  <Col md = "5" lg = "5">
                  <div>
                    <p className = " profile-subehading font-semibold text-default-400" >Last Name</p>
                    <p className = "profile-info" >{user[`${familynamespace}family_name`]}</p>
                    <p className = " profile-subehading font-semibold text-default-400" >Username</p>
                    <p className = "profile-info" >{user[`${usernamespace}username`]}</p>
                    <p className = "profile-subehading font-semibold text-default-400" >Role</p>
                    <p className = "profile-info">{user[`${rolenamespace}role`]}</p>
                    </div>
                  </Col>
                </Row>
                </div>
                  </Col>
                </Row>
                
              </CardBody>
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

