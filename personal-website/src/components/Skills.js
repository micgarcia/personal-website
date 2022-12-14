
function Skills() {
  return (
    <div className="skillsCont">
      <div className="frontEnd">
        <span className="material-symbols-outlined">monitor</span>
        <h1>Front End</h1>
        <h2>Tools</h2>
        <ul>
          <li>React.js</li>
          <li>Javascript ES6</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Sass</li>
          <li>Git / Github</li>
          <li>Testing Frameworks (Jest, Mocha)</li>
        </ul>
      </div>
      <div className="backEnd">
        <span className="material-symbols-outlined">dns</span>
        <h1>Back End</h1>
          <h2>Tools</h2>
          <ul>
            <li>Node.js</li>
            <li>NoSQL (MongoDB)</li>
            <li>Express</li>
            <li>Java</li>
            <li>Pug</li>
            <li>JSON</li>
            <li>Webpack</li>
          </ul>
      </div>
      <div className="development">
        <span className="material-symbols-outlined">developer_mode</span>
        <h1>Developer Skills</h1>
        <h2>Design Patterns</h2>
        <ul>
          <li>REST API</li>
          <li>MVC Architecture</li>
          <li>CRUD</li>
          <li>TDD</li>
          <li>Responsive Design</li>
          <li>Web Accessibility Design</li>
        </ul>
      </div>
    </div>
  )
}

export default Skills;