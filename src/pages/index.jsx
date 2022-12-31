import Head from "next/head";
import { useRouter } from 'next/router';

import Card from "../components/Card";
import api from "../utils/api";
import * as S from '../styles/index';
import { useState } from "react";

const Home = ({ users, nextPage }) => {
  const [since, setSince] = useState();
  const [name, setName] = useState();
  const router = useRouter();

  const usersSince = (e) => {
    setSince(e.target.value)
  };

  const usersByname = (e) => {
    setName(e.target.value)
  };

  return (
    <>
      <Head>
        <title>USERS GITHUB</title>
        <meta
          name="description"
          content="Github front-and interface challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.ico" />
      </Head>
      <S.Main>
        <h1>Users Github</h1>
        <S.Form onSubmit={usersSince}>
          <input 
            name={"since"}
            type="number" 
            onChange={usersSince}
            placeholder="Show users since"
          />
          <S.ButtonSend 
            type="button" 
            onClick={() => router.push(`/users/${since}`)}
          >Send</S.ButtonSend>
        </S.Form>
        <S.Form onSubmit={usersByname}>
          <input 
            name={"name"}
            type="text" 
            onChange={usersByname}
            placeholder="Search user by login name"
          />
          <S.ButtonSend 
            type="button"
            onClick={() => router.push(`/user/${name}`)}
          >Send</S.ButtonSend>
        </S.Form>
        <ul>
          {users.map((user) => (
            <Card key={user.id} user={user} pathHome={'/user'}/>
          ))}
        </ul>
      </S.Main>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(api);
  const data = await response.json();

  const users = await data.users.map((user) => user);
  const nextPage = data.nextPage;

  return {
    props: {
      users: users,
      nextPage: nextPage
    },
    revalidate: 50,
  };
};

export default Home;
