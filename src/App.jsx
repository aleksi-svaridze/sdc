import { About } from "./sections/about/About";
import { Certifications } from "./sections/certifications/Certifications";
import { Footer } from "./sections/footer/Footer";
import { Header } from "./sections/header/Header";
import { Hero } from "./sections/hero/Hero";
import { Services } from "./sections/services/Services";
import { Testimonials } from "./sections/testimonials/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
