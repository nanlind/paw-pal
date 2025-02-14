interface NavBarProps {
  showFriendFeed: boolean;
  setShowFriendFeed: (arg0: boolean) => void;
}

export const NavBar = ({ showFriendFeed, setShowFriendFeed }: NavBarProps) => {
  return (
    <nav className="flex justify-between p-4 w-4/12 ">
      <h1 className="text-black text-xl pressStart">Paw Pal</h1>
      <div className="flex gap-4">
        <button
          className={`${
            showFriendFeed
              ? "font-bold  text-pink-500 underline"
              : "font-light text-slate-700"
          } pixelify transition-colors`}
          onClick={() => setShowFriendFeed(true)}
        >
          Friends
        </button>
        <button
          className={`${
            !showFriendFeed
              ? "font-bold text-pink-500 underline"
              : "font-light text-slate-700"
          } pixelify transition-colors`}
          onClick={() => setShowFriendFeed(false)}
        >
          Parks
        </button>
      </div>
    </nav>
  );
};
