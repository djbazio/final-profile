import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sucide from "../../Assets/4.jpg";
import leaf from "../../Assets/prv_salepage.png";
import chatify from "../../Assets/graphic/2.jpg";
import bitsOfCode from "../../Assets/3.jpg";
import prvpdf from "../../Assets/prv_view.pdf";
import ThaiLotto from "../../Assets/ThaiLotto.pdf";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              buttonType="GoogleDrive"
              title="Graphic Design"
              description="Specializing in nightclub graphic design, I create captivating visuals that amplify the energy and allure of your venue. From eye-catching posters to iconic logos, my designs are tailored to make your club the go-to destination for an unforgettable night out."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              gDrive="https://drive.google.com/drive/folders/1RPUVY97vhUCd1419V0mRc8bjRnWRA7rF?usp=share_link"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              
              title="510K"
              description="The 510K summary for Clover Glove Company Limited's medical glove is associated with 510(k) Number K213729, labeled as Clover Glove, and categorized as a traditional polymer patient examination glove. It has not been reviewed by a third party and is not a combination product. For more details, you might want to visit the FDA's 510(k) premarket notification page. "
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfPMN/pmn.cfm?ID=K213729"
              // gDrive="https://drive.google.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              buttonType="GoogleDrive"
              title="Video Editing"
              description="A short Videos editing"
              ghLink="https://drive.google.com/file/d/1tV55kET7Z6nZ2OJZfsAaP1_xxNMhXQ2c/view?usp=drive_link"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              buttonType="Blog"
              pdfViewer="true"
              title="Privacy Card"
              description="PrivacySwap is a cutting-edge DeFi ecosystem on the Binance Smart Chain, blending on-chain data with off-chain services. As the first digital assets web3 wallet oracle and aggregator, we're committed to reinforcing the security and usability of DeFi, blockchain, and cyberspace in the age of cryptocurrencies.              "
              ghLink="https://privacyswap.finance/"
              demoLink={prvpdf}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sucide}
              buttonType="Blog"
              title="Thai Lotto Application"
              description="Experience the thrill and excitement of the popular Thai government lottery through the Thai Lotto Partner app, your one-stop solution for all your lottery needs, now available for our valued users in Laos.
              Whether you love choosing your numbers or simply enjoy the suspense of the draw, Thai Lotto Partner is here to serve you. This is not just an ordinary lottery app; Thai Lotto Partner provides real Thai government lottery tickets that you can buy and sell in Laos."
              // ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
              demoLink={ThaiLotto.pdf}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
