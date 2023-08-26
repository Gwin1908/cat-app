import React from "react";
import Link from "../../../node_modules/next/link";
import Logo from "../Logo/Logo";
import "./NavSidebar.scss";

function NavSidebar() {
  return (
    <section className="nav-sidebar">
      <Logo />
      <section className="nav">
        <h1 className="nav-title">Hi!👋</h1>
        <p className="nav-welcome">Welcome to MacPaw Bootcamp 2023</p>
        <div className="cards-container">
          <h2>Lets start using The Cat API</h2>
          <div className="nav-cards">
            <Link href="/voting" className="card">
              <img src="voting.png" alt="voting button" />
              <button>Voting</button>
            </Link>
            <Link href="/breeds" className="card">
              <img src="breeds.png" alt="breeds button" />
              <button>Breeds</button>
            </Link>
            <Link href="/gallery" className="card">
              <img src="gallery.png" alt="gallery button" />
              <button>Gallery</button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}

export default NavSidebar;
