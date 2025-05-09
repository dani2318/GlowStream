"use client";
import TwitchIcon from "@/components/icons/twitch";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  return (
    <>
      <button
        className="bg-twitch p-2 flex gap-2 items-center rounded-sm"
        onClick={() =>
          signIn("twitch", {
            redirect: true,
            callbackUrl: "/",
          })
        }
      >
        <TwitchIcon className="w-8 h-8" />
        Sign in with Twitch
      </button>
    </>
  ); //<button onClick={() => signIn("twitch")}>Sign in with Twitch</button>;
}
