import Link from "next/link";

interface LinkButtonProps {
  href: string;
  title: string;
  variant?: LinkButtonVariant;
}

export enum LinkButtonVariant {
  Outlined = "outlined",
  Filled = "filled",
}

export const LinkButton = ({ href, title, variant }: LinkButtonProps) => {
  return (
    <Link href={href}>
      <button
        className={
          variant === LinkButtonVariant.Filled
            ? "text-white bg-black rounded py-1 px-2 w-24"
            : "border border-black rounded py-1 px-2 w-24"
        }
      >
        {title}
      </button>
    </Link>
  );
};
