import Link from "next/link";

type ButtonProps = {
  href: string;
  variant: "primary" | "secondary";
  text: string;
  title?: string;
};

const Button = ({ href, variant, text, title }: ButtonProps) => {
  return (
    <Link
      href={href}
      className={`${
        variant === "primary"
          ? "bg-black text-white"
          : "bg-[#DCDCDC] text-black"
      } inline-flex items-center h-[35px] w-auto my-4 px-4 py-2 rounded-lg text-center text-sm hover:opacity-85`}
      title={title}
    >
      {text}
    </Link>
  );
};

export default Button;
