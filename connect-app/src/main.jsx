import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Team from './team_members/teamMembers.jsx'
import Login from './login/login-button.jsx'
import Recordings from './recordings/Recordings.jsx'
// import Sidebar from './dashboard/Sidebar.jsx'
import Dashboard from './dashboard/Dashboard.jsx'
import Profile from './profile/Profile.jsx'
// import Test from './testing.jsx'
import { Auth0ProviderWithNavigate } from "./login/auth0-provider-with-navigate.jsx";
// import Nav from './Navbar.jsx'
// import User from './userTable.jsx'
// import NavbarItem from './Navbar.jsx'
import {NextUIProvider} from '@nextui-org/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@aws-amplify/ui-react/styles.css';
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <React.StrictMode>
  <Auth0ProviderWithNavigate>
    <NextUIProvider>
    <Routes>
    <Route path="/profile" element={<Profile />} />
    <Route path="/recordings" element={<Recordings />} />
    <Route path="/team" element={<Team />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/" element={<Login />} />
    </Routes>
    </NextUIProvider>
    </Auth0ProviderWithNavigate>,
  </React.StrictMode>,
  </Router>
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <Router>
//   <React.StrictMode>
//   <Auth0ProviderWithNavigate>
//     <NextUIProvider>
//     <Routes>
//     <Route path="/profile" element={<Profile />} />
//     <Route path="/test" element={<Test />} />
//     <Route path="/side" element={<Sidebar />} />
//     <Route path="/recordings" element={<Recordings />} />
//     <Route path="/team" element={<Team />} />
//     <Route path="/dashboard" element={<Dashboard />} />
//     <Route path="/" element={<NewLogin />} />
//     </Routes>
//     </NextUIProvider>
//     </Auth0ProviderWithNavigate>,
//   </React.StrictMode>,
//   </Router>
// )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css';
// import { Amplify } from 'aws-amplify';
// import amplifyconfig from './amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
