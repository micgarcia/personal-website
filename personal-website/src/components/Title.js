import Typed from "typed.js";
import React from 'react';

function Title() {
  const title = React.useRef(null);
  const name = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const titleOptions = {
      strings: [
        'Full Stack Web Developer'
      ],
      typeSpeed: 50,
      showCursor: false,
      startDelay: 2500
    };

    const nameOptions = {
      strings: [
        'Michael Garcia'
      ],
      typeSpeed: 50,
      showCursor: false,
      startDelay: 5000
    }

    typed.current = new Typed(title.current, titleOptions);

    typed.current = new Typed(name.current, nameOptions)

    return () => {
      typed.current.destroy();
    }
  }, [])

  return (

    <div className="titleCont">
      <div className="navbarCont">
        <div class="gitCont">
          <span class="material-symbols-outlined">person</span>
          <a className="github" href="https://github.com/micgarcia">Github</a>
        </div>
        <div class="linkedinCont">
          <span class="material-symbols-outlined">group</span>
          <a className="linkedin" href="https://www.linkedin.com/in/michael-garcia-developer/">Linkedin</a>
        </div>

        <div className="emailCont">
          <span class="material-symbols-outlined">mail</span>
          <h4 className="emailLink">garciam9185@gmail.com</h4>
        </div>
        <div class="phoneCont">
          <span class="material-symbols-outlined">phone</span>
          <h4 className="phoneNum">(916) 257-9629</h4>
        </div>
      </div>

      <h1 ref={title}></h1>
      <h2 ref={name}></h2>

    </div>
  )
}

export default Title;