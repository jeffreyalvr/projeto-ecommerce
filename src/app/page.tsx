import Nav from "@/components/Nav";
import Banner from "@/components/Banner";
import ItemsList from "@/components/ItemsList";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-col container my-8 px-2 gap-6 sm:px-8">
        <Banner />
        <ItemsList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
