"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ProfileImageProps {
  size: number;
}

export const ProfileImage = ({ size }: ProfileImageProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
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
        className={`min-w-[${size}px] min-h-[${size}px] bg-gray-200 rounded-full flex items-center justify-center overflow-auto`}
      >
        {!imageUrl ? (
          <Image
            className="dark:invert"
            src="/ImageIcon.svg"
            alt="Image icon"
            width="24"
            height="24"
          />
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
        {isUploading ? "Uploading ..." : "Upload"}
      </button>
    </div>
  );
};
