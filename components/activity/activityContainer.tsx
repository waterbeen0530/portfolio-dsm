import styled from "@emotion/styled";
import { theme } from "styles/theme";
import Title from "./title";
import DSM2021 from "./dsm2021";
import DSM2022 from "./dsm2022";
import DSM2023 from "./dsm2023";
import { Link } from "react-scroll";

export default function ActivityContainer() {
  return (
    <>
      <Container id="activity">
        <Title />
        <Wrapper>
          <Frame>
            <DSM2021 />
            <DSM2023 />
          </Frame>
          <Line></Line>
          <DSM2022 />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 86%;
  margin-top: 120px;
`;

const Wrapper = styled.div`
  margin-top: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Frame = styled.div`
  width: 100%;
  margin-right: 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Line = styled.div`
  width: 8px;
  height: 1274px;
  background-color: ${theme.whiteColor};
`;
