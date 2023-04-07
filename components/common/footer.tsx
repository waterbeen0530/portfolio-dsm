import styled from "@emotion/styled";
import { theme } from "styles/theme";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Frame>
          <Logo>SUBINSU</Logo>
          <Text>
            @2023 DSM 3학년 임수빈
            <br />
            <br />
            대덕소프트웨어마이스터고등학교 정보보안과
            <br />
            (34111) 대전광역시 유성구 가정북로 76(장동 23-9)
            <br />
            이메일: heimerdinger@gmail.com
            <br />
            <br />
            Developer
          </Text>
        </Frame>
        <Route>
          <Link href="https://www.instagram.com/subin_253/">
            <Image src="/img/footer/instagram.svg" />
          </Link>
          <Link href="https://github.com/waterbeen0530">
            <Image src="/img/footer/github.svg" />
          </Link>
        </Route>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid ${theme.whiteColor};
  color: ${theme.strongGrayColor};
`;

const Wrapper = styled.div`
  width: 86%;
  padding: 50px 0 70px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Frame = styled.div``;

const Logo = styled.h1`
  font-size: 32px;
  font-weight: 700;
`;

const Text = styled.div`
  margin-top: 20px;
  line-height: 26px;
`;

const Route = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.strongGrayColor};
  cursor: pointer;
`;

const Image = styled.img`
  width: 42px;
  padding: 6px;
`;
