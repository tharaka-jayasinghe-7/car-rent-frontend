import Navbar from "../components/navbar/Navbar";
import LoggedInHeroImage from "../components/LoggedInHeroImage";
import Footer from "../components/Footer";

function Home() {
  return (
    <div id>
      <Navbar />
      <LoggedInHeroImage />
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col items-center mt-20 mb-10 text-center px-4 bg-white">
          <section className="py-4">
            {" "}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Choose a location
                </h3>
                <p className="text-gray-600">
                  See 2-hour availability at heavy discounted prices.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Pick-up date
                </h3>
                <p className="text-gray-600">
                  Click choose and we'll pick the car that's available.
                </p>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-700">
                  Book your car
                </h3>
                <p className="text-gray-600">
                  See which rental is right after you select it.
                </p>
              </div>
            </div>
          </section>

          <section className="py-4 bg-gray-100 w-full mt-20">
            {" "}
            <h2 className="text-3xl font-bold text-gray-800  text-center mb-4">
              {" "}
              Best Services
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="max-w-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Deals for every budget
                </h3>
                <p className="text-gray-600">
                  Incredible prices on economy, luxury, and more.
                </p>
              </div>
              <div className="max-w-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Best price guaranteed
                </h3>
                <p className="text-gray-600">
                  Find a lower price? We'll refund you 100% of the difference.
                </p>
              </div>
              <div className="max-w-sm">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Support 24/7
                </h3>
                <p className="text-gray-600">
                  Find a lower price? We'll refund you 100% of the difference.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
