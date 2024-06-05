import { Home, NavBar, SocialLinks, Portfolio, About, Skill, Contact, Experience } from "./components";
import "./index.css";


function App() {
  return (
    <div className="bg-slate-950">
      <NavBar />
      <Home/>

      <SocialLinks  />
      <About/>
      <Experience/>
      <Portfolio/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;
