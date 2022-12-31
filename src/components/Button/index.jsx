import React from 'react';

import * as S from './styles'

const Button = ({ type = 'button', onClick, children, ...rest }) => {
    return (
      <S.Button type={type} onClick={onClick} {...rest}>
        {children}
      </S.Button>
    );
};

export default Button;
