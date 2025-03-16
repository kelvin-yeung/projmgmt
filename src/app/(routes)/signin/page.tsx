"use client";

import { useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const route = "/signout";

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      const response = await fetch("/api/signin", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });
      if (response.status === 200) {
        router.push(route);
      }
    } catch (error) {
      // console.error("ERROR: ", error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        {/* Need to add HTML form's onSubmit or equivalent */}
        <form
          onSubmit={onSubmit}
          className="flex h-[600px] w-[450px] flex-col justify-center border-4 border-gray-400 p-8 text-center"
        >
          <h1 className="text-4xl font-bold">Login</h1>
          <fieldset className="my-8">
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="mb-4 h-12 w-full rounded-lg border-2 border-black p-2"
              required
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="mb-2 h-12 w-full rounded-lg border-2 border-black p-2"
              required
            />
            <div className="mb-6 text-left text-sm">
              {error || "‎"}
            </div>
            <button
              type="submit"
              className="h-10 w-full rounded-lg border-2 border-black bg-[#0066cc] text-white"
            >
              Login
            </button>
          </fieldset>
          <fieldset className="mb-12 border-2 border-gray-400">
            <legend className="px-2 font-medium">Need Help?</legend>
            <div className="mb-3 mt-1 flex flex-col text-[#0066cc] underline">
              {/* Need to replace hrefs with appropriate routes */}
              <a href="https://www.google.ca/">Change My Password</a>
              <a href="https://www.google.com/">Create New User</a>
            </div>
          </fieldset>
          <p className="text-[10px]">
            Guest Information
            {/* Licensed Materials - Property of MTO and others - 1992, 2012 */}
            <br />
            Email: a@gmail.com
            {/* Build Version: 407 (July 17th, 2020) */}
            <br />
            Password: asdf
            {/* Release: 18.7 */}
          </p>
        </form>
      </div>
    </>
  );
};

export default SignIn;
