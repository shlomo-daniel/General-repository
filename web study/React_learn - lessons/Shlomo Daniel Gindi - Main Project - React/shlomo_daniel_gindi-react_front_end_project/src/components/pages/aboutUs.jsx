function AboutUs() {
  return (
    <main
      className="container-fluid d-flex justify-content-center flex-fill p-3"
      style={{
        background: "#027373",
        minHeight: "fit-content",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
        }}
        className="d-flex flex-column align-items-center"
      >
        <div style={{ marginBottom: "5em" }}>
          <h1>Law Office Cases Management System, C.M.S.</h1>
          <hr />
          <h2>About The System</h2>
        </div>

        <div className="mb-5" style={{ maxWidth: "450px" }}>
          <h3>The system's objective</h3>
          <p>
            This solution is specifically designed for legal offices looking to
            maximize their job efficiency.
          </p>
        </div>

        <div className="mb-5" style={{ maxWidth: "450px" }}>
          <h3>The advantages of utilizing our system</h3>
          <ul>
            <li>quicker case management that saves you both money and time</li>
            <li>concise and well-organized</li>
            <li>
              helping you manage a greater number of clients with the highest
              level of precision
            </li>
          </ul>
        </div>

        <div style={{ maxWidth: "450px" }}>
          <h3>Pricing</h3>
          <p className="mb-5">
            begin utilizing the system without cost, and we are confident you
            will like the benefits.
          </p>
          <h3>Feedback</h3>
          <p>Tell us what we can do to improve it further, kindly.</p>
        </div>
      </div>
    </main>
  );
}
export default AboutUs;
