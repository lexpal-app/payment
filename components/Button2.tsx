import React, { FC, MouseEvent } from 'react';
import PropTypes from 'prop-types';
import './Button-test.css'; // Importe o arquivo de estilos

interface ButtonProps {
  text: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: 'primary' | 'secondary';
}

const Button2: FC<ButtonProps> = ({ text, onClick, color = 'primary' }) => {
  return (
    <button className={`button ${color}`} onClick={onClick}>
      {text}
    </button>
  );
};

Button2.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button2;
