import * as Styled from "./Home.styled";
import Logo from "../../img/Kaua.svg";
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
                src: "https://github.com/kauaquino/kauaquino.github.io/blob/feat/dev-new-version/src/img/coding.png?raw=true",
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

        <Styled.Icons
          onClick={() =>
            window.open("https://www.instagram.com/kaua.ts/", "_blank")
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
          <FaInstagram />
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
              <Styled.Kaua
                src={Logo}
                initial={{ scale: 1 }}
                animate={{ scale: 1.2 }}
                transition={{
                  ease: "linear",
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
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
                        I was Born in 2003
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Brazilian - São Paulo.
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        +3 YEARS Experience in Fullstack Development.
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Curious and Willing to Learn
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>Team Work</Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Programming Lover ♥
                      </Styled.ListAboutItem>
                      <Styled.ListAboutItem>
                        Technical TI School Completed in 2021. (ETEC)
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
                  800:{
                    slidesPerView: 1
                  }
                }}
                spaceBetween={30}
                className="mySwiper">
                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src="https://themewagon.com/wp-content/uploads/2019/02/appru-1.jpg" />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>JS</span>
                      <span>REACT</span>
                      <span>C#</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Description: Is a landing page application
                    </div>
                    <Styled.BtnsDiv>
                      <a>Preview</a>  <a>Code</a>
                    </Styled.BtnsDiv>
                  </Styled.ContentSlider>

                </Styled.Slider>
                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src="https://themewagon.com/wp-content/uploads/2019/02/appru-1.jpg" />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>JS</span>
                      <span>REACT</span>
                      <span>C#</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Description: Is a landing page application
                    </div>
                    <Styled.BtnsDiv>
                      <a>Preview</a>  <a>Code</a>
                    </Styled.BtnsDiv>
                  </Styled.ContentSlider>

                </Styled.Slider>
                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src="https://themewagon.com/wp-content/uploads/2019/02/appru-1.jpg" />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>JS</span>
                      <span>REACT</span>
                      <span>C#</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Description: Is a landing page application
                    </div>
                    <Styled.BtnsDiv>
                      <a>Preview</a>  <a>Code</a>
                    </Styled.BtnsDiv>
                  </Styled.ContentSlider>

                </Styled.Slider>
                <Styled.Slider>
                  <Styled.imgContainer>
                    <img src="https://themewagon.com/wp-content/uploads/2019/02/appru-1.jpg" />
                  </Styled.imgContainer>
                  <Styled.ContentSlider>
                    <Styled.TechDiv>
                      <span>HTML</span>
                      <span>JS</span>
                      <span>REACT</span>
                      <span>C#</span>
                    </Styled.TechDiv>
                    <div style={{ marginBottom: '2rem' }}>
                      Description: Is a landing page application
                    </div>
                    <Styled.BtnsDiv>
                      <a>Preview</a>  <a>Code</a>
                    </Styled.BtnsDiv>
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
