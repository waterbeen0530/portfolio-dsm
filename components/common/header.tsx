import styled from "@emotion/styled";
import { theme } from "styles/theme";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <Container>
      <Logo src="/img/header/subinsu.png" />
      <TextBox>
        <Link to="intro" spy={true} smooth={true}>
          <p>Introduction</p>
        </Link>
        <Link to="project" spy={true} smooth={true}>
          <p>project</p>
        </Link>
        <Link to="activity" spy={true} smooth={true}>
          <p>Activity</p>
        </Link>
        <Link to="tech" spy={true} smooth={true}>
          <p>Tech & Stack</p>
        </Link>
      </TextBox>
    </Container>
  );
}

const Container = styled.div`
  width: 86%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 130px;
  cursor: pointer;
`;

const TextBox = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > a {
    font-size: 16px;
    font-weight: 700;
    &:hover {
      color: ${theme.whiteColor};
      transition: all 0.5s;
      cursor: pointer;
    }
  }
`;
