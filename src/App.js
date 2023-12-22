import { Home, NavBar, SocialLinks, About, Portfolio, Skill, Contact } from "./components";
import "./index.css";

function App() {
  return (
    <div >
      <NavBar />
      <Home/>

      <SocialLinks/>
      {/* <About/> */}

      <Portfolio/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
