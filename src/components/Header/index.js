import React, { useEffect } from 'react';
import { FaHome } from 'react-icons/fa';

import { CustomLink, Logo, MenuFinal, MenuInitial, Nav } from './styled';

export default function Header() {
  // Função para rolar até a seção correspondente
  const scrollToSection = (hash) => {
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      // Obtém a altura do navbar (considerando que é fixo)
      const navbarHeight = document.querySelector('nav').offsetHeight;

      // Rola para a seção com um ajuste para a altura do navbar
      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  // Adiciona um ouvinte de clique ao Link
  const handleLinkClick = (hash) => (event) => {
    event.preventDefault();
    scrollToSection(hash);
  };

  useEffect(() => {
    // Obtém o hash (parte após o #) da URL
    const { hash } = window.location;

    // Verifica se há um hash na URL e rola para a seção correspondente
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  return (
    <Nav>
      <MenuInitial>
        <Logo src="./mcb-code.svg" />
      </MenuInitial>

      <MenuFinal>
        <CustomLink to="#home" className="home" onClick={handleLinkClick('#home')}>
          <FaHome size={24} />
        </CustomLink>

        <CustomLink to="#about" className="menuitens" onClick={handleLinkClick('#about')}>
          <h1>Sobre</h1>
        </CustomLink>

        <CustomLink to="#skills" className="menuitens" onClick={handleLinkClick('#skills')}>
          <h1>Habilidades</h1>
        </CustomLink>

        <CustomLink to="#projects" className="menuitens" onClick={handleLinkClick('#projects')}>
          <h1>Projetos</h1>
        </CustomLink>

        <CustomLink to="#contato" className="menuitens" onClick={handleLinkClick('#contato')}>
          <h1>Contato</h1>
        </CustomLink>
      </MenuFinal>
    </Nav>
  );
}
