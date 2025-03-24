"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const route = "/signin";

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      if (response) {
        router.push(route);
      }
    } catch (error) {
      console.error("ERROR: ", error);
      // setError(error.message);
    }
  };

  return (
    <div className="text-white">
      <form onSubmit={onSubmit} className="text-black">
        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="text-white">
          <button type="submit">Sign Up</button>
        </div>
      </form>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default SignUp;
