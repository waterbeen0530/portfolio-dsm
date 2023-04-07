import styled from "@emotion/styled";
import Title from "./title";
import Carousel from "./carousel";

export default function ProjectContainer() {
  return (
    <Container id="project">
      <Title />
      <Carousel />
    </Container>
  );
}

const Container = styled.div`
  width: 86%;
  margin-top: 120px;
`;
