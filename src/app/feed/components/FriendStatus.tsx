export const FriendStatus = ({
  isFriend,
  styles,
}: {
  isFriend: boolean;
  styles?: string;
}) => {
  return (
    <p
      className={`rounded-lg px-2 py-1 text-md  ${
        isFriend ? "text-red-800" : "text-slate-700"
      } ${styles}`}
    >
      {isFriend ? "♥️ BFF ♥️" : "Stranger 🐶"}
    </p>
  );
};
