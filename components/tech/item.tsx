import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { useEffect, useState } from "react";

export default function Item() {
  const [random, setRandom] = useState([50, 50, 50, 50, 50, 50, 50]);
  const item = [40, 50, 60, 70];

  const click = () => {
    const randomValue = Array(7)
      .fill(0)
      .map(() => item[Math.floor(Math.random() * item.length)]);

    setRandom(randomValue);
  };

  return (
    <Container>
      <Wrapper>
        <Frame>
          <Text size={random[0]}>HTML5</Text>
          <Text size={random[1]}>CSS3</Text>
          <Text size={random[2]}>JavaScript</Text>
          <Text size={random[3]}>TypeScript</Text>
        </Frame>
        <Frame>
          <Text size={random[4]}>React JS</Text>
          <Text size={random[5]}>Next Js</Text>
          <Text size={random[6]}>Recoil</Text>
        </Frame>
      </Wrapper>
      <Button onClick={click}>Click Me!</Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 200px;
  gap: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Frame = styled.div`
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: ${({ size }: { size: number }) => size}px;
  font-weight: 700;
  color: ${theme.whiteColor};
  transition: 0.3s;
`;

const Button = styled.button`
  width: 180px;
  height: 60px;
  margin-top: 70px;
  border: none;
  border-radius: 10px;
  border: 4px solid ${theme.whiteColor};
  outline: none;
  font-size: 18px;
  font-weight: 700;
  color: ${theme.strongGrayColor};
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.7)
  );
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${theme.blackColor};
    background-color: ${theme.whiteColor};
  }
`;
