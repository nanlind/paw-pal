"use client";

import { useEffect, useState } from "react";
import { DogProps, pawPalData } from "../pawpalData";
import { Doggos } from "./components/Doggos";
import { Park } from "./components/Park";
import { NavBar } from "./components/NavBar";
import useStorage from "../register/useStorage";

export interface Visitors {
  [key: string]: DogProps[];
}

export type Visitor = Record<string, string[]>;

const initialUserValue = {
  id: "alpha-bish",
  name: "Liucifer",
  age: 4,
  breed: "Samoyed",
  image: null,
  friends: ["dog-1", "dog-3", "dog-5", "dog-6", "dog-9"],
  atPark: undefined,
};

export default function Feed() {
  const [storage, setStorage] = useStorage({
    key: "userData",
    initialValue: initialUserValue,
  });
  const [user, setUser] = useState<DogProps>(initialUserValue);
  const [doggos, setDoggos] = useState<DogProps[]>(pawPalData.dogs);
  const [visitors, setVisitors] = useState<Visitors | null>(null);
  const [showFriendFeed, setShowFriendFeed] = useState(true);

  useEffect(() => {
    setStorage({ ...storage, dogs: doggos });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doggos]);

  const parks = pawPalData.parks;

  useEffect(() => {
    const parkVisitors: Visitors = {};

    doggos.map((dog) => {
      if (dog.atPark) {
        if (parkVisitors[dog.atPark]) {
          parkVisitors[dog.atPark].push(dog);
        } else {
          parkVisitors[dog.atPark] = [dog];
        }
      }
    });

    setVisitors(parkVisitors);
  }, [doggos, user]);

  function handleParkVisit(newPark: string) {
    if (user.atPark === newPark) {
      setUser({ ...user, atPark: null });
    } else {
      setUser({ ...user, atPark: newPark });
    }
  }

  function handleFriendship(dogId: string) {
    if (user.friends.includes(dogId)) {
      setUser({
        ...user,
        friends: user.friends.filter((friend) => friend !== dogId),
      });

      const dogs = doggos.map((dog) => {
        if (dog.id === dogId) {
          return {
            ...dog,
            friends: dog.friends.filter((friend) => friend !== user.id),
          };
        }
        return dog;
      });

      setDoggos(dogs);
    } else {
      setUser({ ...user, friends: [...user.friends, dogId] });
      const dogs = doggos.map((dog) => {
        if (dog.id === dogId) {
          return {
            ...dog,
            friends: [...dog.friends, user.id],
          };
        }
        return dog;
      });
      setDoggos(dogs);
    }
  }

  useEffect(() => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      console.log("doggos      : ", doggos);
      console.log("user        : ", user);
      console.log("storage     : ", storage);
    }
  }, [doggos, user, storage]);

  return (
    <div className="bg-blue-50 flex flex-col items-center">
      <NavBar
        showFriendFeed={showFriendFeed}
        setShowFriendFeed={setShowFriendFeed}
      />

      <main className="flex flex-col relative items-center justify-center h-full py- gap-2 w-5/12">
        {showFriendFeed
          ? doggos.map((dog) => {
              const isFriend = user.friends.includes(dog.id);
              return <Doggos dog={dog} key={dog.id} isFriend={isFriend} />;
            })
          : parks.map((park) => {
              return (
                <Park
                  park={park}
                  key={park.id}
                  isCheckedIn={user.atPark === park.id}
                  handleCheckInOrOut={() => handleParkVisit(park.id)}
                  visitors={visitors ? visitors[park.id] : null}
                  updateFriendship={handleFriendship}
                  friends={user.friends}
                />
              );
            })}
      </main>
    </div>
  );
}
