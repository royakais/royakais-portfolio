"use client";

import Link from "next/link";
import { Github, Linkedin, GraduationCap, Layout, Settings, Rocket } from "lucide-react";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <section id="home" className={styles.home}>
            {/* HERO SECTION */}
            <div className={styles.heroContainer}>
                <div className={styles.imageWrapper}>
                    <img
                        src="/profile.jpeg"
                        alt="Roya Kais"
                        className={styles.profileImage}
                    />
                </div>

                <div className={styles.text}>
                    <h1 className={styles.name}>
                        <span className={styles.firstName}>Roya</span>{" "}
                        <span className={styles.lastName}>Kais</span>
                    </h1>
                    <h2 className={styles.role}>
                        Advanced Frontend Developer | Aspiring Full-Stack Developer
                    </h2>
                    <p className={styles.specialization}>
                        I build modern, responsive web applications using{" "}
                        <span>Next.js</span>, <span>React</span>, and <span>modern CSS</span>,
                        with a focus on clean code and excellent user experience.
                    </p>

                    <div className={styles.heroActions}>
                        <Link href="/projects" className={styles.viewBtn}>
                            View Projects
                        </Link>

                        <div className={styles.socialGroup}>
                            <a
                                href="https://www.linkedin.com/in/royakais/"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialLink}
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="https://github.com/royakais"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.socialLink}
                            >
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROFESSIONAL HIGHLIGHTS SECTION */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Professional Highlights</h2>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.boxes}>
                <div className={styles.box}>
                    <div className={styles.boxIcon}><GraduationCap size={32} /></div>
                    <h3>Education</h3>
                    <p>BSc in Computer Science</p>
                    <span className={styles.boxDate}>Fall 2026</span>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxIcon}><Layout size={32} /></div>
                    <h3>Frontend Focus</h3>
                    <p>Next.js · React · Tailwind</p>
                    <span className={styles.boxDate}>Modern Web UI</span>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxIcon}><Settings size={32} /></div>
                    <h3>Technical Skills</h3>
                    <p>HTML · CSS · JavaScript · Next.js · React · Java · JavaFX · MySQL</p>
                    <span className={styles.boxDate}>VS Code · Git · GitHub · Jira · Antigravity</span>
                </div>

                <div className={styles.box}>
                    <div className={styles.boxIcon}><Rocket size={32} /></div>
                    <h3>Builder Mindset</h3>
                    <p>Project-Based Learning</p>
                    <span className={styles.boxDate}>Always Improving</span>
                </div>
            </div>
        </section>
    );
}
