import styled from "styled-components";

export const Button = styled.button`
border: ${(props) => (props.theme === "primary" ? "none" : "1px solid #fff")};
background: ${(props) =>
 props.theme === "primary"
  ? "linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)"
  : "transparent"};
font-size: 16px;
padding: 16px 32px;
color: #fff;
width: fit-content;
border-radius: 30px;
cursor: pointer;

&:hover {
  opacity: 0.8;
  color: ${(props) => (props.theme === "primary" ? "" : "#000")};
  background: ${(props) =>
      props.theme === "primary" ? "" : "#d2dae2"};
    border-color: ${(props) => (props.theme === "primary" ? "" : "#fff")};
}

&:active {
  opacity: 0.5;
}  
 
`