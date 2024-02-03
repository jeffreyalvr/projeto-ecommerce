import Nav from "@/components/Nav";
import Box from "@/components/Box";
import Footer from "@/components/Footer";

import { Button } from "@/components/Button";

import Image from "next/image";
import no_image_image from "/public/icons/no-image.png";
import like_outlined_image from "/public/icons/like-outlined.png";

const FecharCompra = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col container my-8 px-2 gap-6 sm:px-8">
        <Box>
          <h1 className="pb-6 border-b-2 font-bold text-2xl text-black">
            Produto
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
                <span className="text-[#6B6B6B]">R$ 543,39</span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold">Estoque</p>
                <span className="text-[#6B6B6B]">17</span>
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
            <span className="text-[#6B6B6B]">
              Esta é a descrição do produto acima listado. É um produto
              sensacional que oferece tudo a que se propõe. Compre e tenha a
              melhor experiência de uso a qual ele foi especificado.
            </span>
          </div>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default FecharCompra;
