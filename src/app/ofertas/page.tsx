"use client";
import Link from "next/link";
import shared from "./shared.module.css";
import styles from "./ofertas.module.css";

const ofertas = [
  { name: "Dipirona 500mg", original: "R$35,00", promo: "R$25,30", discount: "28%", emoji: "💊", color: "#fff3e0", tag: "Dor & Febre" },
  { name: "Vitamina C 1g", original: "R$28,00", promo: "R$18,90", discount: "32%", emoji: "🍊", color: "#fff8e1", tag: "Vitaminas" },
  { name: "Paracetamol 750mg", original: "R$22,00", promo: "R$14,50", discount: "34%", emoji: "🟡", color: "#fce4ec", tag: "Dor & Febre" },
  { name: "Loratadina 10mg", original: "R$25,00", promo: "R$16,70", discount: "33%", emoji: "🌿", color: "#e0f7fa", tag: "Alergia" },
  { name: "Omeprazol 20mg", original: "R$19,00", promo: "R$12,90", discount: "32%", emoji: "💙", color: "#f3e5f5", tag: "Digestivo" },
  { name: "Ibuprofeno 400mg", original: "R$30,00", promo: "R$22,50", discount: "25%", emoji: "🔵", color: "#e3f2fd", tag: "Anti-inflamatório" },
  { name: "Probiótico 60caps", original: "R$65,00", promo: "R$44,90", discount: "31%", emoji: "🧬", color: "#e8f5e9", tag: "Saúde Intestinal" },
  { name: "Colágeno Hidrolisado", original: "R$89,00", promo: "R$59,90", discount: "33%", emoji: "✨", color: "#fce4ec", tag: "Beleza & Saúde" },
];

export default function Ofertas() {
  return (
    <div className={shared.pageWrapper}>
      <nav className={shared.topbar}>
        <div className={shared.topbarLogo}>🏥 Farmácia Online</div>
        <div className={shared.topbarNav}>
          <Link href="/" className={shared.topbarLink}>Início</Link>
          <Link href="/medicamentos" className={shared.topbarLink}>Medicamentos</Link>
          <Link href="/ofertas" className={`${shared.topbarLink} ${shared.topbarLinkActive}`}>Ofertas</Link>
          <Link href="/atendimento" className={shared.topbarLink}>Atendimento</Link>
        </div>
      </nav>

      <div className={shared.content}>
        {/* Hero Banner */}
        <div className={styles.heroBanner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>⏰ Só hoje!</div>
            <h1 className={styles.heroTitle}>Ofertas do Dia</h1>
            <p className={styles.heroDesc}>Aproveite descontos imperdíveis em medicamentos e produtos de saúde selecionados. Válido por tempo limitado!</p>
            <div className={styles.countdown}>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>07</span>
                <span className={styles.countdownLabel}>horas</span>
              </div>
              <span className={styles.countdownSep}>:</span>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>32</span>
                <span className={styles.countdownLabel}>min</span>
              </div>
              <span className={styles.countdownSep}>:</span>
              <div className={styles.countdownItem}>
                <span className={styles.countdownNum}>18</span>
                <span className={styles.countdownLabel}>seg</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.discountBadge}>Até<br /><strong>34%</strong><br />OFF</div>
          </div>
        </div>

        <div className={shared.alertBanner}>
          <span>⚠️</span>
          <strong>ATENÇÃO:</strong> Consulte sempre um médico antes de comprar medicamentos.
        </div>

        <div className={shared.pageHeader}>
          <h2 className={shared.pageTitle}>🔥 Produtos em Oferta</h2>
          <p className={shared.pageSubtitle}>{ofertas.length} produtos com desconto hoje</p>
        </div>

        <div className={styles.grid}>
          {ofertas.map((item, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.discountTag}>-{item.discount}</div>
              <div className={styles.cardImg} style={{ background: item.color }}>
                <span className={styles.cardEmoji}>{item.emoji}</span>
              </div>
              <div className={styles.cardCategory}>{item.tag}</div>
              <h3 className={styles.cardName}>{item.name}</h3>
              <div className={styles.cardPrices}>
                <span className={styles.cardOriginal}>{item.original}</span>
                <span className={styles.cardPromo}>{item.promo}</span>
              </div>
              <button className={styles.cardBtn}>Adicionar ao carrinho</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
