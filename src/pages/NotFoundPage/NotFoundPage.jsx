import { Link } from "react-router-dom";
import styles from "./NotFoundPage/NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}> {/* ✅ применили стиль */}
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for doesn’t exist.</p>
      <Link to="/" className={styles.link}>← Go to Home</Link>
    </div>
  );
};

export default NotFoundPage;
