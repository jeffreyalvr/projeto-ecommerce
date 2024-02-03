import Link from "next/link";
import Image from "next/image";

import no_image_image from "/public/icons/no-image.png";
import like_outlined_image from "/public/icons/like-outlined.png";
import like_filled_image from "/public/icons/like-filled.png";
import add_to_cart_image from "/public/icons/add-to-cart.png";

const ItemsList = async () => {
  type Item = {
    id: string;
    nome: string;
    valor: number;
    estoque: number;
    descricao: string;
    fotoUrl: string;
  };

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
      {itens.map((item: Item) => (
        <div className="flex flex-col gap-2 w-[200px] h-auto" key={item.id}>
          <Link href={`/produtos/${item.id}`}>
            <div className="inline-flex w-full h-[200px] rounded-lg bg-[#CECECE]">
              <Image
                src={no_image_image}
                alt="Sem imagem"
                className="size-fit m-auto"
              />
            </div>
          </Link>
          <div className="flex flex-col">
            <Link href={`/produtos/${item.id}`}>
              <p className="font-bold">{item.nome}</p>
            </Link>
            <span className="text-[#6B6B6B]">R$ {item.valor}</span>
            <div className="flex gap-1 w-max mt-2">
              <Image
                src={like_outlined_image}
                alt="Favoritar"
                className="size-[32px] cursor-pointer"
              />
              <Image
                src={add_to_cart_image}
                alt="Favoritar"
                className="size-[32px] cursor-pointer"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
