import Image from "next/image";
import user_image from "/public/icons/user.png";

const FotoUsuario = () => {
  return (
    <div
      className="flex items-center justify-center size-10 rounded-full border-2 overflow-hidden"
      title="Logado como usuário"
    >
      <Image className="size-fit" src={user_image} alt="Imagem do usuário" />
    </div>
  );
};

export default FotoUsuario;
