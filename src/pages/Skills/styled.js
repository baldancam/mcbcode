import styled from 'styled-components';

export const Skills = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f0fff0;
  background-image: url('./page-skills/img-fundo2.png');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TableSkills = styled.div`
  width: 50%;
  height: 30%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
`;

export const TecSkills = styled.img`
  width: 100%;
  height: 100%;

  transition: transform 0.3s ease; /* Adiciona uma transição suave ao efeito */

  &:hover {
    transform: rotate(360deg);
    color: #1756ac;
  }
`;

export const Div1 = styled.div`
  width: 100%;
  height: 100%;
`;

/* export const Arrow = styled.img`
  width: 150px;
  height: 150px;

  margin-top: -2%;

  transition: transform 0.3s ease; /* Adiciona uma transição suave ao efeito */

/* &:hover {
    transform: scale(1.5);
    color: #1756ac;
    filter: drop-shadow(6px 7px 8px rgb(65, 65, 225));
  }
`; */
