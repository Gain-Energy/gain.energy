import ScrollProvider from "../../components/contexts/ScrollProvider";
import { MenuProvider } from "../../components/contexts/MenuProvider";
import { Lenis } from "@studio-freight/react-lenis";
import GlobalStyles from "../../components/GlobalStyles";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import PressMainSection from "../../components/PressMainSection";
import pressRelease from "../../data/pressRelease";

function PressPage() {
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
          <PressMainSection release={pressRelease} />
        </Lenis>
      </MenuProvider>
    </ScrollProvider>
  )
}

export default PressPage;
