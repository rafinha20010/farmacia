"use client";
import { useState } from "react";
import Link from "next/link";
import shared from "./shared.module.css";
import styles from "./atendimento.module.css";

const faq = [
  { q: "Preciso de receita para comprar?", a: "Depende do medicamento. Alguns exigem prescrição médica. Nossos farmacêuticos podem orientar sobre quais medicamentos precisam de receita." },
  { q: "Vocês entregam em todo o Brasil?", a: "Sim! Entregamos para todo território nacional. O prazo varia de acordo com a sua localização." },
  { q: "Como funciona a troca ou devolução?", a: "Produtos com problemas de fabricação podem ser trocados em até 30 dias. Entre em contato com nosso suporte." },
  { q: "Os farmacêuticos estão disponíveis 24h?", a: "Sim! Nosso time de farmacêuticos está disponível 24 horas por dia, 7 dias por semana para atendimento online." },
];

const farmaceuticos = [
  { name: "Dra. Ana Lima", specialty: "Farmacêutica Clínica", status: "online", emoji: "👩‍⚕️", rating: "4.9" },
  { name: "Dr. Carlos Souza", specialty: "Farmacêutico Industrial", status: "online", emoji: "👨‍⚕️", rating: "4.8" },
  { name: "Dra. Maria Costa", specialty: "Farmacêutica Hospitalar", status: "busy", emoji: "👩‍💼", rating: "5.0" },
];

export default function Atendimento() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! 👋 Sou o assistente da Farmácia Online. Como posso te ajudar hoje?" },
    { from: "bot", text: "Você pode me perguntar sobre medicamentos, prescrições, ou solicitar falar com um farmacêutico." },
  ]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sendMessage = () => {
    if (!message.trim()) return;
    const newMessages = [...messages, { from: "user", text: message }];
    setMessages(newMessages);
    setMessage("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: "Obrigado pela mensagem! Um farmacêutico entrará em contato em breve. Se for urgente, ligue para 0800-123-4567." }]);
    }, 800);
  };

  return (
    <div className={shared.pageWrapper}>
      <nav className={shared.topbar}>
        <div className={shared.topbarLogo}>🏥 Farmácia Online</div>
        <div className={shared.topbarNav}>
          <Link href="/" className={shared.topbarLink}>Início</Link>
          <Link href="/medicamentos" className={shared.topbarLink}>Medicamentos</Link>
          <Link href="/ofertas" className={shared.topbarLink}>Ofertas</Link>
          <Link href="/atendimento" className={`${shared.topbarLink} ${shared.topbarLinkActive}`}>Atendimento</Link>
        </div>
      </nav>

      <div className={shared.content}>
        <div className={styles.heroBanner}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>💬 Online 24/7</div>
            <h1 className={styles.heroTitle}>Atendimento<br />Online</h1>
            <p className={styles.heroDesc}>Fale com nossos farmacêuticos certificados a qualquer hora. Tire suas dúvidas sobre medicamentos, doses e muito mais.</p>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>24/7</span>
                <span className={styles.heroStatLabel}>Disponível</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>&lt;2min</span>
                <span className={styles.heroStatLabel}>Resposta média</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>4.9★</span>
                <span className={styles.heroStatLabel}>Avaliação</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroEmojis}>
              <span>💬</span>
              <span>👨‍⚕️</span>
              <span>💊</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Chat */}
          <div className={styles.chatSection}>
            <div className={styles.chatHeader}>
              <div className={styles.chatHeaderLeft}>
                <div className={styles.chatAvatar}>🤖</div>
                <div>
                  <div className={styles.chatName}>Assistente Farmacêutico</div>
                  <div className={styles.chatStatus}><span className={styles.dot} />Online agora</div>
                </div>
              </div>
              <button className={styles.chatCall}>📞 Ligar</button>
            </div>

            <div className={styles.chatMessages}>
              {messages.map((msg, i) => (
                <div key={i} className={`${styles.msg} ${msg.from === "user" ? styles.msgUser : styles.msgBot}`}>
                  {msg.from === "bot" && <span className={styles.msgAvatar}>🤖</span>}
                  <div className={styles.msgBubble}>{msg.text}</div>
                </div>
              ))}
            </div>

            <div className={styles.chatInput}>
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendMessage()}
                placeholder="Digite sua mensagem..."
                className={styles.chatField}
              />
              <button onClick={sendMessage} className={styles.chatSend}>➤</button>
            </div>
          </div>

          {/* Right column */}
          <div className={styles.rightCol}>
            {/* Farmacêuticos */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>👩‍⚕️ Farmacêuticos Disponíveis</h3>
              <div className={styles.pharmList}>
                {farmaceuticos.map((f, i) => (
                  <div key={i} className={styles.pharmCard}>
                    <div className={styles.pharmEmoji}>{f.emoji}</div>
                    <div className={styles.pharmInfo}>
                      <div className={styles.pharmName}>{f.name}</div>
                      <div className={styles.pharmSpec}>{f.specialty}</div>
                      <div className={styles.pharmRating}>★ {f.rating}</div>
                    </div>
                    <div className={`${styles.pharmStatus} ${f.status === "online" ? styles.pharmOnline : styles.pharmBusy}`}>
                      {f.status === "online" ? "● Disponível" : "● Ocupado"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>❓ Perguntas Frequentes</h3>
              <div className={styles.faqList}>
                {faq.map((item, i) => (
                  <div key={i} className={styles.faqItem}>
                    <button
                      className={styles.faqQuestion}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.faqChevron}>{openFaq === i ? "▲" : "▼"}</span>
                    </button>
                    {openFaq === i && <p className={styles.faqAnswer}>{item.a}</p>}
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency */}
            <div className={styles.emergCard}>
              <div className={styles.emergIcon}>🚨</div>
              <div>
                <div className={styles.emergTitle}>Emergência?</div>
                <div className={styles.emergDesc}>Ligue imediatamente para o SAMU</div>
              </div>
              <a href="tel:192" className={styles.emergBtn}>Ligar 192</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
