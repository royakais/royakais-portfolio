import { Github, Linkedin, Mail } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>


                <div className={styles.socials}>
                    <a
                        href="https://www.linkedin.com/in/royakais/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={24} />
                    </a>

                    <a
                        href="https://github.com/royakais"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.socialLink}
                        aria-label="GitHub"
                    >
                        <Github size={24} />
                    </a>

                    <a
                        href="mailto:kaisroya@gmail.com"
                        className={styles.socialLink}
                        aria-label="Email"
                    >
                        <Mail size={24} />
                    </a>
                </div>

                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Roya Kais. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
