import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faEarthEurope,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="seeds-box">
        <Image
          className="seeds"
          src="/seeds.jpg"
          alt="seeds"
          width={200}
          height={200}
        />
      </div>
      <div className="text-box">
        <p className="text">
          Lusan translates to plants from Scottish Gaelic to English
        </p>
        <em>
          Fhad 's a tha mi air falbh, na díochuimhnich biadh a thoirt don chat
          agam agus uisge a thoirt dha na lusan
        </em>
        <p>
          While I am gone, please don't forget to feed my cat and water the
          plants
        </p>
      </div>
      <h2>Our Values</h2>
      <div className="logos">
        <FontAwesomeIcon icon={faSeedling} className="icon"></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faEarthEurope}
          className="icon"
        ></FontAwesomeIcon>
        <FontAwesomeIcon icon={faHandshake} className="icon"></FontAwesomeIcon>
      </div>
      <Link href={"/"}>
        <a>⏎ Back to home</a>
      </Link>
    </div>
  );
}
