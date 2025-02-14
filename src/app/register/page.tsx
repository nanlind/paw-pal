"use client";

import Form from "next/form";
import { ProfilePic } from "./components/ProfilePic";
import { printTextAction } from "./actions";
import { useActionState, useEffect, useId, useState } from "react";
import useStorage from "./useStorage";
import { useRouter } from "next/navigation";
import { delay } from "../utils/utils";
import { InputField } from "./components/InputFields";

// https://nextjs.org/docs/pages/api-reference/components/form
export default function Register() {
  const [state, formAction] = useActionState(printTextAction, {
    user: { name: undefined, age: undefined, breed: undefined },
    errors: {},
  });

  const [_, setStorage] = useStorage({
    key: "userData",
    initialValue: {
      name: undefined,
      age: undefined,
      breed: undefined,
      image: undefined,
      friends: [],
      atPark: undefined,
    },
  });
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const router = useRouter();
  const userId = useId();

  useEffect(() => {
    setStorage({
      ...state,
      userData: {
        id: userId,
        name: state.user.name,
        age: state.user.age,
        breed: state.user.breed,
        friends: undefined,
        atPark: undefined,
        image: imageUrl,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className="bg-blue-100 h-screen flex justify-center pixelify font-semibold">
      <main className="flex flex-col items-center justify-center bg-red-50 h-full gap-16 p-8 w-4/12">
        <ProfilePic size={300} imageUrl={imageUrl} setImageUrl={setImageUrl} />

        <Form
          action={(e) => {
            formAction(e);
            delay(500).then(() => {
              router.push("/feed");
            });
          }}
          formMethod="post"
          className={"flex flex-col gap-4 w-80"}
        >
          <InputField id="name" label="Name" required type={"text"} />
          <InputField id="age" label="Age" required type={"number"} />
          <InputField id="breed" label="Breed" type={"text"} />

          <button type="submit" className="bg-violet-100 h-8 rounded-lg">
            Submit
          </button>
        </Form>
      </main>
    </div>
  );
}
