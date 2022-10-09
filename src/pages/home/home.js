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
            </Styled.Content>
        </Styled.BackgroundDiv>
    );
}

export default Home;  