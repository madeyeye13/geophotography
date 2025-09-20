import HeroSection from '../components/sections/HeroSection'
import WelcomeAbout from '../components/sections/WelcomeAbout';
import AboutGeo from '../components/sections/AboutGeo';
import GalleryHome from '../components/sections/GalleryHome';
import ContactMeHome from '../components/sections/ContactMeHome';
import PricingSection from '../components/sections/PricingSection';
function Welcome() {
  return (

    <main>
      <HeroSection />
      <WelcomeAbout />
      <AboutGeo />
      <GalleryHome />
      <ContactMeHome />
      <PricingSection />
      
    </main>
   
  );
}

export default Welcome;
