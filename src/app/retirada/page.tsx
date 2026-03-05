"use client";
import Link from "next/link";
import shared from "./shared.module.css";
import styles from "./retirada.module.css";

const lojas = [
  {
    name: "Farmácia Online - Centro",
    address: "Rua das Flores, 123 - Centro",
    city: "São Paulo, SP",
    phone: "(11) 3333-4444",
    hours: "Seg-Sex: 8h–22h | Sáb-Dom: 9h–20h",
    status: "Aberta agora",
    distance: "1,2 km",
    emoji: "🏥",
    color: "#e0f7fa",
  },
  {
    name: "Farmácia Online - Pinheiros",
    address: "Av. Rebouças, 456 - Pinheiros",
    city: "São Paulo, SP",
    phone: "(11) 3333-5555",
    hours: "Seg-Sex: 7h–23h | Sáb-Dom: 8h–22h",
    status: "Aberta agora",
    distance: "3,5 km",
    emoji: "🏪",
    color: "#e8f5e9",
  },
  {
    name: "Farmácia Online - Mooca",
    address: "Rua da Mooca, 789 - Mooca",
    city: "São Paulo, SP",
    phone: "(11) 3333-6666",
    hours: "Seg-Sex: 8h–21h | Sáb: 9h–18h",
    status: "Fechada",
    distance: "5,8 km",
    emoji: "🏬",
    color: "#fce4ec",
  },
];

const steps = [
  { icon: "🛒", title: "Escolha os produtos", desc: "Selecione os itens no nosso site ou app" },
  { icon: "🏥", title: "Escolha a loja", desc: "Selecione a unidade mais próxima de você" },
  { icon: "✅", title: "Aguarde a confirmação", desc: "Você receberá um SMS ou email quando estiver pronto" },
  { icon: "🎉", title: "Retire gratuitamente", desc: "Leve um documento e retire sem fila dedicada" },
];

export default function Retirada() {
  return (
    <div className={shared.pageWrapper}>
      <nav className={shared.topbar}>
        <div className={shared.topbarLogo}>🏥 Farmácia Online</div>
        <div className={shared.topbarNav}>
          <Link href="/" className={shared.topbarLink}>Início</Link>
          <Link href="/medicamentos" className={shared.topbarLink}>Medicamentos</Link>
          <Link href="/ofertas" className={shared.topbarLink}>Ofertas</Link>
          <Link href="/atendimento" className={shared.topbarLink}>Atendimento</Link>
        </div>
      </nav>

      <div className={shared.content}>
        <div className={styles.heroBanner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>📍 Frete Zero</div>
            <h1 className={styles.heroTitle}>Retire na Loja<br />Gratuitamente</h1>
            <p className={styles.heroDesc}>Compre online com a conveniência do digital e retire sem fila em qualquer uma das nossas unidades. Sem taxas, sem surpresas!</p>
            <div className={styles.heroBenefits}>
              <div className={styles.heroBenefit}><span>✓</span> Sem custo de entrega</div>
              <div className={styles.heroBenefit}><span>✓</span> Pronto em até 2h</div>
              <div className={styles.heroBenefit}><span>✓</span> Fila exclusiva</div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroIllustration}>
              <span className={styles.heroEmoji}>📦</span>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Como funciona?</h2>
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepNum}>{i + 1}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {i < steps.length - 1 && <div className={styles.stepArrow}>→</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Stores */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Nossas Unidades</h2>

          <div className={styles.searchBox}>
            <span>🔍</span>
            <input type="text" placeholder="Buscar por bairro, rua ou CEP..." className={styles.searchInput} />
            <button className={styles.searchBtn}>Buscar</button>
          </div>

          <div className={styles.lojaGrid}>
            {lojas.map((loja, i) => (
              <div key={i} className={styles.lojaCard}>
                <div className={styles.lojaHeader} style={{ background: loja.color }}>
                  <span className={styles.lojaEmoji}>{loja.emoji}</span>
                  <span className={`${styles.lojaStatus} ${loja.status === "Aberta agora" ? styles.statusOpen : styles.statusClosed}`}>
                    {loja.status === "Aberta agora" ? "● " : "○ "}{loja.status}
                  </span>
                </div>
                <div className={styles.lojaBody}>
                  <h3 className={styles.lojaName}>{loja.name}</h3>
                  <div className={styles.lojaInfo}>
                    <span>📍 {loja.address}</span>
                    <span>🏙️ {loja.city}</span>
                    <span>📞 {loja.phone}</span>
                    <span>🕐 {loja.hours}</span>
                    <span>📏 {loja.distance} de distância</span>
                  </div>
                  <button className={styles.lojaBtn} disabled={loja.status !== "Aberta agora"}>
                    {loja.status === "Aberta agora" ? "Selecionar esta loja →" : "Loja fechada"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
