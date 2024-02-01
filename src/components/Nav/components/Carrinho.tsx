import Image from "next/image";
import carrinho_image from "/public/icons/add-to-cart.png";

const Carrinho = () => {
  return (
    <div
      className="flex items-center justify-center gap-1 h-10 w-auto font-bold text-white"
      title="Meu carrinho"
    >
      <Image className="invert size-full" src={carrinho_image} alt="Carrinho" />
      0
    </div>
  );
};

export default Carrinho;
