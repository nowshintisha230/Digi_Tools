import Data from './components/Data'
import './App.css'
import { Suspense } from 'react';

const getData = async()=>{
  const res=await fetch('/data.json')
  return res.json();
}
function App() {
  const getDataPromise=getData();

  return (
    <>
    <Suspense fallback={<h1>Loading........</h1>}>
      <Data getDataPromise={getDataPromise}></Data>
    </Suspense>
     </>
  )
}

export default App
