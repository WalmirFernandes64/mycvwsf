import React, { useState } from 'react';
import { FaUser, FaSuitcase, FaGraduationCap, FaStar, FaProjectDiagram , FaHamburger} from 'react-icons/fa';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <button onClick={toggleNavigation} className="menu-button">
      <FaHamburger />
    </button>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#about"><FaUser /> <span>Sobre Mim</span></a></li>
          <li><a href="#experience"><FaSuitcase /> <span>Experiência Profissional</span></a></li>
          <li><a href="#education"><FaGraduationCap /> <span>Educação e Formação</span></a></li>
          <li><a href="#skill"><FaStar /><span>Habilidades</span> </a></li>
          <li><a href="#project"><FaProjectDiagram /><span>Projetos</span> </a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
