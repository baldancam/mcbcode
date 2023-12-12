import React from 'react';

import { Sobre, TextSobre, TitleSobre } from './styled';

export default function About() {
  return (
    <Sobre id="about">
      <TitleSobre src="./img-sobre2.png" />

      <TextSobre>
        <div className="TextEffect">
          Atualmente tenho 28 anos, sou residente da pequena cidade de Governador Celso Ramos, ela
          fica localizada na grande Florianópolis, no estado de Santa Cataria, Brasil. Acredito
          muito na evolução humana e busco fazer parte ativamente, sempre pensando no bem comum.
          Vejo que a melhor forma de contribuir é através da criação e melhorias das diversas
          tecnologias que facilitam e ajudam pessoas por todo o mundo. Hoje venho me desenvolvendo
          cada vez mais no mundo da programação, buscando sempre entregar o meu melhor.
        </div>
      </TextSobre>
    </Sobre>
  );
}
