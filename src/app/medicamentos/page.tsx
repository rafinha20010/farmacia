"use client";
import { useState } from "react";
import Link from "next/link";
import shared from "../shared.module.css";
import styles from "./medicamentos.module.css";

const categorias = ["Todos", "Dor & Febre", "Antibióticos", "Vitaminas", "Digestivo", "Alergia", "Coração", "Diabetes"];

const medicamentos = [
  { name: "Dipirona 500mg", category: "Dor & Febre", price: "R$25,30", rating: 4, emoji: "💊", color: "#fff3e0", prescrição: false, estoque: true },
  { name: "Amoxicilina 500mg", category: "Antibióticos", price: "R$18,13", rating: 4, emoji: "🔵", color: "#e8f5e9", prescrição: true, estoque: true },
  { name: "Paracetamol 500mg", category: "Dor & Febre", price: "R$18,13", rating: 4, emoji: "🟡", color: "#fce4ec", prescrição: false, estoque: true },
  { name: "Ibuprofeno 400mg", category: "Dor & Febre", price: "R$22,50", rating: 5, emoji: "🟠", color: "#e3f2fd", prescrição: false, estoque: true },
  { name: "Vitamina D 1000UI", category: "Vitaminas", price: "R$32,90", rating: 5, emoji: "☀️", color: "#fff9c4", prescrição: false, estoque: true },
  { name: "Omeprazol 20mg", category: "Digestivo", price: "R$14,90", rating: 5, emoji: "💙", color: "#f3e5f5", prescrição: false, estoque: true },
  { name: "Loratadina 10mg", category: "Alergia", price: "R$16,70", rating: 4, emoji: "🌿", color: "#e0f7fa", prescrição: false, estoque: true },
  { name: "Metformina 500mg", category: "Diabetes", price: "R$8,50", rating: 4, emoji: "💚", color: "#e8f5e9", prescrição: true, estoque: false },
  { name: "Atenolol 25mg", category: "Coração", price: "R$12,20", rating: 5, emoji: "❤️", color: "#fce4ec", prescrição: true, estoque: true },
  { name: "Vitamina C 1g", category: "Vitaminas", price: "R$18,90", rating: 5, emoji: "🍊", color: "#fff8e1", prescrição: false, estoque: true },
  { name: "Pantoprazol 40mg", category: "Digestivo", price: "R$19,90", rating: 4, emoji: "🟣", color: "#ede7f6", prescrição: false, estoque: true },
  { name: "Cetirizina 10mg", category: "Alergia", price: "R$14,50", rating: 4, emoji: "🌸", color: "#fce4ec", prescrição: false, estoque: false },
];

export default function Medicamentos() {
  const [cat, setCat] = useState("Todos");
  const [search, setSearch] = useState("");

  const filtered = medicamentos.filter(m => {
    const matchCat = cat === "Todos" || m.category === cat;
    const matchSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.category.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className={shared.pageWrapper}>
      <nav className={shared.topbar}>
        <div className={shared.topbarLogo}>🏥 Farmácia Online</div>
        <div className={shared.topbarNav}>
          <Link href="/" className={shared.topbarLink}>Início</Link>
          <Link href="/medicamentos" className={`${shared.topbarLink} ${shared.topbarLinkActive}`}>Medicamentos</Link>
          <Link href="/ofertas" className={shared.topbarLink}>Ofertas</Link>
          <Link href="/atendimento" className={shared.topbarLink}>Atendimento</Link>
        </div>
      </nav>

      <div className={shared.content}>
        <div className={shared.alertBanner}>
          <span>⚠️</span>
          <strong>ATENÇÃO:</strong> Consulte sempre um médico antes de comprar medicamentos. Medicamentos com <strong>🔒</strong> exigem prescrição.
        </div>

        <div className={shared.pageHeader}>
          <h1 className={shared.pageTitle}>Medicamentos</h1>
          <p className={shared.pageSubtitle}>{filtered.length} produtos encontrados</p>
        </div>

        {/* Search */}
        <div className={styles.searchBar}>
          <div className={styles.searchBox}>
            <span>🔍</span>
            <input
              type="text"
              placeholder="Buscar por nome ou categoria..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            {search && <button onClick={() => setSearch("")} className={styles.clearBtn}>✕</button>}
          </div>
        </div>

        {/* Categories */}
        <div className={styles.catBar}>
          {categorias.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`${styles.catBtn} ${cat === c ? styles.catActive : ""}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <span className={styles.emptyEmoji}>🔍</span>
            <h3>Nenhum medicamento encontrado</h3>
            <p>Tente buscar por outro nome ou categoria</p>
            <button onClick={() => { setSearch(""); setCat("Todos"); }} className={styles.emptyBtn}>
              Limpar filtros
            </button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((med, i) => (
              <div key={i} className={`${styles.card} ${!med.estoque ? styles.cardOutOfStock : ""}`}>
                {!med.estoque && <div className={styles.outOfStockOverlay}>Sem estoque</div>}
                {med.prescrição && (
                  <div className={styles.prescTag}>🔒 Prescrição</div>
                )}
                <div className={styles.cardImg} style={{ background: med.color }}>
                  <span className={styles.cardEmoji}>{med.emoji}</span>
                </div>
                <div className={styles.cardCategory}>{med.category}</div>
                <h3 className={styles.cardName}>{med.name}</h3>
                <div className={styles.cardRating}>
                  {"★".repeat(med.rating)}{"☆".repeat(5 - med.rating)}
                </div>
                <div className={styles.cardPrice}>{med.price}</div>
                <button className={styles.cardBtn} disabled={!med.estoque}>
                  {med.estoque ? "Adicionar ao carrinho" : "Indisponível"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
