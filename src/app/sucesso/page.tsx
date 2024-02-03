import Nav from "@/components/Nav";
import Box from "@/components/Box";
import { ButtonLink } from "@/components/Button";
import Footer from "@/components/Footer";

const FecharCompra = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col container my-8 px-2 gap-6 sm:px-8">
        <Box>
          <div className="text-center">
            <h1 className="font-bold text-2xl text-[#6FCCE9]">
              Seu pedido foi feito!
            </h1>
            <br />
            <h3 className="text-lg text-[#A7A7A7]">
              Em breve você receberá um e-mail com o comprovante do pedido e por
              lá também poderá acompanhar o status do envio.
            </h3>
            <br />
            <ButtonLink
              href="/"
              variant="primary"
              text="Voltar a homepage"
              title="Clique para voltar"
            />
          </div>
        </Box>
        <Footer />
      </div>
    </>
  );
};

export default FecharCompra;
