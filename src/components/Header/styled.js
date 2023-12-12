import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #6cabf5, #1db954);
  box-shadow: 0px 2% 4% rgba(0, 0, 0, 0.6);
  z-index: 1000;
  padding: 1%;

  .menuitens:hover,
  .home:hover {
    transform: scale(1.15);
    transition: transform 0.3s ease;
    backface-visibility: hidden;
    color: #fff;
  }
`;

export const Logo = styled.img`
  width: 120px; /* Ajuste a largura conforme necessário */
  margin: 0; /* Removido a margem para ajustar o espaçamento diretamente no Nav */
  padding: 0;
  outline: none;
  box-sizing: border-box;
`;

export const CustomLink = styled(Link)`
  color: #000;
  margin: 0 10px 0;
  font-weight: bold;
  font-size: 0.6em;
`;

export const MenuInitial = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuFinal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
