import Header from "components/common/header";
import BackGround from "components/main/background";
import MainContainer from "components/main/mainContainer";
import ProjectContainer from "components/webProject/projectContainer";
import ActivityContainer from "components/activity/activityContainer";

export default function Home() {
  return (
    <>
      <BackGround>
        <Header />
        <MainContainer />
        <ProjectContainer />
        <ActivityContainer />
      </BackGround>
    </>
  );
}
