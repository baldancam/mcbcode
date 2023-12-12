import styled from 'styled-components';

export const Sobre = styled.section`
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #f0fff0;
  background-size: cover;
  background-repeat: no-repeat;
  font-weight: bold;
  color: #696969;
`;

export const TitleSobre = styled.img`
  padding: 8%;
  width: 40%;
  height: 80%;
  margin-left: auto;
  margin-top: 3%;
  padding: 2%;
`;

export const TextSobre = styled.div`
  font-size: 1em;
  max-width: 40%;
  max-height: 50%;
  text-indent: 1em;
  text-align: center;
  align-self: flex-end; /* Alinha no lado direito */
  margin-left: auto; /* Move para o lado direito */
  margin-right: 5%; /* Move para o lado esquerdo */
  margin-bottom: 15%;
  border-top: 0.2em solid #a5befa;
  border-right: 0.2em solid #a5befa;
  border-radius: 2%;
  padding: 2%;
  cursor: pointer;
  overflow: auto;

  .TextEffect:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    color: #1756ac;
    filter: drop-shadow(6px 7px 8px #a056fe);
  }
`;
