import React from 'react';

import Clock from '../../components/Clock';
import { Title } from './styled';

export default function Home() {
  return (
    <Title id="home">
      <Clock />
      <h1>Olá, eu sou o Matheus</h1>
      <h2 className="text-one">Um desenvolvedor em CONSTANTE desenvolvimento</h2>
    </Title>
  );
}
