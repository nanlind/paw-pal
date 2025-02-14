import { delay, getFriendshipErrorMessage, rollDice } from "@/app/utils/utils";
import { toaster } from "@/components/ui/toaster";
import { useState } from "react";

export const NewDogInPark = ({ name }: { name: string }) => {
  const [isSmellingButt, setIsSmellingButt] = useState(false);

  function onButtSmell() {
    setIsSmellingButt(true);
    delay(1000)
      .then(() => {
        const isSuccess = rollDice();
        if (isSuccess) {
          toaster.create({
            description: "You are now BFFs! ♥️",
            duration: 2000,
          });
        } else {
          const frenemyReason = getFriendshipErrorMessage();
          toaster.create({
            description: `Uh oh, ${frenemyReason}. You are now enemies.`,
            duration: 2000,
          });
        }
      })
      .finally(() => {
        setIsSmellingButt(false);
      });
  }

  return (
    <li className="flex justify-between mt-2">
      <p className="text-lg">{name} 💩</p>
      <button
        onClick={onButtSmell}
        disabled={isSmellingButt}
        className="bg-red-100 px-2 py-1 rounded-md hover:bg-red-200"
      >
        {isSmellingButt ? "...smelling" : "Smell their butt"}
      </button>
    </li>
  );
};
