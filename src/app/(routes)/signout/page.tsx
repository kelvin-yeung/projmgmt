"use client";

import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();
  const route = "/signin";

  const signOutUser = async () => {
    const response = await fetch("/api/signout", {
      method: "POST",
    });
    if (response.status === 200) {
      router.push(route);
    }
  };

  const isSignedIn = async () => {
    const response = await fetch("/api/signin", {
      method: "GET",
    });
  };

  return (
    <>
      <button onClick={() => signOutUser()}>Sign Out Here!</button>
      <button onClick={() => isSignedIn()}>isSignedIn?</button>
    </>
  );
};

export default SignOut;
