import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav style={{ position: "fixed" }}>
        <div className="nav-wrapper" style={{ backgroundColor: "Green" }}>
          <Link to="#" className="brand-logo right">
            <div style={{ marginRight: "20px" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-amd"
                viewBox="0 0 16 16"
              >
                <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z" />
              </svg>
            </div>
          </Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <Link to="/home">
                <h6 style={{ paddingTop: "8px" }}>Home</h6>
              </Link>
            </li>
            <li>
              <Link to="/employee">
                <h6 style={{ paddingTop: "8px" }}>Employee</h6>
              </Link>
            </li>
            <li>
              <Link to="/captcha">
                <h6 style={{ paddingTop: "8px" }}>GenerateCaptcha</h6>
              </Link>
            </li>
            <li>
              <Link to="/otp">
                <h6 style={{ paddingTop: "8px" }}>GenerateOtp</h6>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
