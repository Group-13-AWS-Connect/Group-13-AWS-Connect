import React from 'react';
import Navbar from './Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Reports from './Reports';
import Products from './Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
















// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import NotFound from './components/NotFound';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//           <Route component={NotFound} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;
