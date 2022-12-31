import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router';

import api from "../../utils/api";
import Card from "../../components/Card";
import * as S from "../../styles/users";

const Users = ({ users, nextPage }) => {
  // console.log(users);
  const router = useRouter();
  return (
    <>
      <S.ButtonHome type="button" onClick={() => router.push("/")}>
        HOME
      </S.ButtonHome>
      <Head>
        <title>USERS SINCE {users[0].id}</title>
        <meta
          name="description"
          content="Github front-and interface challenge"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/github.ico" />
      </Head>
      <S.Main>
        <h1>USERS SINCE {users[0].id}</h1>
        <ul>
          {users.map((user) => (
            <Card key={user.id} user={user} pathUsers={'/user'}/>
          ))}
        </ul>
      </S.Main>
    </>
  );
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const response = await fetch(`${api}/users?since=${params.since - 1}`);
  const data = await response.json();

  const users = await data.users.map((user) => user);
  const nextPage = data.nextPage;

  return {
    props: {
      users: users,
      nextPage: nextPage,
    },
    revalidate: 50,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Users;
