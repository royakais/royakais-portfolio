import React from "react";
import {
    Code2, Briefcase, Heart, GraduationCap, Camera, Lightbulb,
    Globe, GitBranch, Figma, Terminal, Box
} from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
    const stack = [
        { name: "HTML", icon: <Globe size={18} /> },
        { name: "CSS", icon: <Globe size={18} /> },
        { name: "JavaScript", icon: <Code2 size={18} /> },
        { name: "React", icon: <Globe size={18} /> },
        { name: "Next.js", icon: <Globe size={18} /> },
        { name: "Java", icon: <Code2 size={18} /> },
        { name: "C++", icon: <Code2 size={18} /> },
        { name: "Git", icon: <GitBranch size={18} /> },
        { name: "Figma", icon: <Figma size={18} /> },
        { name: "JavaFX", icon: <Box size={18} /> },
    ];

    return (
        <section className={styles.home}>
            {/* HERO SECTION */}
            <div className={styles.heroSection}>
                <h1 className={styles.name}>About <span className={styles.firstName}>Me</span></h1>
                <div className={styles.underline}></div>
                <p className={styles.intro}>
                    Hey, I'm <span className={styles.highlight}>Roya Fady Kais</span>, a Computer Science student and
                    frontend developer who loves building clean, responsive websites that look amazing and work smoothly.
                </p>

                <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                        <div className={styles.statNumber}>3+</div>
                        <div className={styles.statLabel}>Years Coding</div>
                    </div>
                    <div className={styles.statBox}>
                        <div className={styles.statNumber}>7+</div>
                        <div className={styles.statLabel}>Technologies</div>
                    </div>

                </div>
            </div>

            {/* WHAT I DO */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>What I <span className={styles.firstName}>Do</span></h2>
                <div className={styles.underline}></div>

                <div className={styles.cardsGrid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Code2 size={32} />
                        </div>
                        <h3>Frontend Development</h3>
                        <p>Building modern web applications with Next.js and React, focusing on clean code and seamless user experiences.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Briefcase size={32} />
                        </div>
                        <h3>Project Management</h3>
                        <p>Turning ideas into tangible results.</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Camera size={32} />
                        </div>
                        <h3>Content Creation</h3>
                        <p>Minimalist cinematographer creating authentic moments.</p>
                    </div>
                </div>
            </div>

            {/* TECH STACK */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Tech <span className={styles.firstName}>Stack</span></h2>
                <div className={styles.underline}></div>

                <div className={styles.stackGrid}>
                    {stack.map((item) => (
                        <div key={item.name} className={styles.stackItem}>
                            <span className={styles.stackIcon}>{item.icon}</span>
                            <span className={styles.stackName}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* BEYOND CODE */}
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Beyond <span className={styles.firstName}>Code</span></h2>
                <div className={styles.underline}></div>

                <div className={styles.beyondGrid}>
                    <div className={styles.beyondCard}>
                        <Heart size={36} className={styles.beyondIcon} />
                        <h3>Lifestyle</h3>
                        <p>
                            Brewing specialty coffee, hiking trails, capturing minimalist films,
                            and chasing authentic sunsets.
                        </p>
                    </div>

                    <div className={styles.beyondCard}>
                        <Lightbulb size={36} className={styles.beyondIcon} />
                        <h3>Philosophy</h3>
                        <p>
                            Passionate about deep conversations, meaningful stories, and transforming
                            creative ideas into reality through code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}