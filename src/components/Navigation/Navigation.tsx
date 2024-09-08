import { ListaNavegacaoStyle, NavStyleMobile } from "./NavigationStyle";
import { IconeLogoSms } from "../Icones/sms-logo";
import { ModalNavigation } from "../PopUps/ModalNavigation/ModalNavigation";
import { ListaNavegacao } from "./ListaNavegacao";
import { useApplication } from "../../contexts/ApplicationContext";
import { useIsMobile } from "@services/hooks/useIsMobile";
import { ProfileDropDown } from "./ProfileDropDown/ProfileDropDown";

export const Navigation = () => {
  const isMobile = useIsMobile();
  const { auth } = useApplication();

  return (
    <>
      {isMobile ? (
        <NavStyleMobile>
          <IconeLogoSms path={"/"} />
          <ModalNavigation />
        </NavStyleMobile>
      ) : (
        <ListaNavegacaoStyle>
          <ListaNavegacao />
          {auth && <ProfileDropDown />}
        </ListaNavegacaoStyle>
      )}
    </>
  );
};
