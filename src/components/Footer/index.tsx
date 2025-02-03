import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  Para,
  Large,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  FooterBottomRow,
  FooterBottomText, // Add this styled component
} from "./styles";

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>
                Donald Danforth Plant{" "}
                <span className="science-center">Science Center</span>
              </Para>
              <Para>975 N Warson Rd</Para>
              <Para>Creve Couer, MO, 63132</Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Company")}</Title>
              <Large to="https://www.shakoorlab.org/">{t("About")}</Large>
              <Large to="https://www.danforthcenter.org/news-type/news-release/">
                {t("Press")}
              </Large>
              <Large to="https://www.danforthcenter.org/careers/">
                {t("Careers & Culture")}
              </Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
                <LanguageSwitch onClick={() => handleChange("es")}>
                  <SvgIcon
                    src="spain.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
          </Row>
          {/* Add a bottom row for the responsive footer text */}
          <FooterBottomRow justify="start">
            <FooterBottomText>
              © 2025{" "}
              <a
                href="https://shakoorlab.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shakoor Lab
              </a>
              . All rights reserved.
            </FooterBottomText>
          </FooterBottomRow>
        </Container>
      </FooterSection>
    </>
  );
};

export default withTranslation()(Footer);
