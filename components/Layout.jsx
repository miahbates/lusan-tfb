import Head from "next/head";
import Navbar from "./nav/navbar.jsx";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faHeart,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import StyledFooter from "./styled-components/StyledFooter";

export default function Layout({ children, setOpen, open }) {
  return (
    <div className="layout">
      <Head>
        <title>Lusan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex-row navbar">
        <Navbar></Navbar>
        <div className="search-wishlist-icons">
          <Link href="/all-seeds">
            <a aria-label="search">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon-search"
              />
            </a>
          </Link>
          <Link href="/wishlist">
            <a aria-label="wishlist">
              <FontAwesomeIcon icon={faHeart} className="icon-wishlist" />
            </a>
          </Link>
        </div>
      </div>
      <main>{children}</main>
      <StyledFooter className="footer">
        <div className="footer-about">
          <Link href="/about-us">
            <a className="footer-links">About Us</a>
          </Link>
          <Link href="/contact-us">
            <a className="footer-links">Contact</a>
          </Link>
          <a
            aria-label="instagram"
            className="footer-links"
            href="https://www.instagram.com/growlusan/"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="icon"
            ></FontAwesomeIcon>
          </a>
          <a
            aria-label="linkedin"
            className="footer-links"
            href="https://www.linkedin.com/in/rep94"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="icon"
            ></FontAwesomeIcon>
          </a>
        </div>
        <div className="footer-contact">
          <a href="mailto:rachel@growlusan.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="icon"
            ></FontAwesomeIcon>
            <p>rachel@growlusan.com</p>
          </a>
          <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
          <p>01903 765431</p>
        </div>
      </StyledFooter>
    </div>
  );
}
