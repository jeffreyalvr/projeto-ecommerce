import Link from "next/link";

const ButtonPainelAdmin = () => {
  return (
    <Link
      href="/admin"
      className="flex items-center h-[35px] px-4 py-2 rounded-lg text-center bg-[#70FFA9] text-black text-xs hover:opacity-85"
    >
      Painel admin
    </Link>
  );
};

export default ButtonPainelAdmin;
