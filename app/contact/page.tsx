import { Mail, MessageCircle, Linkedin, Instagram, Twitter, ExternalLink } from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
    return (
        <main className={styles.home}>
            <div className={styles.contactWrapper}>
                <section className={styles.sectionHeader}>
                    <h1 className={styles.name}>Let's <span className={styles.firstName}>Connect</span></h1>
                    <div className={styles.underline}></div>
                    <p className={styles.specialization}>
                        I’m currently available for new projects and collaborations.
                        Choose your preferred way to reach out!
                    </p>
                </section>
                <div className={styles.socialSection}>
                    <p>follow my work on social media</p>
                    <div className={styles.socialBar}>
                        <a href="https://linkedin.com/in/royakais" target="_blank" className={styles.socialPill}>
                            <Linkedin size={20} />
                        </a>
                        <a href="https://instagram.com/roya.kais" target="_blank" className={styles.socialPill}>
                            <Instagram size={20} />
                        </a>
                        <a href="https://twitter.com/royafkais" target="_blank" className={styles.socialPill}>
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div className={styles.actionGrid}>
                    {/* Main Email Card */}
                    <a href="mailto:kaisroya@gmail.com" className={styles.mainCard}>
                        <div className={styles.iconCircle}>
                            <Mail size={32} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>Email Me</h3>
                            <p>kaisroya@gmail.com</p>
                        </div>
                        <ExternalLink className={styles.arrow} size={20} />
                    </a>

                    {/* WhatsApp Card */}
                    <a href="https://wa.me/96176751182" target="_blank" className={styles.mainCard}>
                        <div className={styles.iconCircle}>
                            <MessageCircle size={32} />
                        </div>
                        <div className={styles.cardContent}>
                            <h3>WhatsApp</h3>
                            <p>+961 76 751 182</p>
                        </div>
                        <ExternalLink className={styles.arrow} size={20} />
                    </a>
                </div>


            </div>
        </main>
    );
}