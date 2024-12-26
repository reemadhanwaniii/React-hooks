
//import { useEffect, useLayoutEffect } from 'react'
import './App.css'
import HugeList from './HugeList';

function App() {
  
  // useEffect(()=>{
  //   //prompt('useEffect')
  //   console.log("hello");
  //   setTimeout(()=>{
  //      document.title = "use effect"
  //   },5000);
   
  // },[]);

  // useLayoutEffect(()=>{
  //   console.log("hello from layout effect");
  //   document.title = "use layout effect ............."
  // },[]);

  return (
   <>
    App
    <div>
      <HugeList/>
    </div>
   </>
  )
}

export default App;


/**
 * useLayoutEffect is called before useEffect
 * useLayoutEffect is called before the browser paints happens and useEffect is called after paints happen
 */