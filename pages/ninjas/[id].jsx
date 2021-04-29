import React from "react";
import axios from "axios";

export const getStaticPaths = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const paths = response.data.map((ninja) => {
      return {
        params: {
          id: ninja.id.toString(),
        },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error(error);
  }
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    console.log(response.data);
    if (!response.data) {
      return {
        notFound: true,
      };
    }
    return {
      props: { ninja: response.data },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
  return {
    props: { ninja: {} },
    notFound: true,
  };
};

export default function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email} </p>
      <p>{ninja.website} </p>
      <p>{ninja.address.city} </p>
    </div>
  );
}
