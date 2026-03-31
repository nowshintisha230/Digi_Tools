import Data from './components/Data'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Performance from './components/Performance';
import Getstarted from './components/Getstarted';
import Transparent from './components/Transparent';
import Transform from './components/Transform';
import Footer from './components/Footer';
import './App.css'
import { Suspense ,useState } from 'react';




const getData = async()=>{
  const res=await fetch('/data.json')
  return res.json();
}
function App() {
  const getDataPromise=getData();
const [cartData, setCartData] = useState([]);
  return (
    <>
    <Navbar cartCount={cartData.length}></Navbar>
    <Banner></Banner>
    <Performance></Performance>
    <Suspense fallback={<h1>Loading........</h1>}>
      <Data getDataPromise={getDataPromise} cartData={cartData} setCartData={setCartData}></Data>
    </Suspense>
    
     <Getstarted></Getstarted>
     <Transparent></Transparent>
     <Transform></Transform>
     <Footer></Footer>
     </>
  )
}

export default App
