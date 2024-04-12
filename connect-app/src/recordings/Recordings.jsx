import React, { useState } from "react";
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
import VideoPlayer from "./videoPlayer";
import { useAuth0 } from "@auth0/auth0-react";



try {
  const result = await list({
    prefix: 'recordings/'
  });
  console.log(result)
} catch (error) {
  console.log(error);
}

export default function App() {

  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const toggleComponent = () => setShowVideoPlayer(!showVideoPlayer);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const rolenamespace = "https://role.example.com/";

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
      
          <div>
            
          </div>
          </Row>
          </Col>
        </Row>
        </Container>
    </div>
    )

  );
}
