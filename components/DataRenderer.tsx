import { DEFAULT_EMPTY, DEFAULT_ERROR } from "@/constants/states";
import Image, { type StaticImageData } from "next/image";
import darkError from "@/public/images/dark-error.png";
import lightError from "@/public/images/light-error.png";
import darkIllustration from "@/public/images/dark-illustration.png";
import lightIllustration from "@/public/images/light-illustration.png";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

interface Props<T> {
  success: boolean;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  data: T[] | null | undefined;
  empty: {
    title: string;
    message: string;
    button?: {
      text: string;
      href: string;
    };
  };
  render: (data: T[]) => React.ReactNode;
}

interface StateSkeletonProps {
  image: {
    light: StaticImageData;
    dark: StaticImageData;
    alt: string;
  };
  title: string;
  message: string;
  button?: {
    text: string;
    href: string;
  };
}

const StateSkeleton = ({ image, title, message, button }: StateSkeletonProps) => (
  <div className="mt-16 flex w-full flex-col items-center justify-center sm:mt-36">
    <Image
      src={image.dark}
      alt={image.alt}
      sizes="270px"
      style={{ width: 270, maxWidth: "100%", height: "auto" }}
      className="hidden object-contain dark:block"
    />
    <Image
      src={image.light}
      alt={image.alt}
      sizes="270px"
      style={{ width: 270, maxWidth: "100%", height: "auto" }}
      className="block object-contain dark:hidden"
    />

    <h2 className="h2-bold text-dark200_light900 mt-8">{title}</h2>
    <p className="body-regular text-dark500_light700 my-3.5 max-w-md text-center">{message}</p>
    {button && (
      <Link href={button.href}>
        <Button className="paragraph-medium bg-primary-500 text-light-900 hover:bg-primary-500 mt-5 min-h-11.5 rounded-lg px-4 py-3">
          {button.text}
        </Button>
      </Link>
    )}
  </div>
);

const DataRenderer = <T,>({ success, error, data, empty = DEFAULT_EMPTY, render }: Props<T>) => {
  if (!success) {
    return (
      <StateSkeleton
        image={{
          light: lightError,
          dark: darkError,
          alt: "Error state illustration",
        }}
        title={error?.message || DEFAULT_ERROR.title}
        message={error?.details ? JSON.stringify(error.details, null, 2) : DEFAULT_ERROR.message}
        button={empty.button}
      />
    );
  }

  if (!data || data.length === 0)
    return (
      <StateSkeleton
        image={{
          light: lightIllustration,
          dark: darkIllustration,
          alt: "Empty state illustration",
        }}
        title={empty.title}
        message={empty.message}
        button={empty.button}
      />
    );

  return <div>{render(data)}</div>;
};

export default DataRenderer;
