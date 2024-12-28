import PageHeader from "../components/common/pageHeader";
import Logo from "../components/logo";

function Home() {
  return (
    <div className="container">
      <PageHeader title={<Logo />} description="Why you should use real app" />
    </div>
  );
}

export default Home;
