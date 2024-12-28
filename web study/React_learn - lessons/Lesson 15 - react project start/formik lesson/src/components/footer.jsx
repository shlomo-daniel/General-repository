import Logo from "./logo";

function Footer() {
  return (
    <footer className="border-top py-2 text-center">
      <span>
        <Logo />
      </span>

      <span className="mx-2">&copy;</span>

      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
