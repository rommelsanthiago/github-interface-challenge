import React from 'react';
import moment from 'moment';
import { useRouter } from 'next/router';

import api from '../../utils/api';
import * as S from './styles'
import CardRepos from '../../components/CardRepos';

const User = ({repositories, user}) => {
    console.log('repositories:', repositories)
    console.log('user:', user)
    const created_at = moment(user.created_at).format('LL')
    const router = useRouter()
    
  return (
    <>
        <S.ButtonHome type="button" onClick={() => router.push('/')}>
          HOME
        </S.ButtonHome>
        <S.ButtonBack type="button" onClick={() => router.back()}>
          BACK
        </S.ButtonBack>
        <S.Header>
          <img src={user.avatar_url} alt={user.login} width={100} height={100} />
          <S.Content>
            <h2>{user.name}</h2>
            <p><span>BIO:</span> {user.bio ? user.bio : 'Unknown bio'}</p>
            <p><span>Created at:</span> {created_at}</p>
            <p><span>Repositories:</span> {repositories.length}</p>
          </S.Content>
        </S.Header>
        <ul>
          {repositories.map((repo) => (
            <CardRepos key={repo.id} repo={repo}/>
          ))}
        </ul>
    </>
  )
};

export const getStaticProps = async(context) => {
  const { params } = context
  const response = await fetch(`${api}/users/${params.username}/repos`)

  const data = await response.json();
  const dataUser = await fetch(data[0].owner.url);
  const user = await dataUser.json();

  return {
    props: { 
      repositories: data,
      user: user
    }, 
    revalidate: 60 * 60 * 12
  }
}

export const getStaticPaths = async () => {

  return {
      paths: [],
      fallback: 'blocking'
  }
}

export default User;
