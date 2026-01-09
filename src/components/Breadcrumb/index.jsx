import { Link, useLocation } from "react-router-dom";
import Styles from "./styles.module.css";

function Breadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <nav className={Styles.breadcrumb}>
      <Link to="/">Dashboard</Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <span key={to}>
            <span className={Styles.separator}>›</span>
            {isLast ? (
              <span className={Styles.current}>
                {formatLabel(value)}
              </span>
            ) : (
              <Link to={to}>{formatLabel(value)}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}

function formatLabel(text) {
  return text
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
}

export default Breadcrumb;
