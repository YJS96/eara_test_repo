// import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainFrame from "../../components/MainFrame/MainFrame";
import { ReactComponent as LoginBackgroundSVG } from "../../assets/icons/login-background.svg";
import { ReactComponent as Download } from "../../assets/icons/download-icon.svg";

export default function LoginPage() {
  const helpURL = "http://pf.kakao.com/_xbxhxgsG";
  const netZeroURL =
    "https://cpoint.or.kr/netzero/member/nv_memberRegistStep1.do";

  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const installApp = (event: any) => {
    event.preventDefault();
    if (!promptInstall) {
      return;
    }
    // @ts-ignore
    promptInstall.prompt();

    if (!supportsPWA) {
      return null;
    }
  };

  return (
    <>
      <MainFrame headbar="no" navbar="no" bgcolor="white" marginsize="no">
        <BackgroundFrame>
          <LoginBackground />
        </BackgroundFrame>
        <ButtonsFrame>
          <EARA>
            <EARABold>어 - 라?</EARABold>
            <br />
            어느 날 갑자기
            <br />
            지구가 당신을
            <br />
            고소한다면?
          </EARA>
          <KakaoButton>
            카카오로 시작하기
            <ButtonLogo src="images/kakao-logo.png" />
          </KakaoButton>
          <InstallButton onClick={installApp}>
            어플리케이션 설치
            <DownloadIcon />
          </InstallButton>
          <HelpButtonsFrame>
            <HelpButton
              onClick={() => {
                window.open(helpURL);
              }}
            >
              고객센터 문의하기
            </HelpButton>
            <HelpButton
              onClick={() => {
                window.open(netZeroURL);
              }}
            >
              탄소중립포인트제도
            </HelpButton>
          </HelpButtonsFrame>
        </ButtonsFrame>
      </MainFrame>
    </>
  );
}

const BackgroundFrame = styled.div`
  left: 0;
  right: 0;
  height: 45%;
  display: flex;
  justify-content: center;
`;

const LoginBackground = styled(LoginBackgroundSVG)`
  position: relative;
  width: auto;
  height: 100%;
  transform: scale(2.36) translate(11.9%, -15%);
`;

const EARA = styled.div`
  margin-bottom: 48px;
  font-size: 1.625em;
  font-weight: 400;
  line-height: 1.4em;
  margin-left: 13.56%;
`;

const EARABold = styled.span`
  font-size: 1em;
  font-weight: 600;
  line-height: 2em;
`;

// const LogoImage = styled.img`
//   position: absolute;
//   top: calc(45% + 112px);
//   width: 34%;
//   right: 6%;
// `

const ButtonsFrame = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  max-height: 60%;
`;

const KakaoButton = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: 0px 6.67%;
  height: 46px;
  background-color: var(--kakao-yellow);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 550;
  font-size: 14px;
  color: var(--kakao-black);
`;

const InstallButton = styled(KakaoButton)`
  background-color: var(--black);
  color: var(--white);
  font-weight: 450;
  margin-top: 16px;
`;

const ButtonLogo = styled.img`
  position: absolute;
  left: 18px;
  width: 28px;
`;

const DownloadIcon = styled(Download)`
  position: absolute;
  left: 18px;
`;

const HelpButtonsFrame = styled.div`
  position: relative;
  left: 0;
  right: 0;
  height: 40px;
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 26px;
`;

const HelpButton = styled.div`
  font-size: 13px;
  color: var(--dark-gray);
  font-weight: 500;
`;
