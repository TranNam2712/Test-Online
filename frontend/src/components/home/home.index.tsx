import Future from "./home.future";
import TestOnline from "./home.test-online";
import ImageSlider from "./home.slider";

const Home = () => {
  const images = ["banner1.webp", "banner2.png"];
  return (
    <>
      <div className="w-full flex-col justify-center items-center">
        {/* slider */}
        <ImageSlider images={images} />
        {/* test online 1 */}
        <TestOnline />
        {/* future orientation */}
        <Future />
      </div>
    </>
  );
};

export default Home;
