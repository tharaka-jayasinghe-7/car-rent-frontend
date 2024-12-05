import Navbar from "../components/navbar/Navbar";
import HeroImage from "../components/HeroImage";

function Home() {
  return (
    <div id>
      <HeroImage />
      <div className="min-h-screen flex flex-col bg-blue-500">
        {/* Add the Navbar */}

        {/* Rest of the Content */}
        <div className="flex-1 flex items-center justify-center">
          <h1 className="text-4xl text-white">Hello, Tailwind CSS!</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
