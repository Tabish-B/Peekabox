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
        className="py-12 px-4 md:px-8 lg:px-16 bg-Background text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold">Signup for Business</h2>
        <BusinessSignup />
      </section>

      <section
        id="download-app"
        className="py-12 px-4 md:px-8 lg:px-16 bg-Background text-center"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 ">Download Our App</h2>
        <DownloadButtons />
      </section>

      <section
        id="mission-statement"
        className="py-12 px-4 md:px-8 lg:px-16 bg-background text-center"
      >
        <MissionStatement />
      </section>

      <section
        id="how-to-use"
        className="py-12 px-4 md:px-8 lg:px-16 bg-Background text-center"
      >
        <HowToUse />
      </section>

      <section
        id="business-solution"
        className="py-12 px-4 md:px-8 lg:px-16 bg-background text-center"
      >
        <BusinessSolution />
      </section>

      <section
        id="restaurant-headline"
        className="py-12 px-4 md:px-8 lg:px-16 bg-Background text-center"
      >
        <RestaurantHeadline />
      </section>
    </main>
  );
}
