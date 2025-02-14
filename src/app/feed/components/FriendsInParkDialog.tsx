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
import { Toaster } from "@/components/ui/toaster";
import { DogProps, ParkProps } from "../../pawpalData";
import { NewDogInPark } from "./NewDogInParkItem";

interface FriendsInParkModalProps {
  park: ParkProps;
  open: boolean;
  visitors: DogProps[] | null;
  onClose: () => void;
  friends: string[];
}

const PARK_NAME_MAX_LENGTH = 26;

export const FriendsInParkDialog = ({
  open,
  friends,
  visitors,
  park,
  onClose,
}: FriendsInParkModalProps) => {
  const bffsInPark = visitors?.filter((visitor) =>
    friends.includes(visitor.id)
  );
  const potentialFriendsInPark = visitors?.filter(
    (visitor) => !friends.includes(visitor.id)
  );

  const truncatedParkName =
    park.name.length > PARK_NAME_MAX_LENGTH
      ? park.name.slice(0, PARK_NAME_MAX_LENGTH).concat("...")
      : park.name;

  return (
    <>
      <DialogRoot
        placement="center"
        open={open}
        onOpenChange={onClose}
        preventScroll={false}
      >
        <DialogContent
          style={{
            zIndex: 10,
            position: "absolute",
            backgroundColor: "#fdf2f8",
            border: "2px solid #fbcfe8",
          }}
        >
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.5rem" }}>
              {truncatedParkName}
            </DialogTitle>
          </DialogHeader>
          <DialogBody>
            {!bffsInPark && !potentialFriendsInPark ? (
              <p className="text-lg">No visitors yet! 🌴</p>
            ) : (
              <>
                <h2 className="font-bold">Visitors</h2>
                <ul>
                  {bffsInPark?.map((visitor) =>
                    visitor ? (
                      <li key={visitor.id} className="text-lg">
                        {visitor.name} ♥️
                      </li>
                    ) : null
                  )}
                </ul>
                <ul>
                  {potentialFriendsInPark?.map((visitor) =>
                    visitor ? (
                      <NewDogInPark name={visitor.name} key={visitor.id} />
                    ) : null
                  )}
                </ul>
              </>
            )}
            <Toaster />
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <Button style={{ border: "2px solid #fbcfe8", padding: "1rem" }}>
                Okey dokey! 👍
              </Button>
            </DialogActionTrigger>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};
