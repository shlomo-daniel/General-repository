import { Modal, Button } from "react-bootstrap";
import imgCort from "/images/court.jpg";
import { useState } from "react";

function EditCardModal({ modalShow }) {
  const [isShow, setIsShow] = useState(true);

  const handelClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);
  console.log(modalShow);

  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      show={isShow && modalShow}
      onHide={handelClose}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Case</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className=" d-flex justify-content-center align-items-start flex-wrap gap-3 ">
          <img
            src={imgCort}
            alt="court hammer"
            className="img-fluid"
            style={{ maxWidth: "50%", width: "500px", minWidth: "300px" }}
          />
          <ul
            className="list-group"
            style={{ width: "500px", minWidth: "280px" }}
          >
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <label className="fw-bold">Case Name</label>
                <br />
                <input
                  type="text"
                  value={"Gorge Realestate ltd. vs Bank of America"}
                />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <label className="fw-bold">Case ID</label>
                <br />
                <input type="text" name="id" value={5543362787515} />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <label className="fw-bold">Client Name</label>
                <br />
                <input type="text" value={"Gorge Honi"} />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <label className="fw-bold">Date of Case</label>
                <br />
                <input
                  type="text"
                  name="date"
                  id="date"
                  value={"02 / 12 / 2019"}
                />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <label className="fw-bold">Officer In Charge</label>
                <br />
                <input type="text" value={"Attorney Van Dolili"} />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto" style={{ maxWidth: "300px" }}>
                <label className="fw-bold">Summary</label>
                <br />
                <textarea
                  type="text"
                  value="Gorge is suing Bank of America for unlawfully withholding
                  funds from his business. "
                />
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">Case Files</div>
                <ul>
                  <li>
                    <a
                      href="#"
                      className="link-dark link-offset-1 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      id.img
                    </a>
                    <a href="#">
                      <i className="bi bi-file-x text-danger mx-1"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark link-offset-1 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      proof-01.img
                    </a>
                    <a href="#">
                      <i className="bi bi-file-x text-danger mx-1"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="link-dark link-offset-1 link-underline-opacity-25 link-underline-opacity-100-hover"
                    >
                      contract.pdf
                    </a>
                    <a href="#">
                      <i className="bi bi-file-x text-danger mx-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handelClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handelClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default EditCardModal;
