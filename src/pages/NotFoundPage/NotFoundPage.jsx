import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page Not Found</h1>
      <p className={css.text}>Sorry, the page you are looking for doesn’t exist.</p>
      <Link to="/" className={css.link}>← Go to Home</Link>

      <img
        src="/images/the-end-812226_1920.jpg"
        alt="Movies banner"
        className={css.banner}
      />
    </div>
  );
};

export default NotFoundPage;

