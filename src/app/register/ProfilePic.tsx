"use client";

import { Icon } from "@chakra-ui/react";
import Image from "next/image";
import { useRef, useState } from "react";

interface ProfileImageProps {
  size: number;
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
}

export const ProfilePic = ({
  imageUrl,
  setImageUrl,
  size,
}: ProfileImageProps) => {
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] as File;
    setIsUploading(true);

    const data = new FormData();
    data.set("file", file);

    const response = await fetch("/api/files", {
      method: "POST",
      body: data,
    });

    const signedUrl = await response.json();

    setImageUrl(signedUrl);
    setIsUploading(false);
  }

  return (
    <div className={"flex flex-col justify-center gap-4"}>
      <div
        className={`w-[${size}px] h-[${size}px] bg-gray-200 rounded-full flex items-center justify-center overflow-auto`}
      >
        {!imageUrl ? (
          <Icon fontSize="24">
            <Image
              className="dark:invert"
              src="/ImageIcon.svg"
              alt="Image icon"
              width="24"
              height="24"
            />
          </Icon>
        ) : (
          <Image
            src={imageUrl}
            alt="Uploaded profile image"
            className={"rounded-full h-[300px] w-[300px] object-cover"}
            width={size}
            height={size}
          />
        )}
      </div>
      <input
        className="hidden"
        disabled={isUploading}
        ref={fileInputRef}
        type="file"
        onChange={handleChange}
      />
      <button
        onClick={() => fileInputRef.current?.click()}
        disabled={isUploading}
      >
        {!imageUrl
          ? isUploading
            ? "⏳ Uploading ..."
            : "Upload profile picture"
          : "Change profile picture"}
      </button>
    </div>
  );
};
