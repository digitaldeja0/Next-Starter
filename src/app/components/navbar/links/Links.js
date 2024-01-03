"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./links.module.css";
import NavLinks from "./navlinks/navLink";

const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}

        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLinks item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <div className={styles.mobileContainer}>
        <Image
          src="/menu.png"
          width={20}
          height={20}
          alt=""
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLinks item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Links;
