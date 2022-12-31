import React from 'react';
import Link from "next/link";

import * as S from './styles';

const Card = (props) => {
    const { user, pathHome, pathUsers } = props;
    let path = ''

    pathHome ? path = pathHome : path = pathUsers

    return (
    <S.Container>
        <Link href={`${path}/${user.login}`}>
            <img src={user.avatar_url} alt={user.login} width={80} height={80} />
            <p>{user.login}</p>
        </Link>
    </S.Container>
  );
};

export default Card;
