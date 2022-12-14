import Typed from "typed.js";
import React from 'react';
import ReactDOM from 'react-dom';

function Title() {
  const title = React.useRef(null);
  const name = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const titleOptions = {
      strings: [
        'Full Stack Web Developer'
      ],
      typeSpeed: 60,
      showCursor: false,
      startDelay: 1500
    };

    const nameOptions = {
      strings: [
        'Michael Garcia'
      ],
      typeSpeed: 60,
      showCursor: false,
      startDelay: 4000
    }

    const onPageLoad = () => {
      typed.current = new Typed(title.current, titleOptions);

      typed.current = new Typed(name.current, nameOptions)
    }

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }



    return () => {
      typed.current.destroy();
    }
  }, [])

  return (

    <div className="titleCont">
      <div className="navbarCont">
        <div className="gitCont">
          <span className="material-symbols-outlined">person</span>
          <a className="github" href="https://github.com/micgarcia" target="_blank">Github</a>
        </div>
        <div className="linkedinCont">
          <span className="material-symbols-outlined">group</span>
          <a className="linkedin" href="https://www.linkedin.com/in/michael-garcia-developer/" target="_blank">Linkedin</a>
        </div>

        <div className="emailCont">
          <span className="material-symbols-outlined">mail</span>
          <h4 className="emailLink">garciam9185@ gmail.com</h4>
        </div>
        <div className="phoneCont">
          <span className="material-symbols-outlined">phone</span>
          <h4 className="phoneNum">(916) 257-9629</h4>
        </div>
      </div>

      <h1 ref={title}></h1>
      <h2 ref={name}></h2>
      <div className="profilePic"></div>

    </div>
  )
}

export default Title;