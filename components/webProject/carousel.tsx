import styled from "@emotion/styled";
import { CarouselDocs } from "docs/webproject/carouselDocs";
import { useState } from "react";
import { theme } from "styles/theme";

export default function Carousel() {
  const [limit, setLimit] = useState(1);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const numPages = Math.ceil(CarouselDocs.length / limit);

  const onMoveFront = () => {
    setPage(page + 1);
  };

  const onMoveBack = () => {
    setPage(page - 1);
  };
  return (
    <Container>
      <Button onClick={onMoveBack} disabled={page === 1}>
        <LeftImage src="/img/webProject/arrow.svg" />
      </Button>
      {CarouselDocs.slice(offset, offset + limit).map((arr, i) => (
        <Wrapper key={i}>
          <Images>
            <Image src={arr.img1} />
            <Image src={arr.img2} />
            <Image src={arr.img3} />
          </Images>
          <TextBox>
            <Title>{arr.title}</Title>
            <Content>{arr.content}</Content>
            <DateBox>
              <strong>개발 기간</strong>
              <p>{arr.date}</p>
            </DateBox>
            <StackBox>
              <strong>기술 스택</strong>
              <p>{arr.stack}</p>
            </StackBox>
            <PartBox>
              <strong>개발 파트</strong>
              <p>{arr.part}</p>
            </PartBox>
            {/* <Button>gitHub</Button> */}
          </TextBox>
        </Wrapper>
      ))}
      <Button onClick={onMoveFront} disabled={page === numPages}>
        <RightImage src="/img/webProject/arrow.svg" />
      </Button>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 740px;
  height: 480px;
  padding: 36px 70px;
  gap: 70px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border: 4px solid ${theme.whiteColor};
  border-radius: 26px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.7)
  );
`;
const Images = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 200px;
  height: 124px;
  border-radius: 6px;
  border: 3px solid ${theme.softGrayColor};
`;
const TextBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${theme.blackColor};
`;
const Title = styled.h1`
  font-size: 44px;
`;
const Content = styled.div`
  margin-top: 14px;
  font-size: 20px;
`;

const Text = styled.div`
  font-size: 16px;
  gap: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  white-space: pre-wrap;
`;

const DateBox = styled(Text)`
  margin-top: 40px;
`;
const StackBox = styled(Text)`
  margin-top: 24px;
`;
const PartBox = styled(Text)`
  margin-top: 24px;
  line-height: 30px;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  border: 5px solid ${theme.whiteColor};
  border-radius: 30px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.7)
  );
  cursor: pointer;
`;

const LeftImage = styled.img`
  padding-right: 3px;
`;
const RightImage = styled.img`
  padding-right: 4px;
  transform: rotate(180deg);
`;
