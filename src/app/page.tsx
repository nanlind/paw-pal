"use client";

import Image from "next/image";
import { LinkButton, LinkButtonVariant } from "./components/LinkButton";

export default function Home() {
  return (
    <div className="bg-blue-100 h-screen ">
      <main className="flex flex-col items-center justify-center bg-red-50 h-full gap-16 p-8">
        <Logo />
        <ButtonGroup />
      </main>
    </div>
  );
}

const Logo = () => {
  return (
    <div className="flex items-center flex-col ">
      <Image
        className="dark:invert"
        src="/paw.png"
        alt="Paw pal logo"
        width="200"
        height="200"
      />
      <h1 className="text-3xl ">Paw Pal</h1>
    </div>
  );
};

const ButtonGroup = () => {
  return (
    <div className={"flex flex-col gap-2 mt-1"}>
      <LinkButton
        title="Register"
        href="register"
        variant={LinkButtonVariant.Filled}
      />
      <LinkButton title="Sign in" href="signin" />
    </div>
  );
};
