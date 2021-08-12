// import Link from 'next/link'
import styles from './Topics.module.css'

function Component() {
    return (
        <section id={styles.marquees}>
            <div className={`${styles["slider"]} ${styles["mode"]}`}>
                <div>
                    <button className={`${styles["topic"]} ${styles["active"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                </div>
                <div>
                    <button className={`${styles["topic"]} ${styles["active"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                    <button className={`${styles["topic"]}`}>Placeholder Topic</button>
                </div>
            </div>
        </section>
    );
}

export default Component;