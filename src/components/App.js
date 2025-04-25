
import React from "react";
import './../styles/App.css';
import {useParams, Routes, Route, Link} from 'react-router-dom'
import Layout from './Layout.js'
import Women from './Women.js'


function Item(){
  const {category} = useParams()
  return <p>{category}</p>
}

const App = () => {
  return (
    <>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/women">Women</Link></li>
      </nav>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/women' element={<Women />} >
          <Route path=':category' element={<Item />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
