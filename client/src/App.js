import React,{useEffect} from 'react';
import Nav from "./components/nav";
import { keepTheme } from './theme'
import Main from './components/main';

function App() {
  useEffect(() => {
    keepTheme();
  })
  return (
    <>
    <Nav/>
    <Main/>
    </>
  );
}

export default App;
