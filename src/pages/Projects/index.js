import React from 'react';

import {
  Buttons,
  Content,
  Information,
  Portfolio,
  Presentation,
  Projetos,
  Secao,
  Table,
  Title2,
} from './styled';

export default function Projects() {
  const redirectLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <Table id="projects">
        <Projetos>
          <Title2>
            <h1>Projetos</h1>
          </Title2>
          <Content>
            <Portfolio>
              <Presentation
                className="ImgEffect"
                src="./page-projects/img-consumo-api.png"
                onClick={() => redirectLink('http://consumo-api-reactv5.mcbcode.com/')}
              />

              <Information>
                <h4>Consumo API Rest</h4>
                <p>
                  Aplicação elaborada para consumir a API REST, com validação de usuário, login,
                  cadastro e edição.
                </p>
                <Buttons>
                  <button
                    className="button-one"
                    type="button"
                    onClick={() => redirectLink('http://consumo-api-reactv5.mcbcode.com/')}>
                    Site
                  </button>
                  <button
                    className="button-two"
                    type="button"
                    onClick={() => redirectLink('https://github.com/baldancam/consumo-api-rest')}>
                    Repositório
                  </button>
                </Buttons>
              </Information>
            </Portfolio>

            <Portfolio>
              <Presentation
                className="ImgEffect"
                src="./page-projects/img-api-rest.png"
                onClick={() => redirectLink('http://api-rest-aluno.mcbcode.com/alunos')}
              />
              <Information>
                <h4>API Rest</h4>
                <p>
                  Utilizando JavaScript, Node, Express e MySQL. Uma solução robusta e eficiente!
                </p>
                <Buttons>
                  <button
                    className="button-one"
                    type="button"
                    onClick={() => redirectLink('http://api-rest-aluno.mcbcode.com/alunos')}>
                    Site
                  </button>
                  <button
                    className="button-two"
                    type="button"
                    onClick={() => redirectLink('https://github.com/baldancam/api-rest')}>
                    Repositório
                  </button>
                </Buttons>
              </Information>
            </Portfolio>
          </Content>
        </Projetos>
      </Table>

      <Secao id="contato">
        <h1>EM PRODUÇÃO, EM BREVE INFORMAÇÕES!</h1>
      </Secao>
    </>
  );
}
