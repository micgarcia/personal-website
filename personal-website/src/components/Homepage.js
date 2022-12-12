import Title from "./Title.js";
import Bio from "./Bio.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Links from "./Links.js";
import Navbar from "./Navbar.js";
import 'material-symbols';

function Homepage() {
  return (
    <div className="homePage">
      <Navbar />
      <Title />
      <Bio />
      <Skills />
      <Projects />
      <Links />

    </div>
  )
}

export default Homepage;