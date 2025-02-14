import { pawPalData, reasonsTheOtherDogIsAShithead } from "../pawpalData";

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getParkName(parkId: string | null | undefined) {
  const parks = pawPalData.parks;
  if (!parkId) return undefined;
  return parks.find((park) => park.id === parkId)?.name;
}

export function rollDice() {
  const dice = Math.random();
  if (dice > 0.5) {
    return true;
  }
  return false;
}

export function getFriendshipErrorMessage() {
  const reasonIndex = Math.floor(
    Math.random() * reasonsTheOtherDogIsAShithead.length
  );

  return reasonsTheOtherDogIsAShithead[reasonIndex];
}
