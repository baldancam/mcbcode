import React, { useEffect, useState } from 'react';
import { ClockContainer } from './styled';

export default function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Atualiza a cada 1000 milissegundos (1 segundo)

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString(); // Formato de data
  const formattedTime = currentDateTime.toLocaleTimeString(); // Formato de hora

  const dateTimeString = `${formattedDate} - ${formattedTime}`;

  return (
    <ClockContainer>
      <p>{dateTimeString}</p>
    </ClockContainer>
  );
}
