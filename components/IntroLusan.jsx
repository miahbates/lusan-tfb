import Link from "next/link";
import React from "react";

export default function IntroLusan() {
  return (
    <div className="box">
      <h1>Intro stuff here</h1>
      <Link href="/allseeds">
        <a>Click here for all seeds</a>
      </Link>
    </div>
  );
}
