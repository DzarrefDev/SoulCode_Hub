import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.orbit} aria-hidden="true">
        <div className={styles.glow} />
        <div className={styles.ringOuter}>
          <span className={styles.dotOuter} />
        </div>
        <div className={styles.ringInner}>
          <span className={styles.dotInner} />
        </div>
        <div className={styles.core} />
      </div>

      <h1 className={styles.title}>SoulCode</h1>
      <h2 className={styles.title}>The HUB</h2>
      <p className={styles.subtitle}>
        experiencias, sobre nós, quem somos, contatos
        
      </p>
      <p className={styles.subtitle}>reunidos em um só lugar.</p>

      <div className={styles.actions}>
        <Link href="/projetos" className={styles.primary}>
          Ver projetos
        </Link>
        <Link href="/contato" className={styles.secondary}>
          Entrar em contato
        </Link>
      </div>
    </section>
  );
}