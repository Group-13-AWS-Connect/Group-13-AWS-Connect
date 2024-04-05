import { useEffect, useState } from 'react';

import { generateClient } from 'aws-amplify/api';

import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages/sign-in'
import { Contact_Control_Panel } from './pages/contact-control-panel'
import { Dashboard } from './pages/dashboard'
import { Amplify } from 'aws-amplify';



import config from './amplifyconfiguration.json';
import { list } from 'aws-amplify/storage';



Amplify.configure(config);


const initialState = { name: '', description: '' };
const client = generateClient();
try {
  const result = await list({
    prefix: 'recordings/'
  });
  console.log(result)
} catch (error) {
  console.log(error);
}
function App() {
// const App = ({ signOut, user }) => {
//   const [formState, setFormState] = useState(initialState);
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   function setInput(key, value) {
//     setFormState({ ...formState, [key]: value });
//   }

//   async function fetchTodos() {
//     try {
//       const todoData = await client.graphql({
//         query: listTodos
//       });
//       const todos = todoData.data.listTodos.items;
//       setTodos(todos);
//     } catch (err) {
//       console.log('error fetching todos');
//     }
//   }

//   async function addTodo() {
//     try {
//       if (!formState.name || !formState.description) return;
//       const todo = { ...formState };
//       setTodos([...todos, todo]);
//       setFormState(initialState);
//       await client.graphql({
//         query: createTodo,
//         variables: {
//           input: todo
//         }
//       });
//     } catch (err) {
//       console.log('error creating todo:', err);
//     }
//   }


  return (
    <main className='App'>
      <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/contact-control-panel" element={<Contact_Control_Panel/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </main>
    
  );
};

// const styles = {
//   container: {
//     width: 400,
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 20
//   },
//   todo: { marginBottom: 15 },
//   input: {
//     border: 'none',
//     backgroundColor: '#ddd',
//     marginBottom: 10,
//     padding: 8,
//     fontSize: 18
//   },
//   todoName: { fontSize: 20, fontWeight: 'bold' },
//   todoDescription: { marginBottom: 0 },
//   button: {
//     backgroundColor: 'black',
//     color: 'white',
//     outline: 'none',
//     fontSize: 18,
//     padding: '12px 0px'
//   }
// };

export default App;

/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
