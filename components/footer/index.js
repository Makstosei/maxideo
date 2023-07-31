import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        Made with ❤️ by&nbsp;
        <Link className={styles.colorBlue} href="https://www.linkedin.com/in/makstosei" target="_blank">
          Seyit Maksutoğlu
        </Link>
      </div>
      <div>
        &nbsp; as part of&nbsp;
        <Link className={styles.colorBlue} href="https://www.youtube.com/playlist?list=PLf3cxVeAm439RsaHrGACExl3o060pM7W2" target="_blank">
          Mehmet Pekcan
        </Link>
        's youtube education
      </div>
    </footer>
  );
}

export default Footer;
