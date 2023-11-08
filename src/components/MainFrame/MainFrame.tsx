// import React from 'react'
import styled from "styled-components";

interface MainFrameProps {
  headbar: string;
  navbar: string;
  bgcolor: string;
  marginsize: string;
  children: React.ReactNode;
}

export default function MainFrame({
  headbar,
  navbar,
  marginsize,
  bgcolor,
  children,
}: MainFrameProps) {
  var marginTop = 0;
  var marginBottom = 0;
  var frame = 0;
  var marginsides = 0;
  const insetTop = getComputedStyle(document.documentElement).getPropertyValue("--sat")



  if (headbar === "yes") {
    marginTop += 48
    frame += 48
  }

  if (navbar === "yes") {
    marginBottom += 76;
    frame += 76;
  }

  if (marginsize === "small") {
    marginsides = 4.44;
  } else if (marginsize === "medium") {
    marginsides = 5.56;
  } else if (marginsize === "large") {
    marginsides = 6.67;
  } else if (marginsize === "no") {
    marginsides = 0;
  }

  return (
    <Main
      style={{
        backgroundColor: `var(--${bgcolor})`,
        height: `calc(100% - ${frame}px)`,
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
        // paddingLeft: `${marginsides}%`,
        // paddingRight: `${marginsides}%`,
        padding: `env(safe-area-inset-top) ${marginsides}%`,
      }}
    >
      {children}
      {insetTop.toString()}
    </Main>
  );
}

const Main = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  color: var(--black);
  overflow-x: hidden;
  overflow-y: scroll;
`;
