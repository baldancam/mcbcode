import styled from 'styled-components';

export const Title = styled.section`
  display: grid;
  grid-template-columns: repeat 1fr;
  grid-template-rows: 1fr 2fr 2fr 1fr;

  align-items: center;
  justify-content: center;
  font-size: 2em;
  color: #1db954;
  width: 100%;
  height: 100%;
  background-image: url('./seccion-home2.png');
  background-size: cover;
  background-repeat: no-repeat;
  font-family: sans-serif;
  position: relative;
  overflow: auto;

  h1 {
    padding: 12vh;
    border: 0;
    cursor: pointer;
    color: #ff8c08;
    margin-left: 25%;
  }

  h2 {
    padding: 5vh;
    color: #20a1d8;
    text-align: center;
    line-height: 1.5;
    max-width: 50%;
    cursor: pointer;
    margin-left: 25%;
  }
`;
