import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ButtonProps = {
  variant: "primary" | "secondary";
  text: string;
  title?: string;
  applyMargin?: boolean;
};

type ButtonLinkProps = ButtonProps & {
  href: string;
};

type ButtonImageProps = ButtonProps & {
  image: StaticImageData;
  altText: string;
};

const Button = ({ variant, text, title, applyMargin }: ButtonProps) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-black text-white"
          : "bg-[#DCDCDC] text-black"
      } ${
        applyMargin && "my-4"
      } inline-flex items-center h-[35px] w-auto px-4 py-2 rounded-lg text-center text-sm border border-[transparent] hover:opacity-85 hover:border-[#C8C8C8]`}
      title={title}
    >
      {text}
    </button>
  );
};

const ButtonLink = ({
  href,
  variant,
  text,
  title,
  applyMargin,
}: ButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={`${
        variant === "primary"
          ? "bg-black text-white"
          : "bg-[#DCDCDC] text-black"
      } inline-flex items-center h-[35px] w-auto my-4 px-4 py-2 rounded-lg text-center text-sm border border-[transparent] hover:opacity-85 hover:border-[#C8C8C8]`}
      title={title}
    >
      {text}
    </Link>
  );
};

const ButtonImage = ({
  variant,
  text,
  title,
  applyMargin,
  altText,
  image,
}: ButtonImageProps) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "bg-black text-white"
          : "bg-[#DCDCDC] text-black"
      } ${
        applyMargin && "my-4"
      } inline-flex items-center h-[35px] w-auto px-4 py-2 rounded-lg text-center text-sm border border-[transparent] hover:opacity-85 hover:border-[#C8C8C8]`}
      title={title}
    >
      <Image src={image} alt={altText} className="size-[20px]" />
    </button>
  );
};

export { Button, ButtonLink, ButtonImage };
