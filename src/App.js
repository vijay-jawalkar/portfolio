import { Home, NavBar, SocialLinks, About, Portfolio } from "./components";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Home/>

      <SocialLinks/>
      <About/>

      <Portfolio/>
    </div>
  );
}

export default App;
