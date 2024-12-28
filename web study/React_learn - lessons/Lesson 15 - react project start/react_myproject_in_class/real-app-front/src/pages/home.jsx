import Logo from "../components/logo";
import PageHeader from "../components/common/pageHeader";
function Home() {
  return (
    <div className="container">
      <PageHeader
        title={<Logo />}
        description="Home this is so interestineg home"
      />
    </div>
  );
}
export default Home;
