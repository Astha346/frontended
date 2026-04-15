import Image from "../../assets/images/Banner2.jpg";

const HeroSection = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${Image})` }}
    >
      <div className="pl-16 text-white max-w-xl">

        <button className="border px-6 py-2 rounded-lg font-semibold bg-yellow-500 hover:bg-white hover:text-black transition mb-6">
          New Arrival 2026
        </button>

        <h1 className="text-5xl font-bold leading-tight mb-4">
          Discover Your Perfect Style
        </h1>

        <p className="mt-4 text-lg  text-gray-200">
          Explore our latest collection of trendy fashion.Quality meets affordability.
        </p>

        <div className="flex gap-4 mt-6">
          <button className="px-6 py-2 rounded-lg font-semibold bg-yellow-500 hover:bg-white hover:text-black transition">
            Shop Now
          </button>

          <button className="border px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            View Collection
          </button>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;