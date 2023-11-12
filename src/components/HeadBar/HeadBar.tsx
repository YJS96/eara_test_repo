// import React from 'react'
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ReactComponent as LeftArrow } from '../../assets/icons/left-arrow.svg'

interface HeadBarProps {
  pagename: string;
  bgcolor: string;
  backbutton: string;
  center?: boolean;
}

export default function HeadBar({ pagename, bgcolor, backbutton, center }: HeadBarProps) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <HeadBarFrame style={{backgroundColor: `var(--${bgcolor})`}}>
      <HeadBarContext>
        {backbutton === "yes" ? <LeftArrow onClick={goBack}/> : null}
        {center ? (
          <CenterFrame>
            {pagename}
          </CenterFrame>
        ) : (
          <>&nbsp;{pagename}</>
        )}
      </HeadBarContext>
    </HeadBarFrame>
  )
}


const HeadBarFrame = styled.div`
  position: absolute;
  width: 100%;
  height: 48px;
  margin-top: env(safe-area-inset-top);
  left: 0;
  border-bottom: 1px solid var(--gray);
  /* border: 1px black solid; */
  display: flex;
  align-items: center;
  z-index: 2;
`

const HeadBarContext = styled.div`
  position: relative;
  padding-left: 12px;
  font-size: 21px;
  font-weight: 650;
  display: flex;`

const CenterFrame = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  font-weight: 600;
`;