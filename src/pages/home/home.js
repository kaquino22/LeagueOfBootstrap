import * as Styled from "./Home.styled";
import Logo from "../../img/Kaua.svg";
import { Typewriter } from "react-simple-typewriter";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { width } from "@mui/system";

function Home() {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
      }, []);

      const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
      }, []);

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
            speed: 4,
          },
          number: {
            density: {
              enable: true,
              area: 3000,
            },
            value: 100,
          },
          opacity: {
            value: 1,
          },
          shape: {
            type: "image",
            image:{
                src:'',
                width: 100,
                height: 100
            }
          },
          size: {
            value: { min: 5, max: 20 },
          },
        },
        detectRetina: true,
      }}
    />
      <Styled.FontContent>
        <Styled.Icons initial={{  filter: 'hue-rotate(0deg)' }}
          animate={{ filter: 'hue-rotate(45deg)'}}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <FaWhatsapp />
        </Styled.Icons>
        <Styled.Icons  initial={{  filter: 'hue-rotate(0deg)' }}
          animate={{ filter: 'hue-rotate(45deg)'}}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <FaGithub />
        </Styled.Icons>
        <Styled.Icons initial={{  filter: 'hue-rotate(0deg)' }}
          animate={{ filter: 'hue-rotate(45deg)'}}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <AiOutlineMail />
        </Styled.Icons>
        <Styled.Icons initial={{  filter: 'hue-rotate(0deg)' }}
          animate={{ filter: 'hue-rotate(45deg)'}}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <FaLinkedin />
        </Styled.Icons>
        <Styled.Icons initial={{  filter: 'hue-rotate(0deg)' }}
          animate={{ filter: 'hue-rotate(45deg)'}}
          transition={{
            ease: "linear",
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}>
          <FaInstagram />
        </Styled.Icons>
      </Styled.FontContent>

      <Styled.BackgroundDiv>
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
      </Styled.BackgroundDiv>
    </>
  );
}

export default Home;
