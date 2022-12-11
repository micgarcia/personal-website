import Title from "./Title.js";
import Bio from "./Bio.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Links from "./Links.js";
import 'material-symbols';

function Homepage() {
  return (
    <div className="homePage">
      <Title />
      <Bio />
      <Skills />
      <Projects />
      <Links />

    </div>
  )
}

export default Homepage;