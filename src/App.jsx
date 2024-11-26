import AboveFooter from "../components/AboveFooter";
import BlogSection from "../components/BlogSection";
import Carousel from "../components/Carousel";
import ClientsSection from "../components/Clients";
import CustomerSection from "../components/cUSTOMERsECTION.JSX";
import Footer from "../components/Footer";
import CommunitySection from "../components/ManageCommunity";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import StatisticsSection from "../components/StatisticsSection";

const App = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <ClientsSection />
      <CommunitySection />
      <Section />
      <StatisticsSection />
      <Section />
      <CustomerSection />
      <BlogSection />
      <AboveFooter />
      <Footer />
    </>
  );
};

export default App;
