import { useState } from "react";
import { DogProps, ParkProps } from "../../pawpalData";
import { CardLayout } from "../../components/CardLayout";
import { Button } from "@chakra-ui/react";
import { FriendsInParkDialog } from "./FriendsInParkDialog";

interface ParkComponentProps {
  handleCheckInOrOut: () => void;
  friends: string[];
  isCheckedIn: boolean;
  park: ParkProps;
  visitors: DogProps[] | null;
}

export const Park = ({
  handleCheckInOrOut,
  friends,
  isCheckedIn,
  park,
  visitors,
}: ParkComponentProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { name } = park;
  return (
    <CardLayout variant={isCheckedIn ? "active" : "default"}>
      <div className="h-16 w-16 rounded-full bg-red-400"></div>
      <Button
        className={`pixelify font-semibold text-lg`}
        onClick={() => {
          setOpenModal(!openModal);
        }}
      >
        {name}
      </Button>
      <Button
        variant="solid"
        colorPalette={isCheckedIn ? "red" : "green"}
        className="absolute right-4 bg-black/5 hover:bg-black/10 p-2 rounded-md"
        onClick={handleCheckInOrOut}
      >
        {isCheckedIn ? "Checked in 🌴" : "Check in 👹"}
      </Button>

      <FriendsInParkDialog
        park={park}
        open={openModal}
        visitors={visitors}
        friends={friends}
        onClose={() => {
          setOpenModal(!openModal);
        }}
      />
    </CardLayout>
  );
};
