import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "LabGevity",
      description: "Personalized Health Tracker",
      imgUrl: projImg1,
    }
  ];

  const projects2 = [
    {
      title: "Ai Chat Bot",
      description: "AI chat bot using Retrieval-Augmented Generation (RAG)",
      imgUrl: projImg2,
    },
  ];

  const projects3 = [
    {
      title: "StockIT",
      description: "Stock Price Tracker",
      imgUrl: projImg3,
    },
  ];

  return (
    <section class="project" id="projects">
      <Container>
        <Row class="row" id="row">
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>These are my passion projects</p>
                {/* Copy, paste and modify below from react boostrap "Pills" section */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Project 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Project 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>LabGevity is an interactive dashboard that allows the user to make sense of their health data.</p>
                      <Row>
                        {
                          // For each project and index, return project title before we create the card
                          projects1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>AI chat bot using Retrieval-Augmented Generation (RAG). Large Language Models (LLMs) are great at generating text but they lack information about the users projects as most AI databases are not open-sourced. RAGs = LLM + project specific knowledge database. RAGs allow for more specific and accurate responses from the AI chat bot. </p>
                      <Row>
                        {
                          // For each project and index, return project title before we create the card
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>This Android mobile app allows you to view a list of stocks of your choice. It was built using React Native and utilized Expo, Stepzen and GraphQL to bring in stock information from Twelvedata. The details of each stock is adjustable and you can track price variations over time.</p>
                      <Row>
                        {
                          // For each project and index, return project title before we create the card
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}