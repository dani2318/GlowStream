"use client";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log("Session data:", session);
    // @ts-ignore
    if (session?.accessToken && session.user?.name) {
      // @ts-ignore
      analytics(session.accessToken, session.user.name);
    }
  }, [session]);

  const analytics = async (accessToken: string, username: string) => {
    console.log(process.env.TWITCH_CLIENT_ID);
    try {
      const response = await fetch(`https://api.twitch.tv/helix/analytics/extensions`, {
        method: "GET",
        headers: {
          "Client-Id": process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID!,
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        console.error("Twitch API error", await response.text());
        return;
      }

      const data = await response.json();
      console.log("Twitch Analytics:", data);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  if (session) {
    return (
      <>
        <p className="font-bold text-lg m-2">Signed in as {session.user?.name}</p>
        <button className="bg-red-600 p-4 m-2 rounded-2xl" onClick={() => signOut()}>
          <LogOut />
        </button>
      </>
    );
  }

  return <p className="font-bold text-2xl m-2">Non sei loggato</p>;
}
