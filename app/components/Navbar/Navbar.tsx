"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <nav className={styles.navbar}>
            {/* LOGO */}
            <Link href="/" className={styles.logo}>
                <span className={styles.logoR}>R</span>
                <span className={styles.logoK}>K</span>
            </Link>

            {/* NAV LINKS */}
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
                <li>
                    <Link
                        href="/"
                        className={isActive("/") ? styles.activeLink : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className={isActive("/about") ? styles.activeLink : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/projects"
                        className={isActive("/projects") ? styles.activeLink : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={isActive("/contact") ? styles.activeLink : ""}
                        onClick={() => setMenuOpen(false)}
                    >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* HAMBURGER ICON */}
            <div
                className={styles.menuIcon}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
        </nav>
    );
}
