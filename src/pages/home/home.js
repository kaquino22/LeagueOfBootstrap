import * as Styled from "./Home.styled";
import reactCart from "../../img/projects/reactCart.gif";
import pythonGraph from "../../img/projects/python.jpeg";
import arkanoid from "../../img/projects/arka.gif";
import kattybank from "../../img/projects/kattybank.gif";
import katty from "../../img/projects/katty.jpeg";
import poke from "../../img/projects/pokedex.gif";
import todo from "../../img/projects/todo.gif";
import star from "../../img/projects/STAR.gif";
import calculadora from "../../img/projects/calculadora.gif";
import brazil from "../../img/projects/brazil.gif";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineCaretDown,
  AiFillCaretRight,
  AiFillCaretLeft,
  AiOutlineCaretUp,
} from "react-icons/ai";
import Tech from "../../img/Tech.svg";
import { useCallback, useState, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './style.css';

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const [menuSelected, setMenuSelected] = useState("home");

  const [width, setWidth] = useState(window.innerWidth.toString());

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#291C47",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 3,
            },
            number: {
              density: {
                enable: true,
                area: 3000,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "image",
              image: {
                src: "https://github.com/kauaquino/kauaquino.github.io/blob/dev/src/img/coding.png?raw=true",
                width: 100,
                height: 100,
              },
            },
            size: {
              value: { min: 5, max: 20 },
            },
          },
          detectRetina: true,
        }}
      />

      <Styled.FontContent>
        <Styled.Icons
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5511986183357&text=Ol%C3%A1%2C%20eu%20vim%20atrav%C3%A9s%20da%20Landing%20Page!",
              "_blank"
            )
          }
          initial={{ filter: "hue-rotate(0deg)" }}
          animate={{ filter: "hue-rotate(45deg)" }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaWhatsapp />
        </Styled.Icons>

        <Styled.Icons
          onClick={() => window.open("https://github.com/kauaquino", "_blank")}
          initial={{ filter: "hue-rotate(0deg)" }}
          animate={{ filter: "hue-rotate(45deg)" }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaGithub />
        </Styled.Icons>

        <Styled.Icons
          onClick={() =>
            window.open("mailto:kauamaiaaquino@gmail.com", "_blank")
          }
          initial={{ filter: "hue-rotate(0deg)" }}
          animate={{ filter: "hue-rotate(45deg)" }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <AiOutlineMail />
        </Styled.Icons>

        <Styled.Icons
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/kau%C3%A3-maia-aquino/",
              "_blank"
            )
          }
          initial={{ filter: "hue-rotate(0deg)" }}
          animate={{ filter: "hue-rotate(45deg)" }}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <FaLinkedin />
        </Styled.Icons>
      </Styled.FontContent>

      <Styled.BackgroundDiv>
        {menuSelected == "home" && (
          <>
            <Styled.Header
              initial={{ scale: 0, opacity: "0%" }}
              animate={{ scale: 1, opacity: "100%" }}
              transition={{ duration: 1.5 }}
            >

              <Styled.Apresentation>
                <Styled.TitlePrincipal>
                  <span style={{ color: "#0EE6B7" }}>&lt;H3&gt;</span>
                  <Typewriter
                    style={{ color: "white" }}
                    words={["KAUÃ MAIA AQUINO", "FULLSTACK DEVELOPER"]}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    loop={Infinity}
                    delaySpeed={1000}
                  />
                  <span style={{ color: "#0EE6B7" }}>&lt;/H3&gt;</span>
                </Styled.TitlePrincipal>
              </Styled.Apresentation>
            </Styled.Header>
            <Styled.Left>
              <AiFillCaretLeft onClick={() => setMenuSelected("tech")} />
            </Styled.Left>
            <Styled.Rigth>
              <AiFillCaretRight onClick={() => setMenuSelected("about")} />
            </Styled.Rigth>
            <Styled.Down>
              <AiOutlineCaretDown onClick={() => setMenuSelected("project")} />
            </Styled.Down>
          </>
        )}

        {menuSelected == "about" && (
          <>
            <Styled.Header
              initial={{ marginLeft: -2000 }}
              animate={{ marginLeft: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Styled.AboutUs>
                <div style={{ textAlign: "center" }}>
                  <Styled.Title>#ABOUT US</Styled.Title>
                  <Styled.Subtitle>Its Me!</Styled.Subtitle>
                </div>
                <Styled.AboutUsItens>
                  <Styled.AboutUsItem>
                    <Styled.ListAbout>
                      <Styled.ListAboutItem>
                        Programming Lover ♥
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Brazilian - São Paulo.
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        5 YEARS Experience in Fullstack Development.
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Curious and Willing to Learn
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>Team Work</Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Technical TI School Completed in 2021. (ETEC)
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Bachelor of Science in Computer Engineering (2023 - 2027 - Faculdade Descomplica)
                      </Styled.ListAboutItem>
                    </Styled.ListAbout>
                  </Styled.AboutUsItem>
                </Styled.AboutUsItens>
                <Styled.TextPhrase>"No fear of the unknown"</Styled.TextPhrase>
              </Styled.AboutUs>
            </Styled.Header>
            <Styled.Left>
              <AiFillCaretLeft onClick={() => setMenuSelected("home")} />
            </Styled.Left>
          </>
        )}

        {menuSelected == "project" && (
          <>
            <Styled.Header
              initial={{ marginTop: -2000 }}
              animate={{ marginTop: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Swiper
                navigation={true}
                modules={[Navigation]}

                breakpoints={{
                  1301: {
                    slidesPerView: 3
                  },
                  801: {
                    slidesPerView: 2
                  },
                  800: {
                    slidesPerView: 1
                  }
                }}
                spaceBetween={30}
                className="mySwiper">


                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={star} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JS</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      I created a landing page for study purposes using HTML, CSS, and JS, inspired by Starbucks Brazil
                    </div>

                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={calculadora} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>REACTJS</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      A calculator made in ReactJS
                    </div>

                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={poke} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>REACTJS</span>
                      <span>CSS</span>
                      <span>HTML</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      A Pokédex using ReactJS, Axios, Material UI, and PokeAPI.
                    </div>
                    <Styled.BtnsDiv>
                      <a href="https://github.com/kauaquino/PokeAll-Pokedex" target="_blank">Code</a>
                    </Styled.BtnsDiv>
                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={brazil} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>JS</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                    Brazil landing page
                    </div>
                    <Styled.BtnsDiv>
                      <a href="https://github.com/kauaquino/Beleza_Brazileira_Landing_Page" target="_blank">Code</a>
                    </Styled.BtnsDiv>
                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={katty} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>FLUTTER</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Landing Page for branding Katty Technology
                    </div>
                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={kattybank} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>REACTJS</span>
                      <span>HTML</span>
                      <span>CSS</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Im create page interactive to add news credits cards, theme based in starwars, for brand using Katty Technology
                    </div>
                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={arkanoid} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>GAMEMAKER</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      A copy of the game Arkanoid in GameMaker
                    </div>
                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={pythonGraph} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>PYTHON</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                    I generated a graph depicting the crime counts by region in Los Angeles 
                    </div>
                    <Styled.BtnsDiv>
                      <a href="https://github.com/kauaquino/LosAngeles-Crime-Graphic" target="_blank">Code</a>
                    </Styled.BtnsDiv>
                  </Styled.ContentSlider>
                </Styled.Slider>

                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src={reactCart} />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>CSS</span>
                      <span>REACTJS</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Cart made in ReactJs, and Styled Components, very simple, but functional!
                    </div>
                  </Styled.ContentSlider>
                </Styled.Slider>
              </Swiper>
            </Styled.Header>
            <Styled.Top>
              <AiOutlineCaretUp onClick={() => setMenuSelected("home")} />
            </Styled.Top>
          </>
        )}

        {menuSelected == "tech" && (
          <>
            <Styled.Header
              initial={{ marginLeft: 2000 }}
              animate={{ marginLeft: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Styled.DivImg>
                <div style={{ textAlign: "center" }}>
                  <Styled.Title>#TECHNOLOGIES</Styled.Title>
                  <Styled.Subtitle>My Habilitys!</Styled.Subtitle>
                </div>
                <Styled.TechnologiesImg src={Tech} />
              </Styled.DivImg>
            </Styled.Header>
            <Styled.Rigth>
              <AiFillCaretRight onClick={() => setMenuSelected("home")} />
            </Styled.Rigth>
          </>
        )}
      </Styled.BackgroundDiv>
    </>
  );
}

export default Home;
