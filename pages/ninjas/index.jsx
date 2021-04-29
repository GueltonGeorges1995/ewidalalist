import React from "react";
import Head from "next/head";
import axios from "axios";
import { useState } from "react";
import ContainerUser from "../../components/ContainerUser";

export const getStaticProps = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return {
      props: { ninjas: response.data },
    };
  } catch (error) {
    console.error(error);
  }
  return {
    props: { ninja: [] },
  };
};

export default function Ninjas({ ninjas }) {
  const [users, setUsers] = useState(ninjas);

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id));
  };
  return (
    <>
      <Head>
        <title>Ninja List | All ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1>All ninjas</h1>
      {users.map((user) => (
        <ContainerUser
          user={user}
          key={user.id}
          handleDeleteUser={handleDeleteUser}
        />
      ))}
    </>
  );
}
