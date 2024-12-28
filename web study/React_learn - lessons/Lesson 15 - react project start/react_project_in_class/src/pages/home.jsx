import PageHeader from "../common/pageHeader";
import Logo from "../components/logo";
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
