import Input from "../common/input";
import PageHeader from "../common/pageHeader";

function SignUp() {
  return (
    <div className="row g-3 m-3">
      <PageHeader title="Sign Up" description="sign up to get the best deals" />
      <form className="needs-validated" noValidate>
        <Input label="First Name" type="text" name="firstName" />

        <Input label="Last Name" type="text" name="lastName" />

        <Input label="Email" type="email" name="email" />

        <Input label="Password" type="password" name="password" />
        <button
          className="btn btn-success mt-3"
          type="submit"
          onSubmit={(e) => e.preventDefault()}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
