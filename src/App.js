import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';



function App() {
  const [mode, setMode]=useState('light');// wherter dark mode enabled or not
  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 2000);
  }

 const toggleMode=()=>{
  if(mode==='light'){
  setMode('dark')
  document.body.style.backgroundColor='grey';
  showAlert("Dark mode has been enabled","success");
  document.title='TextUtils - Dark Mode';
  }
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");
    document.title='TextUtils - Light Mode';
  }
  }
  
  return (
    <>
   
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading ="Enter a text to analyze"  mode={mode}/>
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
