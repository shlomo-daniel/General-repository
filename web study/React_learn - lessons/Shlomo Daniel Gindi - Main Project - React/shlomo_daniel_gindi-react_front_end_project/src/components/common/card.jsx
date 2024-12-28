import { NavLink } from "react-router-dom";
import cardsService from "../../../services/cardsService";
import { toast } from "react-toastify";
import { useAuth } from "../../context/auth.context";
function Card({
  cardObj: { title, _id, subtitle, createdAt, email, description, image },
  refreshLike,
  isLike,
}) {
  const { user } = useAuth();

  const handleLike = () => {
    if (!isLike) {
      cardsService.cardLike(_id);
      refreshLike();
      toast("Saved to urgent cases", { type: "success" });
      return;
    }
    cardsService.cardLike(_id);
    refreshLike();
    toast("Card removed", { type: "success" });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem", height: "fit-content" }}>
        <NavLink
          to={"/pages/CaseDetailsPage.jsx"}
          state={{ title, _id, subtitle, createdAt, email, description, image }}
        >
          <img src={image.url} className="card-img-top" alt={image.alt} />
        </NavLink>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div
          className="d-flex justify-content-center m-3"
          style={{ columnGap: "1em" }}
        >
          {user?._id && (
            <div>
              {!isLike && (
                <a className="icon-link-hover cursor-pointer">
                  <i
                    className="bi bi-exclamation-square h4 "
                    onClick={handleLike}
                  ></i>
                </a>
              )}
              {isLike && (
                <a className="icon-link-hover cursor-pointer">
                  <i
                    className="bi bi-exclamation-square-fill h4"
                    onClick={handleLike}
                  ></i>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default Card;
