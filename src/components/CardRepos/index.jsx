import React from "react";
import Link from "next/link";

import * as S from './styles';

const CardRepos = (props) => {
    const { repo } = props;
  return (
    <S.Container>
      <Link href={repo.html_url} target="_blank" >
        <p><span>ID:</span> {repo.id}</p>
        <section>
            <h2>{repo.name ? repo.name : 'unknown repository'}</h2>
            <p>{repo.description ? repo.description : 'There is no description'}</p>
        </section>
      </Link>
    </S.Container>
  );
};

export default CardRepos;
