import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Table = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${colors.primaryDarkColor};
`;

export const Projetos = styled.div`
  width: 95%;
  height: 85%;
  background: ${colors.primaryDarkColor};
  border-radius: 15px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title2 = styled.h1`
  padding: 10px;
`;
export const Content = styled.div`
  width: 90%;
  height: 85%;
  background: #e8e8e8;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  overflow-x: auto;
  min-width: 0;
  gap: 40px;
`;

export const Portfolio = styled.div`
  min-width: 250px;
  height: 350px;
  border-radius: 5px;

  .ImgEffect:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

export const Presentation = styled.img`
  width: 100%;
  height: 40%;
  background: white;
  border-radius: 5px;
  cursor: pointer;
`;

export const Information = styled.div`
  width: 100%;
  height: 60%;
  max-width: 250px;
  border-radius: 5px;
  background: white;
  display: flex;

  align-items: center;
  padding: 3px;
  background: ${colors.primaryDarkColor};
  color: #f5f2d0;
  flex-direction: column;

  h4 {
    padding-bottom: 5%;
    padding-top: 2%;
  }

  p {
    padding-left: 10%;
    padding-right: auto;
    line-height: 1.5;
    padding-bottom: 8%;
  }
`;

export const Buttons = styled.button`
  margin-top: auto;
  margin-bottom: 5%;
  padding: 0;
  display: flex;
  justify-content: flex-end;

  .Btn {
    border: none;
    border-radius: 50%;
    width: 45%;
    height: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition-duration: 0.4s;
    cursor: pointer;
    position: relative;
    background-color: rgb(31, 31, 31);
    overflow: hidden;
  }

  .svgIcon {
    transition-duration: 0.3s;
  }

  .svgIcon path {
    fill: white;
  }

  .text {
    position: absolute;
    color: rgb(255, 255, 255);
    width: 120px;
    font-weight: 600;
    opacity: 0;
    transition-duration: 0.4s;
  }

  .Btn:hover {
    width: 50%;
    transition-duration: 0.4s;
    border-radius: 30px;
  }

  .Btn:hover .text {
    opacity: 1;
    transition-duration: 0.4s;
  }

  .Btn:hover .svgIcon {
    opacity: 0;
    transition-duration: 0.3s;
  }
`;

export const Secao = styled.section`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
