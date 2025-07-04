import ScrollProvider from "../../components/contexts/ScrollProvider";
import { MenuProvider } from "../../components/contexts/MenuProvider";
import { Lenis } from "@studio-freight/react-lenis";
import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import PrivacyFirstSection from "../../components/PrivacyFirstSection";
import PrivacyMainSection from "../../components/PrivacyMainSection";

function PrivacyPage() {
  return (
    <ScrollProvider>
      <MenuProvider>
        <Lenis
          root
          options={{ smooth: true }}
        >
          <GlobalStyles />
          <Header />
          <Menu />
          <PrivacyFirstSection />
          <PrivacyMainSection />
          <Footer name={"Contacts"} type={"Privacy"} />
        </Lenis>
      </MenuProvider>
    </ScrollProvider>
  )
}

export default PrivacyPage;
