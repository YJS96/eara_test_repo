// import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg"
import { ReactComponent as CloseRing } from "../../assets/icons/close_ring.svg"

export default function SearchBar() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  }
  const handleBlur = () => {
    setIsFocused(false);
  }

  const handleCancel = () => {
    handleBlur();
    setInputValue("");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleErase = () => {
    setInputValue("");
  }

  return (
    <>
      <SearchBarFrame>
        <SearchWindow isFocused={isFocused}>
          <SearchIcon />
          <SearchInput
            placeholder="검색.."
            onFocus={handleFocus}
            value={inputValue}
            onChange={handleChange}
            />
          {inputValue && <CloseRing onClick={handleErase} />}
        </SearchWindow>
        <CancelButton isFocused={isFocused} onClick={handleCancel}>취소</CancelButton>
      </SearchBarFrame>
      <SearchResultFrame isFocused={isFocused}>

      </SearchResultFrame>
    </>
  );
}

const SearchBarFrame = styled.div`
  position: absolute;
  z-index: 1;
  padding: 0 20px;
  left: 0;
  right: 0;
  height: 52px;
  border-bottom: 0.5px solid var(--gray);
  display: flex;
  align-items: center;
  margin-top: env(safe-area-inset-top);
  background-color: var(--white);
`;

const SearchWindow = styled.div<{isFocused: Boolean}>`
  /* margin: 0px 20px; */
  padding: 0px 6px;
  width: ${props => (props.isFocused ? 'calc(100% - 48px)' : '100%')};
  transition: width 0.3s ease-in-out;
  height: 32px;
  border-radius: 6px;
  background-color: var(--gray);
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  margin-left: 8px;
  border: none;
  outline: none;
  background-color: transparent;
`;

const CancelButton = styled.div<{isFocused : Boolean}>`
  position: absolute;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400;
  right: -24px; // Adjust this value as needed
  right: ${props => (props.isFocused ? '18px' : '-24px')};
  opacity: ${props => (props.isFocused ? '1' : '0')}; // Fade in/out based on focus
  visibility: ${props => (props.isFocused ? 'visible' : 'hidden')}; // Hide button when not focused
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, right 0.3s ease-in-out;
`;

const SearchResultFrame = styled.div<{ isFocused: boolean }>`
  position: absolute;
  width: 100%;
  margin-top: calc(env(safe-area-inset-top) + 53px);
  height: calc(100% - 76px - 53px);
  z-index: 1;
  background-color: var(--white);
  visibility: ${props => (props.isFocused ? 'visible' : 'hidden')};
  opacity: ${props => (props.isFocused ? '1' : '0')};
  transform: translateY(${props => (props.isFocused ? '0' : '20px')});
  transition: visibility 0.3s, opacity 0.3s, transform 0.3s;
`;