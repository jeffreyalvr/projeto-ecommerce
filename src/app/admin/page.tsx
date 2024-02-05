import Nav from "@/components/Nav";
import Box from "@/components/Box";
import Footer from "@/components/Footer";

import { Button, ButtonImage } from "@/components/Button";

import Image from "next/image";

import no_image_image from "/public/icons/no-image.png";
import arrow_image from "/public/icons/arrow.png";
import view_image from "/public/icons/view.png";
import edit_image from "/public/icons/edit.png";
import delete_image from "/public/icons/delete.png";

const Page = async () => {
  type Item = {
    id: string;
    nome: string;
    valor: number;
    estoque: number;
    fotoUrl: string;
  };

  const getItens = async () => {
    const response = await fetch(
      `https://projeto-ecommerce-api.onrender.com/produtos`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) throw new Error("Erro ao requisitar os dados...");
    return response.json();
  };

  const itens = await getItens();

  return (
    <>
      <Nav />
      <div className="flex flex-col container my-8 px-2 gap-6 sm:px-8">
        <Box>
          <h1 className="pb-6 border-b-2 font-bold text-2xl text-black">
            Produtos
          </h1>
          {!!itens.length
            ? itens.map((item: Item) => (
                <div className="p-6 rounded-lg bg-[#E3E3E3]" key={item.id}>
                  <div className="flex items-center justify-between w-full h-auto border-b-2 border-[#CECECE] pb-4">
                    <h2 className="inline-flex gap-4 items-center font-bold text-1xl text-black">
                      {item.nome}
                      <ButtonImage
                        variant="secondary"
                        text="V"
                        title="Expandir/Colapsar"
                        image={arrow_image}
                        altText="Toggle"
                      />
                    </h2>
                    <div className="inline-flex gap-2">
                      <ButtonImage
                        variant="secondary"
                        text="V"
                        title="Ver produto"
                        image={view_image}
                        altText="Ver"
                      />
                      <ButtonImage
                        variant="secondary"
                        text="E"
                        title="Editar produto"
                        image={edit_image}
                        altText="Editar"
                      />
                      <ButtonImage
                        variant="secondary"
                        text="X"
                        title="Excluir produto"
                        image={delete_image}
                        altText="Excluir"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 w-full pt-6">
                    <div className="inline-flex rounded-lg size-[120px] bg-[#CECECE]">
                      <Image
                        src={no_image_image}
                        alt="Sem imagem"
                        className="size-fit m-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">Valor</p>
                        <span className="text-[#6B6B6B]">R$ {item.valor}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="font-bold">Estoque</p>
                        <span className="text-[#6B6B6B]">{item.estoque}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Sem itens para exibir."}
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default Page;
