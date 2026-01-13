// app/projects/page.tsx
import { Github, ExternalLink, Code2 } from "lucide-react";
import styles from "./projects.module.css";
import Image from "next/image";

const projects = [
    {
        title: "Vee Coffee Shop DBMS",
        description:
            "A full-featured database management system for coffee shop operations.",
        tags: ["Java", "MySQL", "Database"],
        github: "https://github.com/royakais/DBMS-VeeCoffeeShop",
        link: null,
        image: "/images/vee.png",
    },
    {
        title: "BNF Interpreter",
        description: "A parser/interpreter built for context-free grammar using Java.",
        tags: ["Java", "Compiler Design"],
        github: "https://github.com/royakais/BNF-Interpreter",
        link: null,
        image: "/images/BNF.png",
    },
    {
        title: "Advanced Calculator",
        description:
            "A feature-rich calculator application with advanced mathematical operations.",
        tags: ["Java", "JavaFX", "OOP"],
        github: "https://github.com/royakais/Advanced-Calculator-",
        link: null,
        image: "/images/Javafx.png",
    },
    {
        title: "BidZone",
        description: "An online bidding platform with modern UI and interactive features. Built during my internship with Techtalks with my team members",
        tags: ["Next.js", "Vercel", "full-stack"],
        github: null,
        link: "https://bid-zone-three.vercel.app/",
        image: "/images/bidzone.jpeg",
    },
    {
        title: "Frontend Website",
        description: "A creative web project showcasing UI design and animations.",
        tags: ["React", "CSS", "uni coursework"],
        github: "https://github.com/royakais/marielie-aya-roya-web",
        link: "https://marielie-aya-roya-web.netlify.app/",
        image: null,
    },
];

export default function ProjectsPage() {
    return (
        <main className={styles.home}>
            {/* Section Header */}
            <section className={styles.sectionHeader}>
                <h1 className={styles.sectionTitle}>
                    Featured <span className={styles.firstName}>Works</span>
                </h1>
                <div className={styles.underline}></div>
                <p className={styles.specialization}>
                    A collection of projects where I blend design with functional code.
                </p>
            </section>

            {/* Projects Grid */}
            <div className={styles.projectGrid}>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={styles.projectCard}
                        style={{ "--card-index": index } as React.CSSProperties}
                    >
                        <div className={styles.projectImage}>
                            {project.image ? (
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            ) : (
                                <Code2 size={48} strokeWidth={1} />
                            )}
                        </div>

                        <div className={styles.projectContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className={styles.tagRow}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className={styles.projectLinks}>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.linkIcon}
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.linkIcon}
                                >
                                    <Github size={16} /> Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
