"use client";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* LEFT PANEL */}
      <div className={styles.heroPanel}>
        <div className={styles.heroBadge}>🏥 #1 Farmácia Digital</div>
        <h1 className={styles.heroTitle}>Farmácia<br />Online</h1>
        <p className={styles.heroSubtitle}>
          Sua saúde em primeiro lugar,<br />entrega rápida e segura
        </p>

        {/* Illustration */}
        <div className={styles.illustration}>
          <div className={styles.illustrationBg} />
          <div className={styles.shelves}>
            <div className={styles.shelf} />
            <div className={styles.shelf} />
          </div>
          <div className={styles.counter}>
            <div className={styles.pharmacistDesk} />
          </div>
          <div className={styles.plusSign}>+</div>
          {/* People silhouettes */}
          <div className={styles.people}>
            <div className={`${styles.person} ${styles.personWhite}`} />
            <div className={`${styles.person} ${styles.personTeal}`} />
            <div className={`${styles.person} ${styles.personElder}`} />
          </div>
        </div>

        {/* Feature cards */}
        <div className={styles.featureCards}>
          <Link href="/ofertas" className={styles.featureCard}>
            <span className={styles.featureIcon}>🕐</span>
            <span className={styles.featureLabel}>Ofertas do Dia</span>
          </Link>
          <Link href="/retirada" className={styles.featureCard}>
            <span className={styles.featureIcon}>📍</span>
            <div>
              <span className={styles.featureLabel}>Retire da Loja</span>
              <span className={styles.featureHint}>Compre online e tire grátis</span>
            </div>
          </Link>
          <Link href="/atendimento" className={styles.featureCard}>
            <span className={styles.featureIcon}>💬</span>
            <div>
              <span className={styles.featureLabel}>Atendimento Online</span>
              <span className={styles.featureHint}>Fale com Farmacêuticos 24/7</span>
            </div>
          </Link>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className={styles.shopPanel}>
        {/* Alert */}
        <div className={styles.alertBanner}>
          <span className={styles.alertIcon}>⚠️</span>
          <strong>ATENÇÃO:</strong> Consulte sempre um médico para comprar um medicamento.
        </div>

        <div className={styles.shopHeader}>
          <h2 className={styles.shopTitle}>Medicamentos</h2>
          <Link href="/medicamentos" className={styles.shopViewAll}>Ver todos →</Link>
        </div>

        {/* Search */}
        <div className={styles.searchRow}>
          <div className={styles.searchBox}>
            <span className={styles.searchIcon}>🔍</span>
            <input
              type="text"
              placeholder="Buscar Medicamento"
              className={styles.searchInput}
            />
          </div>
          <button className={styles.searchBtn}>Pesquisar</button>
        </div>

        {/* Product Grid */}
        <div className={styles.productGrid}>
          {[
            { name: "Dipirona 500mg", price: "R$25,30", rating: 4, tag: "Mais vendido", color: "#fff3e0" },
            { name: "Amoxicilina 500mg", price: "R$18,13", rating: 4, tag: "Prescrição", color: "#e8f5e9" },
            { name: "Paracetamol 500mg", price: "R$18,13", rating: 4, tag: "Febre", color: "#fce4ec" },
            { name: "Ibuprofeno 400mg", price: "R$22,50", rating: 5, tag: "Anti-inflamatório", color: "#e3f2fd" },
            { name: "Omeprazol 20mg", price: "R$14,90", rating: 5, tag: "Estômago", color: "#f3e5f5" },
            { name: "Loratadina 10mg", price: "R$16,70", rating: 4, tag: "Alergia", color: "#e0f7fa" },
          ].map((product, i) => (
            <Link href="/medicamentos" key={i} className={styles.productCard}>
              <div className={styles.productImg} style={{ background: product.color }}>
                <div className={styles.productImgInner}>💊</div>
              </div>
              <div className={styles.productTag}>{product.tag}</div>
              <h3 className={styles.productName}>{product.name}</h3>
              <div className={styles.productRating}>
                {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}
              </div>
              <div className={styles.productPrice}>
                <span className={styles.productPriceLabel}>Por</span>
                <span className={styles.productPriceValue}>{product.price}</span>
              </div>
              <button className={styles.productBtn}>Adicionar</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
