import { DogProps } from "../../pawpalData";
import {
  Button,
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
} from "@chakra-ui/react";
import { getParkName } from "../../utils/utils";
import { FriendStatus } from "./FriendStatus";

interface DogProfileProps {
  dog: DogProps;
  isFriend: boolean;
  openProfile: boolean;
  setOpenProfile: () => void;
}

export const DogProfile = ({
  dog,
  isFriend,
  openProfile,
  setOpenProfile,
}: DogProfileProps) => {
  const dogAtPark = getParkName(dog.atPark);
  return (
    <DialogRoot
      open={openProfile}
      onOpenChange={setOpenProfile}
      preventScroll={false}
    >
      <DialogContent
        style={{
          zIndex: 10,
          position: "absolute",
          backgroundColor: "#fff7ed",
          border: "solid 2px #ffedd5",
        }}
      >
        <DialogHeader>
          <DialogTitle style={{ fontSize: "1.5rem" }}>{dog.name}</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <div className="flex items-start gap-4">
            <ul className="text-lg">
              <li>
                <strong>Age: </strong> {dog.age}
              </li>
              <li>
                <strong>Breed: </strong> {dog.breed}
              </li>
              <li>
                <strong>Friend: </strong> {isFriend ? "Yes" : "No"}
              </li>
              <li>
                <strong>Location:</strong>
                {dogAtPark ?? "At home"}
              </li>
            </ul>
            <FriendStatus isFriend={isFriend} styles={"ml-auto"} />
          </div>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button
              style={{
                borderRadius: "8px",
                border: "solid 2px #fed7aa",
                padding: "1rem",
              }}
            >
              Okey dokey 👍
            </Button>
          </DialogActionTrigger>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
