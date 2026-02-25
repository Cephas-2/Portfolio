import './index.css';
import profilePic from './assets/profile.jpg';
import logo from './assets/logo.png';
import code from './assets/code.png';
import {
  FaHotel,
  FaChurch,
  FaStore,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF
} from 'react-icons/fa';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const visiblePoint = 100;

        if (elementTop < windowHeight - visiblePoint) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div>
      {/* === Navbar === */}
      <nav className="navbar">
        <div className="nav-logo">
        <li><a href="#"><img src={logo} alt="Ce_phas" className="logo" /></a></li>  
        </div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* === About Section === */}
      <section id="about" className="about-section reveal">
        <div className="about-image">
          <img src={profilePic} alt="Ce_phas" className="profile-img" />
        </div>
        <div className="about-text">
          <h2 className="gradient-text">Hello I’m Cephas Peter,</h2>
          <p>
            A passionate web developer with a love for creating clean, responsive,
            and user-friendly web applications. I enjoy learning new technologies
            and turning creative ideas into reality.
          </p>
        </div>
      </section>

      {/* === Skills / Intro Cards === */}
      <section id="skills">
        <div className="transparent-cards">

         <div className="transparent-card reveal">
  <h3>Creative Developer</h3>
  <p>
    I build sleek, high-performance websites and applications that blend 
    modern design with smooth functionality. I work comfortably with React 
    for frontend development using JavaScript, TypeScript, HTML, CSS, and 
    Tailwind CSS. On the backend, I use Python with Flask and have some 
    experience with Django. For databases, I’ve worked with MySQL, SQLite, 
    and have basic experience with PostgreSQL.
  </p>
</div>

          <div className="transparent-card reveal">
            <h3>Passionate Learner</h3>
            <p>
              Every project I create is part of my growth — exploring new tools,
              styles, and creative ideas in web design.
            </p>
            <img src={code} alt="Ce_phas coding" className="code" />
          </div>

        </div>



        {/* === Projects Section === */}
        <h1
          id="projects"
          className="gradient-text reveal"
          style={{ fontSize: '2.5rem', textAlign: 'center', marginTop: '60px' }}
        >
          Below are some demo websites I've developed — click to have a look
        </h1>

        <div className="stats">

          <div className="stat-card reveal">
            <div className="icon-wrap"><FaHotel className="icon" /></div>
            <h2>Hotel Demo Website</h2>
            <p>
              <a
                href="https://coding.co.ke/2025/Lab7/Funo/funupatamubeachhotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                Visit Patamu Beach Hotel
              </a>
            </p>
          </div>

          <div className="stat-card reveal">
            <div className="icon-wrap"><FaChurch className="icon" /></div>
            <h2>Church Website</h2>
            <p>
              <a
                href="https://hopeoflifeministries.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                Visit Hope Of Life
              </a>
            </p>
          </div>

          <div className="stat-card reveal">
            <div className="icon-wrap"><FaStore className="icon" /></div>
            <h2>Online Demo Shop</h2>
            <p>
              <a
                href="https://ceph-mod-demoonlineshop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
              >
                Visit Our Demo Shop
              </a>
            </p>
          </div>

        </div>
      </section>

              <section className="quote-section reveal">
  <blockquote>
   "    I’m not one of the top web designers in town — and I don’t claim to be. What I offer is something just as important: dedication, integrity, and genuine care for every project I take on. I understand that behind every website is a dream, a brand, or a business that matters deeply to someone. When you trust me with your project, you’re trusting me with something valuable — and I take that responsibility seriously. I focus on clear communication, reliable delivery, and building solutions that don’t just look good, but work effectively for your goals. If you’re looking for someone who will treat your vision like it truly matters, I’m ready to build it with you.
  </blockquote>
</section>

      {/* === Footer === */}
      <footer className="footer reveal" id="contact">
        <div className="footer-line"></div>
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Cephas Peter | All Rights Reserved</p>

          <div className="footer-icons">
            <a href="https://wa.me/254727003182" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="footer-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="footer-icon" />
            </a>
            <a href="https://github.com/Cephas-2" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" />
            </a>
            <a href="mailto:petermwangome10@gmail.com">
              <FaEnvelope className="footer-icon" />
            </a>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;