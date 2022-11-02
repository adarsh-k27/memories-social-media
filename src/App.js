import { useEffect } from "react";
import { NavBar } from "./components";
import Router_wrapper from "./router";
import {useSelector,useDispatch} from 'react-redux'
import {Auth_Restore} from './reducers/auth'
function App() {
  const {auth_details}=useSelector(state=>state.AUTH)
  const dispatch=useDispatch()
  let Auth=localStorage.getItem('auth')
  let Details = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    if(Auth){
   dispatch(Auth_Restore(Details))
    }
  },[])
  return (
    <div className="App w-screen h-screen md:h-auto">
      <NavBar />
      <Router_wrapper>

      </Router_wrapper>
       {/* <div className = "w-full h-screen md:h-auto grid grid-rows-[85%,15%] md:grid-cols-[75%,25%] mx-2" >
          <p>Home Page Components</p>
          <SideBar />
       </div> */}
    </div>
  );
}

export default App;
