// import React from 'react';

// function Home() {
//   return (
//     <div>
//       <h2>Welcome to the Home Page</h2>
//       <p>This is the Home page of our application.</p>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import Navbar from './Navigation'; // Assuming you have a Navbar component for the sidebar

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h2>Welcome to the Home Page</h2>
        <p>This is the Home page of our application.</p>
      </div>
    </div>
  );
}

export default Home;
