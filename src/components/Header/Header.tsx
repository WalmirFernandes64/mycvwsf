import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <img src={process.env.PUBLIC_URL + '/logo100x100.png'} alt="Logo" />
      <h1>Walmir da Silva Fernandes</h1>
      <p>Arquiteto de Soluções | Soluções Cloud</p>
    </header>
  );
};

export default Header;
