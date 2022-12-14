
function Links() {
  return (
    <div className="linksCont">

      <div className="gitCont">
        <span className="material-symbols-outlined">person</span>
        <a className="github" href="https://github.com/micgarcia">Github</a>
      </div>
      <div className="linkedinCont">
        <span className="material-symbols-outlined">group</span>
        <a className="linkedin" href="https://www.linkedin.com/in/michael-garcia-developer/">Linkedin</a>
      </div>

      <div className="emailCont">
        <span className="material-symbols-outlined">mail</span>
        <h4 className="emailLink">garciam9185@gmail.com</h4>
      </div>
      <div className="phoneCont">
        <span className="material-symbols-outlined">phone</span>
        <h4 className="phoneNum">(916) 257-9629</h4>
      </div>
    </div>
  )
}

export default Links;