import { NavBar, SideBar } from "./components";
import Router_wrapper from "./router";
function App() {
  return (
    <div className="App w-screen">
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
