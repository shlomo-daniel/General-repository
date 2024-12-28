import PageHeader from "../components/common/pageHeader";
import Logo from "../components/logo";

function About() {
  return (
    <div className="container">
      <PageHeader
        title={
          <>
            About <Logo />
          </>
        }
        description="something about me and this app"
      />
    </div>
  );
}

export default About;
