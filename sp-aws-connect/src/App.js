// import { PasswordField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './App.css';
import Form from 'react-bootstrap/Form';
// import { PasswordField } from '@aws-amplify/ui-react';



function App() {
  return (
    <div>
      <Container>
        {/* <Row sm="12" md="12" lg="12" xl="12" xxl="12">
        <Col sm={{ span: 6, offset: 6 }} md={{ span: 6, offset: 6 }} lg={{ span: 6, offset: 6 }} xl={{ span: 6, offset: 6 }} xxl={{ span: 6, offset: 6 }} className = "login-bg">
          </Col>
        </Row> */}
        <Row>
          <Col sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 1 }} xxl={{ span: 4, offset: 1 }}>
            <h1 className="login-welcome">Log In</h1>
            <p className="login-welcome-info">Welcome back! Please enter your credentials.</p>
          </Col>
          {/* <Col  className = "login-bg">
          </Col> */}
        </Row>
        <Row>
          <Col sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 1 }} xxl={{ span: 4, offset: 1 }}>
          <Form class="welcome-fields">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Employee ID</Form.Label>
                <Form.Control size = "sm" type="email" placeholder="Employee ID" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size = "sm" type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className = "forgot-pass">
          <Button variant="link">Forgot Password?</Button>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 4, offset: 1 }} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 1 }} xl={{ span: 4, offset: 1 }} xxl={{ span: 4, offset: 1 }} className = "sign-in">
            <Button class = "login-submit" href="./Dashboard.js">Sign-in</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

// sm="4" md="4" lg="4" xl="4" xxl="4"

// sm="6" md="6" lg="6" xl="6" xxl="6"
// import './App.css';
// import '@aws-amplify/ui-react/styles.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



// function App() {
//   return (
//     <div className="login-welcome">
//         <Container>
//           <Row>
//             <Col sm="6" md="6" lg="6" xl="6" xxl="6">
//             <p>Welcome back!</p>
       

//             </Col>
//           </Row>

//         </Container>    
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';
// import '@aws-amplify/ui-react/styles.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
