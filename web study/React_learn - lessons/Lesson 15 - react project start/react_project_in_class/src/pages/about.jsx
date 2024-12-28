import PageHeader from "../common/pageHeader";
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
        description="this is all About you"
      />
    </div>
  );
}
export default About;
