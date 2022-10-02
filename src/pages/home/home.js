import { useEffect, useState } from 'react';
import * as Styled from './Home.styled';
import EU from '../../img/EU.svg';
import BR from '../../img/BR.svg';
import Logo from '../../img/Kaua.svg';
import Tech from '../../img/Tech.svg';
import { IoLogoWhatsapp, IoMdMail, IoLogoLinkedin } from 'react-icons/io';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';

function Home() {
    return (
        <Styled.BackgroundDiv>
            <Styled.Content>
                <Styled.Header>
                    <Styled.Kaua src={Logo} />
                    <Styled.Apresentation>
                        <Styled.TitlePrincipal><span>&lt;H1&gt;</span> KAUÃ MAIA AQUINO <span>&lt;/H1&gt;</span></Styled.TitlePrincipal>
                        <br></br>
                        <Styled.TitleSubti><span>&lt;H3&gt;</span> FULLSTACK DEVELOPER <span>&lt;/H3&gt;</span></Styled.TitleSubti>
                        <br></br>
                        <Styled.TitleSubti><span>&lt;H3&gt;</span> GAME DESIGNER <span>&lt;/H3&gt;</span></Styled.TitleSubti>
                    </Styled.Apresentation>
                </Styled.Header>
                <Styled.Technologies>
                    <Styled.Title>#TECHNOLOGIES</Styled.Title>
                    <Styled.Subtitle>My Habilitys!</Styled.Subtitle>

                    <Styled.DivImg>
                        <Styled.TechnologiesImg src={Tech} />
                    </Styled.DivImg>

                </Styled.Technologies>

                <Styled.AboutUs>
                    <Styled.Title>#ABOUT US</Styled.Title>
                    <Styled.Subtitle>Its Me!</Styled.Subtitle>

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
                                <Styled.ListAboutItem>
                                    Team Work
                                </Styled.ListAboutItem>
                                <Styled.ListAboutItem>
                                    Programming Lover ♥
                                </Styled.ListAboutItem>
                            </Styled.ListAbout>
                        </Styled.AboutUsItem>
                        <Styled.AboutUsItem>
                            <Styled.ListAbout>
                                <Styled.ListAboutItem>
                                    Technical TI School Completed in <br></br>2021. <span>(ETEC)</span>
                                </Styled.ListAboutItem>
                                <Styled.ListAboutItem>
                                    Graduation Incomplete in Digital <br></br>Games. <span>(FACULDADE DESCOMPLICA)</span>
                                </Styled.ListAboutItem>
                            </Styled.ListAbout>
                        </Styled.AboutUsItem>
                    </Styled.AboutUsItens>
                    <Styled.TextPhrase>
                        "No fear of the unknown"
                    </Styled.TextPhrase>
                </Styled.AboutUs>

                <Styled.Projects>
                    <Styled.Title>#PROJECTS</Styled.Title>
                    <br></br>
                    <Styled.Subtitle>Get to work!</Styled.Subtitle>
                    <br></br>
                    <Styled.ProjectItems>
                        <Styled.ProjectItem>
                            <Styled.ProjectImg src="https://media.istockphoto.com/photos/dotted-grid-paper-background-texture-seamless-repeat-pattern-picture-id1320330053?b=1&k=20&m=1320330053&s=170667a&w=0&h=XisfN35UnuxAVP_sjq3ujbFDyWPurSfSTYd-Ll09Ncc=" />
                            <br></br>
                            <br></br>
                            <Styled.DivContentProject>
                                <Styled.DivTagsProject>
                                    <span>JAVA</span>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JS</span>
                                </Styled.DivTagsProject>
                                <br></br>
                                <p>Project</p>
                                <br></br>
                                <p>Project Description</p>
                                <br></br>
                                <Styled.DivBtnsProject>
                                    <a><AiFillEye/> &nbsp; PREVIEW</a>
                                    <a><AiFillGithub/> &nbsp; GIT REPO</a>
                                </Styled.DivBtnsProject>
                            </Styled.DivContentProject>
                        </Styled.ProjectItem>
                        <Styled.ProjectItem>
                            <Styled.ProjectImg src="https://media.istockphoto.com/photos/dotted-grid-paper-background-texture-seamless-repeat-pattern-picture-id1320330053?b=1&k=20&m=1320330053&s=170667a&w=0&h=XisfN35UnuxAVP_sjq3ujbFDyWPurSfSTYd-Ll09Ncc=" />
                            <br></br>
                            <br></br>
                            <Styled.DivContentProject>
                                <Styled.DivTagsProject>
                                    <span>JAVA</span>
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JS</span>
                                </Styled.DivTagsProject>
                                <br></br>
                                <p>Project</p>
                                <br></br>
                                <p>Project Description</p>
                                <br></br>
                                <Styled.DivBtnsProject>
                                    <a><AiFillEye/> &nbsp; PREVIEW</a>
                                    <a><AiFillGithub/> &nbsp; GIT REPO</a>
                                </Styled.DivBtnsProject>
                            </Styled.DivContentProject>
                        </Styled.ProjectItem>
                    </Styled.ProjectItems>
                </Styled.Projects>
                <br></br>
                <br></br>
                <Styled.ContactMe>
                    <Styled.Title>CONTACT ME</Styled.Title>
                    <br></br>
                    <Styled.Subtitle>Click in buttons to contact me!</Styled.Subtitle>
                    <Styled.ContactItems>
                        <Styled.ContactItem onClick={() => window.open("https://api.whatsapp.com/send?phone=5511986183357&text=Ol%C3%A1%2C%20eu%20vim%20atrav%C3%A9s%20da%20Landing%20Page!", "_blank")}>
                            <IoLogoWhatsapp color='white' size='3.5rem' />
                            <br></br>
                            Phone
                        </Styled.ContactItem>
                        <Styled.ContactItem onClick={() => window.open("https://github.com/kauaquino", "_blank")}>
                            <AiFillGithub color='white' size='3.5rem' />
                            <br></br>
                            Github
                        </Styled.ContactItem>
                        <Styled.ContactItem onClick={() => window.open("mailto:kauamaiaaquino@gmail.com", "_blank")}>
                            <IoMdMail color='white' size='3.5rem' />
                            <br></br>
                            Mail
                        </Styled.ContactItem>
                        <Styled.ContactItem onClick={() => window.open("https://www.linkedin.com/in/kau%C3%A3-maia-aquino/", "_blank")}>
                            <IoLogoLinkedin color='white' size='3.5rem' />
                            <br></br>
                            LinkedIn
                        </Styled.ContactItem>
                    </Styled.ContactItems>

                </Styled.ContactMe>
            </Styled.Content>
        </Styled.BackgroundDiv>
    );
}

export default Home;  