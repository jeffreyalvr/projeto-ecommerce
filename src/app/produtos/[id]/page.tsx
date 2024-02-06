import Nav from "@/components/Nav";
import Box from "@/components/Box";
import Footer from "@/components/Footer";

import { Button } from "@/components/Button";
import { numberParaFloat } from "@/util/number";

import Image from "next/image";
import no_image_image from "/public/icons/no-image.png";
import like_outlined_image from "/public/icons/like-outlined.png";

const Produto = async ({ params }: { params: { slug: string } }) => {
  const { id } = params;

  const getItem = async () => {
    const response = await fetch(
      `https://projeto-ecommerce-api.onrender.com/produtos/${id}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) throw new Error("Erro ao requisitar os dados...");
    return response.json();
  };

  const item = await getItem();

  return (
    <>
      <Nav />
      <div className="flex flex-col container my-8 px-2 gap-6 sm:px-8">
        <Box>
          {item ? (
            <>
              <h1 className="pb-6 border-b-2 font-bold text-2xl text-black">
                {item.nome}
              </h1>
              <div className="grid grid-cols-2 w-full">
                <div className="inline-flex rounded-lg size-[340px] bg-[#CECECE]">
                  <Image
                    src={no_image_image}
                    alt="Sem imagem"
                    className="size-fit m-auto"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">Valor</p>
                    <span className="text-[#6B6B6B]">
                      R$ {numberParaFloat(item.valor)}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bold">Estoque</p>
                    <span className="text-[#6B6B6B]">{item.estoque}</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Button
                      variant="secondary"
                      text="Adicionar ao carrinho"
                      title="Clique para adicionar"
                    />
                    <Image
                      src={like_outlined_image}
                      alt="Favoritar"
                      className="size-[32px] cursor-pointer"
                      title="Favoritar produto"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full border-t-2 pt-6">
                <p className="font-bold">Descrição do produto</p>
                <span className="text-[#6B6B6B]">{item.descricao}</span>
              </div>
            </>
          ) : (
            "Nenhum produto encontrado para o id especificado."
          )}
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Produto;
