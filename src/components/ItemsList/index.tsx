import Image from "next/image";
import no_image_image from "/public/icons/no-image.png";
import like_outlined_image from "/public/icons/like-outlined.png";
import like_filled_image from "/public/icons/like-filled.png";

const ItemsList = async () => {
  const getItens = async () => {
    const response = await fetch(
      "https://projeto-ecommerce-api.onrender.com/produtos",
      { next: { revalidate: 3600 } }
    );
    if (!response.ok) throw new Error("Erro ao requisitar os dados...");
    return response.json();
  };

  const itens = await getItens();

  return (
    <div className="grid grid-cols-4 gap-8 place-items-center h-max w-full p-8 rounded-lg bg-[#F3F3F3]">
      {itens.map((item) => (
        <div className="flex flex-col gap-2 w-[200px] h-auto">
          <div className="inline-flex w-full h-[200px] rounded-lg bg-[#CECECE]">
            <Image
              src={no_image_image}
              alt="Sem imagem"
              className="size-fit m-auto"
            />
          </div>
          <div className="flex items-center justify-between">
            <span>{item.nome}</span>
            <Image
              src={like_outlined_image}
              alt="Favoritar"
              className="size-[32px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
