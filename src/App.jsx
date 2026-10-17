import React, { useState } from "react";
import {
  ArrowDownRight, ArrowRight, CalendarDays, Check, CheckCircle2, ChevronDown,
  Clock3, Gamepad2, Headphones, Menu, Monitor, Mouse, ShieldCheck, Sparkles,
  Trophy, X, Zap
} from "lucide-react";
import "./App.css";

const computers = [
  { id: 1, name: "GAMEBAR PRO 01", gpu: "RTX 4070", cpu: "Ryzen 7 7800X3D", ram: "32 GB", status: "free", tag: "POPULAR" },
  { id: 2, name: "GAMEBAR PRO 02", gpu: "RTX 4070", cpu: "Ryzen 7 7800X3D", ram: "32 GB", status: "free", tag: "" },
  { id: 3, name: "GAMEBAR PRO 03", gpu: "RTX 4060 Ti", cpu: "Intel i5-13400F", ram: "32 GB", status: "busy", tag: "" },
  { id: 4, name: "GAMEBAR PRO 04", gpu: "RTX 4060 Ti", cpu: "Intel i5-13400F", ram: "16 GB", status: "free", tag: "" },
  { id: 5, name: "GAMEBAR PRO 05", gpu: "RTX 4070 SUPER", cpu: "Ryzen 7 7700X", ram: "32 GB", status: "free", tag: "POWER" },
  { id: 6, name: "GAMEBAR PRO 06", gpu: "RTX 4060", cpu: "Ryzen 5 7600", ram: "16 GB", status: "busy", tag: "" },
];

const games = [
  { name: "Counter-Strike 2", genre: "TACTICAL FPS", short: "CS2", color: "cs" },
  { name: "VALORANT", genre: "COMPETITIVE FPS", short: "V", color: "valo" },
  { name: "PUBG: Battlegrounds", genre: "BATTLE ROYALE", short: "PUBG", color: "pubg" },
  { name: "GTA V", genre: "OPEN WORLD", short: "GTA", color: "gta" },
  { name: "Dota 2", genre: "MOBA", short: "DOTA", color: "dota" },
  { name: "Fortnite", genre: "BATTLE ROYALE", short: "FN", color: "fortnite" },
];

export default function App() {
  const [selectedPC, setSelectedPC] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState("15:00");
  const [hours, setHours] = useState("2");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pricePerHour = 300;

  function openBooking(pc) {
    if (pc.status !== "free") return;
    setSelectedPC(pc);
    setName("");
    setPhone("");
  }

  function confirmBooking(event) {
    event.preventDefault();
    if (!selectedPC) return;
    setSuccess({
      name,
      pc: selectedPC.name,
      date,
      time,
      hours,
      total: Number(hours) * pricePerHour,
    });
    setSelectedPC(null);
  }

  return (
    <div className="site-shell">
      <header className="header">
        <a className="brand" href="#home" aria-label="GAMEBAR home">
          <span className="brand-mark"><Gamepad2 size={23} strokeWidth={2.5} /></span>
          <span>GAME<span className="brand-light">BAR</span><small>GAMING CLUB</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Открыть меню">
          {mobileMenu ? <X /> : <Menu />}
        </button>
        <nav className={mobileMenu ? "nav nav-open" : "nav"}>
          <a href="#computers" onClick={() => setMobileMenu(false)}>Компьютеры</a>
          <a href="#games" onClick={() => setMobileMenu(false)}>Игры</a>
          <a href="#prices" onClick={() => setMobileMenu(false)}>Цены</a>
          <a href="#about" onClick={() => setMobileMenu(false)}>О клубе</a>
        </nav>
        <a className="header-cta" href="#computers">Забронировать <ArrowRight size={16} /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="hero-content">
            <div className="eyebrow"><span className="live-dot" /> КОМПЬЮТЕРНЫЙ КЛУБ · БИШКЕК</div>
            <h1>ТВОЯ ИГРА.<br /><span>ТВОИ ПРАВИЛА.</span></h1>
            <p className="hero-copy">Мощные ПК, атмосфера победы и твоя команда рядом. Занимай место и заходи в игру.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#computers">Выбрать компьютер <ArrowDownRight size={18} /></a>
              <a className="btn btn-ghost" href="#prices">Посмотреть цены</a>
            </div>
            <div className="hero-stats">
              <div><strong>300 <small>сом</small></strong><span>за час игры</span></div>
              <div><strong>240 <small>Hz</small></strong><span>игровые мониторы</span></div>
              <div><strong>6 <small>ПК</small></strong><span>готовы к игре</span></div>
            </div>
          </div>
          <div className="hero-visual" aria-label="Иллюстрация игрового компьютера">
            <div className="visual-grid" />
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="pc-tower">
              <div className="tower-top" />
              <div className="tower-glass">
                <div className="fan fan-one"><span /></div><div className="fan fan-two"><span /></div><div className="fan fan-three"><span /></div>
                <div className="gpu-line" />
              </div>
              <div className="tower-front"><div className="front-light" /><div className="front-light" /><div className="front-light" /></div>
              <div className="tower-base" />
            </div>
            <div className="monitor">
              <div className="monitor-screen"><span className="screen-logo">GB<span>_</span></span><span className="screen-caption">READY TO PLAY</span></div>
              <div className="monitor-stand" />
            </div>
            <div className="floating-chip chip-top"><Zap size={15} /> LOW LATENCY</div>
            <div className="floating-chip chip-bottom"><span className="live-dot" /> SYSTEM ONLINE</div>
            <div className="hero-number">01<span> / 06</span></div>
          </div>
          <a className="scroll-cue" href="#computers"><span /> ЛИСТАЙ ВНИЗ</a>
        </section>

        <section className="trust-strip">
          <div><Zap size={18} /><span>Высокий FPS</span></div>
          <div><Monitor size={18} /><span>Игровые мониторы</span></div>
          <div><Headphones size={18} /><span>Периферия для побед</span></div>
          <div><ShieldCheck size={18} /><span>Комфортная зона</span></div>
        </section>

        <section className="section computers-section" id="computers">
          <div className="section-heading">
            <div><div className="eyebrow">ВЫБИРАЙ СВОЙ СЕТАП</div><h2>Игровые <span>станции.</span></h2></div>
            <p>Выбери свободный компьютер, укажи время и бронируй место онлайн.</p>
          </div>
          <div className="availability"><span className="live-dot" /> {computers.filter(pc => pc.status === "free").length} компьютера доступны сейчас <span className="availability-divider" /> <span className="status-dot busy-dot" /> {computers.filter(pc => pc.status === "busy").length} заняты</div>
          <div className="pc-grid">
            {computers.map((pc) => (
              <article className={`pc-card ${pc.status === "busy" ? "pc-busy" : ""}`} key={pc.id}>
                <div className="pc-card-top"><span className={pc.status === "free" ? "status-label" : "status-label status-label-busy"}><i />{pc.status === "free" ? "СВОБОДЕН" : "ЗАНЯТ"}</span>{pc.tag && <span className="pc-tag">{pc.tag}</span>}</div>
                <div className="pc-icon"><Monitor size={34} strokeWidth={1.4} /><span className="pc-icon-glow" /></div>
                <h3>{pc.name}</h3>
                <div className="specs"><div><span>Видеокарта</span><strong>{pc.gpu}</strong></div><div><span>Процессор</span><strong>{pc.cpu}</strong></div><div><span>Оперативная память</span><strong>{pc.ram}</strong></div></div>
                <div className="pc-card-bottom"><div className="pc-price">300 <span>сом/час</span></div><button disabled={pc.status !== "free"} onClick={() => openBooking(pc)} className="pc-book">{pc.status === "free" ? <>Бронировать <ArrowRight size={15} /></> : "Недоступен"}</button></div>
              </article>
            ))}
          </div>
        </section>

        <section className="games-section" id="games">
          <div className="section">
            <div className="section-heading">
              <div><div className="eyebrow">ТВОИ ЛЮБИМЫЕ МИРЫ</div><h2>Во что <span>играем?</span></h2></div>
              <p>От соревновательных матчей до открытых миров — выбирай свой режим.</p>
            </div>
            <div className="games-grid">
              {games.map(game => <div className={`game-card ${game.color}`} key={game.name}><div className="game-art"><span>{game.short}</span><Gamepad2 size={19} /></div><div className="game-info"><span>{game.genre}</span><h3>{game.name}</h3></div><ArrowUpRightIcon /></div>)}
            </div>
          </div>
        </section>

        <section className="section price-section" id="prices">
          <div className="price-copy"><div className="eyebrow">ПОНЯТНЫЕ ЦЕНЫ</div><h2>Играй больше.<br /><span>Плати честно.</span></h2><p>Никаких сложных тарифов. Выбирай сколько хочешь играть — итоговая стоимость будет известна заранее.</p><div className="price-note"><CheckCircle2 size={18} /> Цена одинаковая для всех свободных ПК</div></div>
          <div className="price-card"><div className="price-card-label">СТАНДАРТНЫЙ ТАРИФ</div><div className="big-price">300 <span>сом</span></div><div className="price-per">за 1 час игры</div><div className="price-divider" /><div className="price-includes"><div><Check size={17} /> Доступ к игровому ПК</div><div><Check size={17} /> Игровая периферия</div><div><Check size={17} /> Выбор из популярных игр</div></div><a className="btn btn-primary full-btn" href="#computers">Забронировать время <ArrowRight size={17} /></a><p className="price-footnote">Бронирование на сайте — демонстрационная функция.</p></div>
        </section>

        <section className="about-section" id="about"><div className="about-inner"><div className="about-icon"><Trophy size={27} /></div><div><div className="eyebrow">БОЛЬШЕ ЧЕМ ПРОСТО ПК</div><h2>Твоя следующая победа<br />начинается <span>здесь.</span></h2></div><a href="#computers" className="btn btn-primary">Занять место <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark"><Gamepad2 size={22} /></span><span>GAME<span className="brand-light">BAR</span><small>GAMING CLUB</small></span></a><p>Твоя игра. Твои правила.</p><div className="footer-right"><span>Ежедневно · время работы уточняется</span><span>© 2026 GAMEBAR</span></div></footer>

      {selectedPC && <div className="modal-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) setSelectedPC(null); }}>
        <form className="booking-modal" onSubmit={confirmBooking}>
          <button className="modal-close" type="button" onClick={() => setSelectedPC(null)} aria-label="Закрыть"><X size={20} /></button>
          <div className="eyebrow">БРОНИРОВАНИЕ</div><h2>Забронируй <span>место.</span></h2><p className="modal-subtitle">Вы выбрали {selectedPC.name}</p>
          <div className="form-grid"><label>Дата<input type="date" min={new Date().toISOString().slice(0, 10)} required value={date} onChange={e => setDate(e.target.value)} /></label><label>Время начала<select value={time} onChange={e => setTime(e.target.value)}>{["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00"].map(t => <option key={t}>{t}</option>)}</select></label><label>Количество часов<select value={hours} onChange={e => setHours(e.target.value)}>{[1,2,3,4,5,6].map(h => <option value={h} key={h}>{h} {h === 1 ? "час" : h < 5 ? "часа" : "часов"}</option>)}</select></label><label>Ваше имя<input value={name} onChange={e => setName(e.target.value)} placeholder="Как к вам обращаться?" required minLength={2} /></label><label className="full-field">Номер телефона<input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+996 555 123 456" required minLength={7} /></label></div>
          <div className="modal-total"><div><span>Итого к оплате</span><small>{hours} ч. × 300 сом</small></div><strong>{Number(hours) * pricePerHour} <small>сом</small></strong></div>
          <button className="btn btn-primary modal-submit" type="submit">Подтвердить бронирование <ArrowRight size={17} /></button>
          <p className="demo-warning">Демо-режим: заявка не отправляется администратору.</p>
        </form>
      </div>}

      {success && <div className="toast-backdrop" onClick={() => setSuccess(null)}><div className="success-toast" onClick={e => e.stopPropagation()}><div className="success-icon"><CheckCircle2 size={27} /></div><button className="toast-close" onClick={() => setSuccess(null)} aria-label="Закрыть"><X size={18} /></button><div className="eyebrow">ДЕМО-БРОНИРОВАНИЕ</div><h3>Отлично, {success.name}!</h3><p>Вы выбрали {success.pc} на {success.date} в {success.time}.</p><div className="toast-total">{success.hours} ч. · <strong>{success.total} сом</strong></div><p className="toast-note">Это демонстрация интерфейса. Для настоящего бронирования нужен сервер или подключение к системе клуба.</p><button className="btn btn-primary full-btn" onClick={() => setSuccess(null)}>Понятно <Check size={17} /></button></div></div>}
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowRight className="game-arrow" size={18} />;
}