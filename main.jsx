import React from 'react';
import { createRoot } from 'react-dom/client';
import { Anchor, Ship, FileCheck, Globe2, Phone, Mail, MapPin, CheckCircle2, Users, ShieldCheck } from 'lucide-react';
import './style.css';

const services = [
  'Crew coordination & planning',
  'Crew change arrangement in Thailand',
  'Documentation & compliance support',
  'Liaison with shipowners and agents',
  'Payroll coordination support',
  'Visa coordination, travel arrangement, and port agent coordination',
];

const strengths = [
  'Strong coordination between Thailand & Myanmar',
  'Flexible crew sourcing via licensed partners',
  'Fast response for crew change operations',
  'Solid understanding of MLC & operational requirements',
];

const vessels = ['General Cargo', 'Bulk Carrier', 'Coastal / Regional Vessels', 'Reefer Vessel'];
const areas = ['Thailand', 'Southeast Asia', 'Southern Pacific'];

function App() {
  return (
    <main>
      <header className="nav">
        <a href="#home" className="brand"><img src="/logo.jpg" alt="Boon Sing Talent logo" /><span>Boon Sing Talent</span></a>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#compliance">Compliance</a>
          <a href="#contact" className="navCta">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="heroOverlay" />
        <div className="heroContent">
          <div className="logoCard"><img src="/logo.jpg" alt="Boon Sing Talent logo" /></div>
          <p className="eyebrow">Established in Thailand</p>
          <h1>Trusted Coordination for Global Crew Solutions</h1>
          <p className="lead">Boon Sing Talent Co., Ltd. acts as a professional coordination bridge between shipowners, agents, and licensed manning partners for smooth crew operations.</p>
          <div className="heroActions">
            <a className="button" href="#contact">Contact Us</a>
            <a className="button ghost" href="#services">View Services</a>
          </div>
        </div>
      </section>

      <section id="about" className="section gridTwo">
        <div>
          <p className="eyebrow">Company Overview</p>
          <h2>Specialized in Crew Coordination & Manning Support</h2>
          <p>Boon Sing Talent focuses on Myanmar crew coordination, vessel crew change operations, payroll coordination support, and operational communication between key maritime stakeholders.</p>
        </div>
        <div className="card roleCard">
          <h3>Our Role in the Manning Chain</h3>
          <div className="chain">
            <span>Shipowner</span><b>↓</b><strong>Boon Sing Talent<br/><small>Thailand – Coordination</small></strong><b>↓</b><span>Licensed MOE Partner<br/><small>Myanmar – Manning</small></span><b>↓</b><span>Crew</span>
          </div>
        </div>
      </section>

      <section id="services" className="section soft">
        <p className="eyebrow center">Services</p>
        <h2 className="center">Reliable support for vessel crew operations</h2>
        <div className="cards three">
          <Feature icon={<Users />} title="Crew Coordination" text="Planning, crew change arrangement, shipowner liaison, and agent coordination." />
          <Feature icon={<FileCheck />} title="Documentation Support" text="Compliance documentation, audit readiness support, and operational paperwork." />
          <Feature icon={<Anchor />} title="Operational Support" text="Visa coordination, travel arrangement, port agent coordination, and payroll support." />
        </div>
        <ul className="serviceList">{services.map((s) => <li key={s}><CheckCircle2 />{s}</li>)}</ul>
      </section>

      <section className="section gridTwo">
        <div className="card">
          <Ship className="iconLarge" />
          <h3>Vessel Experience / Scope</h3>
          <div className="tagWrap">{vessels.map(v => <span key={v}>{v}</span>)}</div>
        </div>
        <div className="card">
          <Globe2 className="iconLarge" />
          <h3>Trading Area</h3>
          <div className="tagWrap">{areas.map(a => <span key={a}>{a}</span>)}</div>
        </div>
      </section>

      <section id="compliance" className="section dark">
        <div>
          <p className="eyebrow">Compliance & Standards</p>
          <h2>Committed to responsible coordination</h2>
          <p>We do not recruit directly. We work only with licensed MOE partners and support smooth coordination, compliance, and operational readiness.</p>
          <div className="strengths">{strengths.map(s => <div key={s}><ShieldCheck />{s}</div>)}</div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="eyebrow">Connect with Us</p>
          <h2>BOON SING TALENT CO., LTD.</h2>
          <p>For crew coordination, vessel operation support, or business inquiries, please contact our team.</p>
        </div>
        <div className="contactCard">
          <a href="tel:+66922676780"><Phone /> (+66) 92 267 6780</a>
          <a href="mailto:boonsingtalent@gmail.com"><Mail /> boonsingtalent@gmail.com</a>
          <p><MapPin /> 168/58, I Leaf Town Village, Ban Khlong Suan, Phra Samut Chedi, Samut Prakan 10290, Thailand</p>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Boon Sing Talent Co., Ltd. All rights reserved.</footer>
    </main>
  );
}

function Feature({ icon, title, text }) {
  return <div className="card feature"><div className="featureIcon">{icon}</div><h3>{title}</h3><p>{text}</p></div>;
}

createRoot(document.getElementById('root')).render(<App />);
