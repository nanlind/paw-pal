import { ReactNode } from "react";

export const CardLayout = ({
  variant = "default",
  column = false,
  children,
}: {
  variant?: "default" | "active";
  column?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`pixelify flex items-center relative w-full rounded-xl border-2 shadow-md shadow-blue-200 p-4 gap-4 ${
        variant === "default"
          ? "bg-red-50 border-red-100 hover:bg-red-100 hover:border-red-200"
          : "bg-green-50 border-green-100 hover:bg-green-100 hover:border-green-200"
      } ${column ? "flex-col" : ""}`}
    >
      {children}
    </div>
  );
};
