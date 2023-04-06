import styled from "@emotion/styled";
import { theme } from "styles/theme";
import { DSMDocs } from "docs/activity/dsmDocs";

export default function DSM2021() {
  return (
    <Container>
      <Items>
        <Title>DSM 2021</Title>
        {DSMDocs["2021"].map((arr, i) => (
          <Item key={i}>
            <Image src={arr.img} />
            <Text>{arr.title}</Text>
          </Item>
        ))}
      </Items>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin: 0 30px 30px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 40px;
  text-align: end;
`;

const Items = styled.div`
  width: 100%;
  gap: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 18px 30px;
  gap: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.whiteColor};
  border-radius: 10px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.7)
  );
`;

const Image = styled.img`
  width: 32px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.blackColor};
`;
