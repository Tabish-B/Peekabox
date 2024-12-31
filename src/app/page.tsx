import DownloadButtons from "./components/DownloadButtons";
import BusinessSignup from "./components/BusinessSignup";
import MissionStatement from "./components/MissionStatement";
import HowToUse from "./components/HowToUse";
import BusinessSolution from "./components/BusinessSolution";
import RestaurantHeadline from "./components/RestaurantHeadline";

export default function Home() {
  return (
    <main>
      <section
        id="business-signup"
        className="mb-12 bg-Background text-center relative z-10"
      >
        <BusinessSignup />
      </section>

      {/* Art Section*/}
      <section
        id="art"
        className="py-14 px-4 md:px-8 lg:px-16 bg-repeat bg-center text-center relative"
        style={{
          backgroundImage: "url('/images/art3.png')",
          backgroundSize: "30%", 
          backgroundAttachment: "fixed",
          height: "auto",
        }}
      >
      </section>

      <section
        id="download-app"
        className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center relative z-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">Download Our App</h2>
        <DownloadButtons />
      </section>

      <section
        id="mission-statement"
        className="py-12 px-4 md:px-8 lg:px-16 bg-Background text-center relative z-10"
      >
        <MissionStatement />
      </section>

      <section
        id="how-to-use"
        className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center relative z-10"
      >
        <HowToUse />
      </section>

      <section
        id="restaurant-headline"
        className="py-12 px-4 md:px-8 lg:px-16 bg-Background text-center relative z-10"
      >
        <RestaurantHeadline />
      </section>
    </main>
  );
}