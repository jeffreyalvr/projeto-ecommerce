import Nav from "@/components/Nav";
import Banner from "@/components/Banner";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="container my-8 px-2 sm:px-8">
        <Banner />
      </div>
    </>
  );
};

export default Home;
