"use client";

import { Space } from "antd";
import { useSession } from "next-auth/react";

export default function Page() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    },
  });

  if (status === "loading") {
    window.location.replace("/");
    return "loading";
  }

  return (
    <main className="flex h-screen w-screen flex-col items-center bg-primary-100">
      <Space direction="vertical" size="large" className="pt-20">
        <h1 className="text-black">Username: {session?.user?.name}</h1>
        <h1 className="text-black">Profile page</h1>
      </Space>
    </main>
  );
}
