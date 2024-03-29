function Projects() {
  return (
    <div className="projectsCont">
      <div className="projectOne">
        <h1>Movie Tracker</h1>
        <div className="movieProjPic">
          <div className="movieSiteLink">
            <a href="https://michael-movie-tracker.netlify.app" target="_blank">Visit Site</a>
          </div>
          <div className="movieGitLink">
            <a href="https://github.com/micgarcia/letterbox" target="_blank">Visit Github</a>
          </div>
        </div>
        <p>Web App to search for movies by genre or popularity and save the ones
          that you want to watch later. Developed using <b>React.js</b> and <b>Firebase</b> for
          backend services.</p>
      </div>
      <div className="projectTwo">
        <h1>Inventory App</h1>
        <div className="invProjPic">
          <div className="invGitLink">
            <a href="https://github.com/micgarcia/inventory-app" target="_blank">Visit Github</a>
          </div>
        </div>

        <p>Mock Inventory App developed using <b>Node.js/Express</b>, <b>MongoDB</b> for the database,
          and <b>PUG</b> view templates for the server side rendering. This project demonstrates
          my proficiency with implementing <b>REST API</b> principles and <b>MVC</b> architectures within
          a <b>SSR application</b>.
          </p>
      </div>
    </div>
  )
}

export default Projects;