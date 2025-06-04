import { Link } from "react-router-dom";
import { ROUTES } from "./consts";

const HomePage = () => {
  return (
    <>
      <Link to={ROUTES.FINAL_GAME}>midterm</Link>
      <br />
      <Link to={ROUTES.FINAL_GAME}>final</Link>
    </>
  );
};

export default HomePage;
