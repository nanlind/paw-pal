import { useState } from "react";
import { CardLayout } from "../../components/CardLayout";
import { DogProps } from "../../pawpalData";
import { DogProfile } from "./DogProfile";
import { FriendStatus } from "./FriendStatus";

interface DoggosProps {
  dog: DogProps;
  isFriend: boolean;
}

export const Doggos = ({ dog, isFriend }: DoggosProps) => {
  const [openProfile, setOpenProfile] = useState(false);
  const { name, age, breed } = dog;

  return (
    <>
      <CardLayout>
        <div className="h-16 w-16 rounded-full bg-red-200"></div>
        <div className="pl-4">
          <h2 className="font-semibold">{name}</h2>
          <h2>
            {age} / {breed}
          </h2>
        </div>
        <div className="flex flex-col gap-2 ml-auto">
          <FriendStatus isFriend={isFriend} styles={"self-end"} />

          <button
            onClick={() => setOpenProfile(true)}
            className="border-2 rounded-lg px-2 py-1 text-md bg-red-100/30 border-red-200 hover:bg-red-200"
          >
            Show profile 🐕
          </button>
        </div>
        <DogProfile
          dog={dog}
          isFriend={isFriend}
          openProfile={openProfile}
          setOpenProfile={() => setOpenProfile(!openProfile)}
        />
      </CardLayout>
    </>
  );
};
