import React from "react";
import Login from "../components/Login/Login";
import { getProviders, signIn } from "next-auth/react";

export default function login({ providers }) {
  return (
    <>
      <Login providers={providers} signIn={signIn} />
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
