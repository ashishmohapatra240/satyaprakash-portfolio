import React from 'react';
import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/path-to-your-image.jpg"
                        alt="Profile"
                        width={500}
                        height={600}
                        className={styles.profileImage}
                        priority
                    />
                </div>
                <div className={styles.textContent}>
                    <h2>About Me</h2>
                    <p>Being a self-taught designer, I relate with people struggling and being clueless in this design career.</p>
                </div>
            </div>
        </section>
    );
};

export default About; 