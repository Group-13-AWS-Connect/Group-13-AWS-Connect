import React, { useState } from 'react';
import { ProSidebar} from 'react-pro-sidebar'
import { Link } from 'react-router-dom';
import { SidebarData } from './sidebarData'; // Assuming you have defined sidebar data
import './Navigation.css';
import logo from './company_logo.jpg';
import company_name from './company_name.jpg';
import { IconContext } from 'react-icons';


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <ProSidebar>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <img src={logo} alt="Company Logo" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              <img src={logo} alt="Company Logo"  />
              <img src={company_name} alt="Company Name"  />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
      </ProSidebar>
    </>
  );
}

export default Navbar;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import { SidebarData } from './sidebarData'; // Assuming you have defined sidebar data
// import './Navigation.css';
// import logo from './company_logo.jpg';
// import company_name from './company_name.jpg';
// import { IconContext } from 'react-icons';

// function Navbar() {
//   return (
//     <div className='sidebar'>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <Link to='#' className='menu-bars'>
//             <img src={logo} alt="Company Logo" />
//             <img src={company_name} alt="Company Name" />
//           </Link>
//         </div>
//         <ul className='nav-menu-items'>
//           {SidebarData.map((item, index) => (
//             <li key={index} className={item.cName}>
//               <Link to={item.path}>
//                 {item.icon}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </IconContext.Provider>
//     </div>
//   );
// }

// export default Navbar;



































































// // navigation.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import '@aws-amplify/ui-react/styles.css';
// import logo from './Logo.jpg'; // Import the logo image
// import profilePic from './emp_profilepic.jpg'; // Import the profile picture
// import notificationIcon from './Bell_icon.jpg'; // Import the notification icon
// import './Navigation.css'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


// function Navigation() {
//   return (
//     <Navbar expand="lg" className="custom-navbar-bg">
//       <Container fluid>
//       <Navbar.Brand href="#home">
//           <img
//             src={logo}
//             height="30"
//             className="d-inline-block align-top"
//             alt="Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
//           <Nav className="me-auto">
//             <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
//             <Nav.Link href="#link">Queue</Nav.Link>
//             <Nav.Link href="#link">Recordings</Nav.Link>
//             <Nav.Link href="#link">Employees</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//          {/* Notification icon */}
//         <a href="/notification" className="nav-link">
//          <img src={notificationIcon} 
//               height = "20"
//               alt="Notification" 
//               className="notification-icon" />
//         </a>
//         <div className="navbar-spacing"></div>
//         {/* Profile picture */}
//         <a href="/profile" className="nav-link">
//         <img src={profilePic}
//              height = "20" 
//              alt="Profile" 
//              className="profile-picture" />
//         </a>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navigation;


















// // <NavDropdown title="Dropdown" id="basic-nav-dropdown">
// // <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// // <NavDropdown.Item href="#action/3.2">
// //   Another action
// // </NavDropdown.Item>
// // <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// // <NavDropdown.Divider />
// // <NavDropdown.Item href="#action/3.4">
// //   Separated link
// // </NavDropdown.Item>
// // </NavDropdown>



// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import '@aws-amplify/ui-react/styles.css';
// // import logo from './logo.svg'; // Import the logo image
// // // import profilePic from './profile.jpg'; // Import the profile picture
// // // import notificationIcon from './notification.png'; // Import the notification icon
// // import './Navigation.css'

// // function Navigation() {
// //   return (
// //     <div className="navigation-container">
// //       <div className="logo">
// //         <img src={logo} alt="Logo" />
// //       </div>
// //       <div className="dashboard-link">
// //         <Link to="/dashboard">Dashboard</Link>
// //       </div>
// //       <div className="queue-link">
// //         <Link to="/queue">Queue </Link>
// //       </div>
// //       <div className="recordings-link">
// //         <Link to="/recordings">Recordings</Link>
// //       </div>
// //       <div className="employees-link">
// //         <Link to="/employees">Employees</Link>
// //       </div>
      
// //       {/* <div className="profile-picture">
// //         <img src={profilePic} alt="Profile" />
// //       </div>
// //       <div className="notification-icon">
// //         <img src={notificationIcon} alt="Notification" />
// //       </div> */}
// //     </div>
// //   );
// // }



// // export default Navigation;