import Image from "next/image";

export default function Signup() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col ">
          <Image
            className="dark:invert"
            src="/paw.png"
            alt="Paw pal logo"
            width="120"
            height="120"
          />
          Sign in
        </div>
      </main>
    </div>
  );
}
