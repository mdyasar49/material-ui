import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import MyLayoutComponent from './MyLayoutComponent';
import GridLayout from './Components/GridLayout';
import StackLayout from './Components/StackLayout';
import BoxLayout from './Components/BoxLayout';
import HomeLayout from './Components/HomeLayout';
import Flex from './Components/Flex';
import Position from './Components/Position';
import Float from './Components/Float';
import Display from './Components/Display';
import MultipleProperties from './Components/MultipleProperties';
import MyCalendar from './Components/MyCalendar';

function App() {
  const routeNames = {
    '/': 'Home',
    '/Grid': 'Grid Layout',
    '/Stack': 'Stack Layout',
    '/Box': 'Box Layout',
    '/Flex': 'Flex',
    '/Position': 'Position',
    '/Float': 'Float',
    '/Display': 'Display',
    '/MultipleProperties': 'MultipleProperties',
    '/Calendar': 'My Calendar'
  };

  return (
    <Router>
      <MyLayoutComponent routeNames={routeNames} />
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/Grid' element={<GridLayout />} />
        <Route path='/Stack' element={<StackLayout />} />
        <Route path='/Box' element={<BoxLayout />} />
        <Route path='/Flex' element={<Flex />} />
        <Route path='/Position' element={<Position />} />
        <Route path='/Float' element={<Float />} />
        <Route path='/Display' element={<Display />} />
        <Route path='/MultipleProperties' element={<MultipleProperties />} />
        <Route path='/Calendar' element={<MyCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;
