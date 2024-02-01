import Image from "next/image";

import logo_image from "/public/icons/logo.png";

import ButtonPainelAdmin from "@/components/Nav/components/ButtonPainelAdmin";
import Carrinho from "@/components/Nav/components/Carrinho";
import FotoUsuario from "@/components/Nav/components/FotoUsuario";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center justify-between gap-4 h-max w-full py-4 px-16 bg-black text-white md:h-[70px] md:flex-row">
      <div className="flex">
        <span className="flex items-center gap-2 w-max font-bold text-white">
          <Image className="invert size-6" src={logo_image} alt="Logo" />
          E-COMMERCE
        </span>
      </div>
      <div className="flex w-max gap-6 items-center">
        <ButtonPainelAdmin />
        <Carrinho />
        <FotoUsuario />
      </div>
    </nav>
  );
};

export default Nav;
