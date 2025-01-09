import { useState, useEffect } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };

    //use effect for switching between logo.svg and logo_no_text.svg
    useEffect(() => {
      const handleResize = () => setIsSmallScreen(window.innerWidth <= 1059);
      handleResize(); // Check on component mount
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
      <>
        <CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <Span style={{ marginLeft: "0.5px" }}>{t("About")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span style={{ marginLeft: "3px" }}>{t("Mapping")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span style={{ marginLeft: "3px" }}>{t("Challenge")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall style={{ width: "190px" }}>
          <Span>
            <a
              href="https://aggeox-docs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Button>{t("Get Started")}</Button>
            </a>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer
            style={{ width: isSmallScreen ? "100px" : "auto" }}
            to="/"
            aria-label="homepage"
          >
            <SvgIcon
              src={isSmallScreen ? "logo_no_text.svg" : "logo.svg"}
              width="100%"
              height="64px"
            />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer
          closable={false}
          open={visible}
          onClose={toggleButton}
          drawerStyle={{
            background: "radial-gradient(circle, #043e83, #0F172A)", // Gradient background for menu
          }}
        >
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
