import Link from "next/link";
import styles from  "./links.module.css"

const Links = () => {
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

  return (
    <div>
      {links.map((link) => (
        <Link href={link.path} key={link.title} className={styles.link}>{link.title}</Link>
      ))}
    </div>
  );
};

export default Links;
