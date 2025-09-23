"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthNavItem() {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="bg-[#003d5b] text-white flex justify-center items-center
                   hover:bg-white/10 hover:text-[#edae49]
                   p-2 rounded-full transition-colors"
      >
        <i className="bx bx-log-out text-2xl"></i>
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn()}
      className=" text-white flex justify-center items-center
                 hover:bg-white/10 hover:text-[#edae49]
                 p-2 rounded-full transition-colors"
    >
      <i className="bx bx-user text-2xl"></i>
    </button>
  );
}
