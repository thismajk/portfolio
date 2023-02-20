import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-scroll";
import { useEffect } from 'react';

import Site1 from './site1.png';
import Site2 from './site2.png';
import Site3 from './site3.png';
import Photos from './photos.png';

function App() {
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    const alpha = scrollPosition === 0 ? 0 : scrollPosition < 500 ? scrollPosition / 500 : 1;
    const color = 'rgba(12, 33, 57, '+alpha+')';
    document.getElementById('header').style.backgroundColor = color;
};
useEffect(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  }, []);
    
  return (
    <>
      <section id="section-start">
        <div className="container">
          <header id='header'>
            <div id="sygnature">Portfolio</div>
            <nav>
              <ul>
                <li><Link to='section-start' smooth={true} offset={-200} duration={500}>Start</Link></li>
                <li><FontAwesomeIcon icon={faAngleRight}/></li>
                <li><Link to='section-aboutme' smooth={true} offset={-200} duration={500}>O mnie</Link></li>
                <li><FontAwesomeIcon icon={faAngleRight}/></li>
                <li><Link to='section-skills' smooth={true} offset={-100} duration={500}>Umiejętności</Link></li>
                <li><FontAwesomeIcon icon={faAngleRight}/></li>
                <li><Link to='section-projects' smooth={true} offset={-100} duration={500}>Projekty</Link></li>
              </ul>
            </nav>
            <a href="mailto: michal.gombos@icloud.com">
              <div id="email-button">
                  <FontAwesomeIcon icon={faEnvelope}/>
              </div>
            </a>
            
          </header>
          <div id="hero">
            <div id="hero-text">
              <div>
              <p>Cześć, <span className="second-color">jestem</span></p>
              <p className="second-color">Michał Gombos</p>
              <p>Uczę się na Fontend developera</p>
              <div id="socials">
                <a href='https://github.com/thismajk' target="_blank" rel="noreferrer">
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faGithub} />
                  </div>
                </a>
                <a href='https://www.linkedin.com/in/thismajk/' target="_blank" rel="noreferrer">
                  <div className="social-icon">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </div>
                </a>
              </div>
              </div>
            </div>
            <div id="hero-image">
              <img src={Photos} alt="Hero "/>
            </div>
            
          </div>
        </div>
      </section>    
      <section id="section-aboutme">
        <div className='container'>
          <h1>O mnie  </h1>
          <div id="aboutme">
            Jestem absolwetem Wyższej Szkoły Banokowe we Wrocławiu na kierunku Infośrmatyka I stopnia, specjalizacja programowanie aplikacji w chmurze. Aktualnie Studiuje w Dolnośląskiej Szkole Wyższej na kierunku media kreatywne. Moim hobby jest tworzenie stron internetowych, sport, gotowanie, gry, filmy, seriale. Lubię wyzwania w szególności te w rozwiązywaniu problemów podczas kodowania. 
          </div>
        </div>
      </section>
      <section id="section-skills">
        <div className='container'>
          <h1>Umiejętności</h1>
          <div id="skills">

            <div className='skill-item'>
              <h2>Języki</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>PHP</li>
              </ul>
            </div>
            

            <div className='skill-item'>
              <h2>Fameworki</h2>
              <ul>
                <li>React</li>
                <li>React Native</li>
                <li>ExpressJS</li>
              </ul>
            </div>

            <div className='skill-item'>
              <h2>Technologie</h2>
              <ul>
                <li>MongoBD</li>
                <li>Mysqli</li>
                <li>Git</li>
              </ul>
            </div>

            <div className='skill-item'>
              <h2>Programy</h2>
              <ul>
                <li>Visual Studio Code</li>
                <li>Adobe Photshop</li>
                <li>Adobe Illustrator</li>
                <li>Figma</li>
              </ul>
            </div>

          </div>
        </div>
      </section>
      <section id='section-projects'>
        <div className='container'>
          <h1>Projekty</h1>
            <div id="projects">
              <div className='project-desc'>
                <h2>Cadronet</h2>
                <p>Aplikacja kadrowa słóżąca do układania grafików pracy, zdawania przez pracowników dyspozycji, oraz odliczania godzin przepracowanych przez pracowników.<br />
                  Kod źródłowy:<br></br>
                  Frontend: <a href='https://github.com/thismajk/cadronet-website'>github.com/thismajk/cadronet-website</a><br />
                  Backend: <a href='https://github.com/thismajk/cadronet-api'>github.com/thismajk/cadronet-api</a><br />
                  Mobile app: <a href="https://github.com/thismajk/cadronet-mobile-app">github.com/thismajk/cadronet-mobile-app</a>
                </p>
                <div className='tags'>
                  <div className='tag-item'>HTMl</div>
                  <div className='tag-item'>CSS</div>
                  <div className='tag-item'>Javascript</div>
                  <div className='tag-item'>React</div>
                  <div className='tag-item'>PHP</div>
                  <div className='tag-item'>MySql</div>
                </div>
              </div>
              <div className="project-img">
                <img src={Site2} alt='zdjęcie strony Cadronet'/>
              </div> 

              <div className='project-desc'>
                <h2>Mery art gallery</h2>
                <p>Strona internetowa stworzona z myślą o prezentowaniu Obrazów namalowanych przez Marzenę Okuszko, oraz ich sprzeday. Strona dostępna jest pod adresem: <a href="https://www.meryartgallery.com">meryartgallery.com</a></p>
                <div className='tags'>
                  <div className='tag-item'>HTMl</div>
                  <div className='tag-item'>CSS</div>
                  <div className='tag-item'>Javascript</div>
                  <div className='tag-item'>PHP</div>
                  <div className='tag-item'>MySql</div>
                </div>
              </div>
              <div className="project-img">
                <img src={Site1} alt='Zdjęcie strony Mery art gallery'/>
              </div>  

              <div className='project-desc'>
                <h2>Quizz</h2>
                <p>Strona z quizzami, na której można rozwiązywać quizzy, oraz je tworzyć. Quizz: <a href="https://github.com/thismajk/quizz">github.com/thismajk/quizz</a></p>
                <div className='tags'>
                  <div className='tag-item'>HTMl</div>
                  <div className='tag-item'>CSS</div>
                  <div className='tag-item'>PHP</div>
                  <div className='tag-item'>MySql</div>
                </div>
              </div>
              <div className="project-img">
                <img src={Site3} alt='Zdjęcie strony Quizz'/>
              </div>   

            </div> 
        </div>
      </section>
    </>

  );
}

export default App;
