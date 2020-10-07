import React from 'react';

import { Container } from './styles';

interface TooltipProps{
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <>
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
    </>
  );
};
//todo: regularizar error e contiuar do minuto 10:40
export default Tooltip;
