import { useEffect } from 'react';
import { useMediaQuery } from "react-responsive";
import { Lenis } from '@studio-freight/react-lenis';
import ScrollProvider, { useScroll } from '../../components/contexts/ScrollProvider';
import { MenuProvider } from '../../components/contexts/MenuProvider';
import { PopupProvider } from '../../components/contexts/PopupProvider';
import GlobalStyles from '../../components/GlobalStyles';
import PathDrilling from "../../components/PathDrilling/PathDrilling";
import PathDrillingTabl from "../../components/PathDrillingTabl/PathDrillingTabl";
import PathDrillingMob from "../../components/PathDrillingMob/PathDrillingMob";
import Scale from "../../components/Scale/Scale";
import Counter from "../../components/Scale/Counter";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import FirstSection from "../../components/FIrstSection/FirstSection";
import OurPerspectiveSection from "../../components/OurPerspectiveSection/OurPerspectiveSection";
import KeyFeaturesSection from "../../components/KeyFeaturesSection/KeyFeaturesSection";
import UseCasesSection from "../../components/UseCasesSection/UseCasesSection";
import IntelegentCoreSection from "../../components/IntelegentCoreSection/IntelegentCoreSection";
import DrillingEngineeringSection from "../../components/DrillingEngineeringSection/DrillingEngineeringSection";
import CompanySection from "../../components/CompanySection/CompanySection";
import PartnersAndNewsSection from "../../components/PartnersAndNewsSection/PartnersAndNewsSection";
import Footer from "../../components/Footer/Footer";

const HomePageContent = ({ section }) => {
  const { scrollToSection } = useScroll();
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    if (section) {
      const timer = setTimeout(() => {
        scrollToSection(section);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [section, scrollToSection]);

  return (
    <Lenis
      root
      options={{ smooth: true }}
    >
      <GlobalStyles />
      {isMobile ?
        <PathDrillingMob />
        :
        isTablet ?
          <PathDrillingTabl />
          :
          <PathDrilling />
      }
      <Scale />
      <Counter />
      <Header />
      <Menu />
      <FirstSection />
      <OurPerspectiveSection name={'Perspective'} />
      <KeyFeaturesSection name={'Features'} />
      <UseCasesSection name={'Cases'} />
      <IntelegentCoreSection name={'Products'} />
      <DrillingEngineeringSection />
      <CompanySection name={'Company'} />
      <PartnersAndNewsSection />
      <Footer name={'Contacts'} />
    </Lenis>
  );
}

const HomePage = ({ section }) => {
  return (
    <ScrollProvider>
      <MenuProvider>
        <PopupProvider>
          <HomePageContent section={section} />
        </PopupProvider>
      </MenuProvider>
    </ScrollProvider>
  );
}

export default HomePage;
