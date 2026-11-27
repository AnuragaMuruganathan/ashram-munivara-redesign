import Header from "./Header";
import ResponsiveImage from "./ResponsiveImage";
import { directions, whatsapp } from "./site-data";
import { AirVent, ArrowRight, ArrowUpRight, BedDouble, BookOpen, Building2, CalendarDays, Check, Clock3, Flame, Flower2, Layers3, Mail, MapPin, MessageCircle, Play, Shirt, Users } from "lucide-react";

const images = {
  hero: "/images/hero-night-square.7e90064f.webp",
  hero320: "/images/hero-night-square-320.25e7f81c.webp",
  hero480: "/images/hero-night-square-480.0d514e2b.webp",
  guru: "/images/guru-144.cfaf37c7.webp",
  about480: "/images/about-temple-480.3dcbbd5f.webp",
  about768: "/images/about-temple-768.83b83bc9.webp",
  community480: "/images/community-480.d117cb82.webp",
  community766: "/images/community-766.a9934745.webp",
  ceremony480: "/images/ceremony-480.8026fc67.webp",
  ceremony768: "/images/ceremony-768.2889ae36.webp",
  offerings640: "/images/offerings-640.ef5fefe8.webp",
  offerings1030: "/images/offerings-1030.3198c267.webp",
  puja640: "/images/puja-640.46c600a8.webp",
  puja1030: "/images/puja-1030.12fae95a.webp",
  stay640: "/images/stay-640.4afc901a.webp",
  stay1030: "/images/stay-1030.3e421710.webp",
  yoga560: "/images/yoga-560.0d073a70.webp",
  yoga845: "/images/yoga-845.40401982.webp",
};

const paths = [
  ["Bhakti", "Devotion", "Opening the heart through prayer, chanting and surrender.", Flower2],
  ["Raja", "Meditation", "Quieting the mind and turning awareness inward.", Layers3],
  ["Jnana", "Knowledge", "Self-inquiry and the study of universal spiritual wisdom.", BookOpen],
  ["Karma", "Service", "Offering conscious action in service to the community.", Users],
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Ashram Munivara",
  description: "A Jnana Buda Siwa ashram for puja, yoga, spiritual learning and conscious stays.",
  url: "https://ashrammunivara.org/",
  email: "infoashrammunivara@gmail.com",
  telephone: "+62 853 3744 5935",
  address: { "@type": "PostalAddress", streetAddress: "Tirta Tawar Road, Banjar Junjungan", addressLocality: "Ubud", addressRegion: "Bali", addressCountry: "ID" },
  sameAs: ["https://www.facebook.com/groups/Munivara/"],
};

export default function Site() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="home" aria-labelledby="hero-title" tabIndex={-1}>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="om-mark" lang="sa" aria-label="Om">ॐ</div>
              <h1 id="hero-title">Ashram{" "}<span>Munivara</span></h1>
              <p className="hero-intro">A sacred space to awaken, transform and learn the universal path of Jnana Buda Siwa.</p>
              <div className="button-row"><a className="button button-dark" href="#about">Enter the ashram <ArrowRight size={18} aria-hidden="true" /></a><a className="text-link" href="#weekly">Puja & yoga times <ArrowUpRight size={17} aria-hidden="true" /></a></div>
              <div className="hero-location"><MapPin size={17} aria-hidden="true" /><span>Junjungan, five kilometres north of Ubud</span></div>
            </div>
            <div className="hero-visual">
              <div className="hero-image"><ResponsiveImage src={images.hero} srcSet={`${images.hero320} 320w, ${images.hero480} 480w, ${images.hero} 630w`} alt="Ashram Munivara temple illuminated beneath the night sky" width={630} height={630} priority className="image-fill" sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 55vw, 736px" /></div>
              <div className="hero-caption"><span><span lang="sa">श्रद्धा</span> · Devotion</span><span>Established 2006</span></div>
            </div>
          </div>
        </section>

        <div className="welcome-strip" aria-label="Ashram highlights"><div className="container welcome-inner"><div><Flower2 size={19} aria-hidden="true" /><span>All are welcome</span></div><div><span className="strip-sanskrit" lang="sa">ज्ञान</span><span>Knowledge from within</span></div><div><MapPin size={18} aria-hidden="true" /><span>Ubud, Bali</span></div></div></div>

        <section className="section about" id="about" aria-labelledby="about-title" tabIndex={-1}>
          <div className="container about-grid">
            <div className="about-copy">
              <h2 id="about-title">Rooted in wisdom.<br />Open to everyone.</h2>
              <p>Founded by Master Ketut Arsana, Ashram Munivara is a Jnana Buda Siwa ashram for worship, spiritual learning and self-empowerment.</p>
              <p>Local and international seekers gather here to awaken their potential through yoga, puja, sacred song, dance and service.</p>
              <div className="founder"><div className="founder-image"><ResponsiveImage src={images.guru} alt="Master Ketut Arsana" width={144} height={144} className="image-fill" sizes="72px" /></div><div><h3>Master Ketut Arsana</h3><span>Founder · Balinese yoga master and healer</span></div></div>
            </div>
            <div className="about-media">
              <div className="about-main-image"><ResponsiveImage src={images.about768} srcSet={`${images.about480} 480w, ${images.about768} 768w`} alt="Stone temple among the gardens of Ashram Munivara" width={768} height={967} className="image-fill" sizes="(max-width: 900px) 65vw, (max-width: 1280px) 34vw, 420px" /></div>
              <div className="about-secondary-image"><ResponsiveImage src={images.community766} srcSet={`${images.community480} 480w, ${images.community766} 766w`} alt="A sacred shrine at Ashram Munivara" width={766} height={956} className="image-fill" sizes="(max-width: 900px) 35vw, (max-width: 1280px) 25vw, 300px" /></div>
              <div className="about-note"><span className="note-symbol" lang="sa" aria-label="Om">ॐ</span><p>Muni — yogi or saint.<br />Vara — the ultimate.</p><span className="note-foot">A harmonious life within self, nature and community.</span><svg className="about-note-lotus" viewBox="0 0 200 200" fill="none" aria-hidden="true"><path d="M100 160C70 130 60 100 100 50C140 100 130 130 100 160Z" stroke="currentColor" strokeWidth="2"/><path d="M100 160C60 160 30 140 20 90C60 90 90 120 100 160Z" stroke="currentColor" strokeWidth="2"/><path d="M100 160C140 160 170 140 180 90C140 90 110 120 100 160Z" stroke="currentColor" strokeWidth="2"/></svg></div>
            </div>
          </div>
          <div className="container life-grid" aria-label="Ashram life">
            <article><h3><span className="life-icon" aria-hidden="true"><Flower2 size={30} /></span>Shrines</h3><p>Balinese Hindu shrines provide a sacred setting for prayer, offerings and meditation.</p></article>
            <article><h3><span className="life-icon" aria-hidden="true"><Building2 size={30} /></span>Facilities</h3><p>The ashram includes a yoga shala, community spaces, a shop and the Student House.</p></article>
            <article><h3><span className="life-icon" aria-hidden="true"><Play size={30} /></span>Videos & updates</h3><p>Community recordings and announcements are shared through the ashram’s Facebook group.</p><a className="text-link" href="https://www.facebook.com/groups/Munivara/" target="_blank" rel="noreferrer" aria-label="View Ashram Munivara community updates on Facebook (opens in a new tab)">View community updates <ArrowUpRight size={16} aria-hidden="true" /></a></article>
          </div>
        </section>

        <section className="section practice" id="practice" aria-labelledby="practice-title" tabIndex={-1}>
          <div className="container">
            <div className="om-mark" lang="sa" aria-label="Om">ॐ</div>
            <div className="section-heading practice-heading"><h2 id="practice-title">The practice is the path.</h2></div>
            <div className="practice-layout">
              <div className="sadhana-card">
                <div className="sadhana-image"><ResponsiveImage src={images.offerings1030} srcSet={`${images.offerings640} 640w, ${images.offerings1030} 1030w`} alt="Students seated for spiritual practice at the ashram" width={1030} height={690} className="image-fill" sizes="(max-width: 1100px) calc(100vw - 10px), 50vw" /></div>
                <div className="sadhana-copy"><h3>Sadhana</h3><p>Daily spiritual practice through mantra, tantra and yantra.</p></div>
                <svg className="sadhana-watermark" viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M60 100C40 78 35 58 60 25C85 58 80 78 60 100Z" stroke="currentColor" strokeWidth="1.5"/><path d="M60 100C32 100 15 85 10 50C38 50 55 72 60 100Z" stroke="currentColor" strokeWidth="1.5"/><path d="M60 100C88 100 105 85 110 50C82 50 65 72 60 100Z" stroke="currentColor" strokeWidth="1.5"/></svg>
              </div>
              <div className="path-grid">{paths.map(([name, translation, description, Icon]) => <article className="path-card" key={name}><Icon className="path-icon" size={42} strokeWidth={1.5} aria-hidden="true" /><h3>{name} <span>Yoga</span></h3><strong>{translation}</strong><p>{description}</p></article>)}</div>
            </div>
            <p className="practice-note"><span>Four paths of yoga support one purpose: knowing the divine within and expressing it through Yadnya, selfless service.</span></p>
          </div>
        </section>

        <section className="section weekly" id="weekly" aria-labelledby="weekly-title" tabIndex={-1}>
          <div className="container">
            <div className="section-heading weekly-heading"><h2 id="weekly-title">A weekly rhythm of practice.</h2><p>Visitors are welcome. Confirm schedules before travelling.</p></div>
            <div className="weekly-grid">
              <div className="weekly-card"><article id="puja" aria-labelledby="puja-title" tabIndex={-1}>
                <div className="weekly-image"><ResponsiveImage src={images.puja1030} srcSet={`${images.puja640} 640w, ${images.puja1030} 1030w`} alt="Evening puja ceremony at Ashram Munivara" width={1030} height={687} className="image-fill" sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 46vw, 610px" /></div>
                <div className="weekly-content"><div className="weekly-title-row"><h3 id="puja-title">Puja</h3><span>Prayer · Chant · Meditation</span></div><p>Celebrate the divine through Jnana Buda Siwa songs, dance, offerings and prayer.</p><dl className="schedule-list"><div><dt><CalendarDays size={18} aria-hidden="true" /> Days</dt><dd>Full moon, new moon & Kliwon days</dd></div><div><dt><Clock3 size={18} aria-hidden="true" /> Time</dt><dd>Around 7:00–7:30 pm</dd></div><div><dt><Check size={18} aria-hidden="true" /> Dress</dt><dd>Sarong, sash & covered shoulders</dd></div></dl></div>
              </article></div>
              <div className="weekly-card"><article id="yoga" className="yoga-card" aria-labelledby="yoga-title" tabIndex={-1}>
                <div className="weekly-image"><ResponsiveImage src={images.yoga845} srcSet={`${images.yoga560} 560w, ${images.yoga845} 845w`} alt="Yoga practice beside the water at Ashram Munivara" width={845} height={684} className="image-fill" sizes="(max-width: 900px) calc(100vw - 32px), (max-width: 1280px) 46vw, 610px" /></div>
                <div className="weekly-content"><div className="weekly-title-row"><h3 id="yoga-title">Yoga</h3><span>Movement · Breath · Stillness</span></div><p>Open asana classes support physical, mental and emotional wellbeing. Mats are supplied.</p><dl className="schedule-list"><div><dt><CalendarDays size={18} aria-hidden="true" /> Days</dt><dd>Every Monday & Wednesday</dd></div><div><dt><Clock3 size={18} aria-hidden="true" /> Time</dt><dd>5:00–6:30 pm</dd></div><div><dt><Check size={18} aria-hidden="true" /> Price</dt><dd>IDR 50,000 visitors · IDR 35,000 guests</dd></div></dl></div>
              </article></div>
            </div>
            <div className="schedule-note"><span>Schedules may change on Balinese holy days.</span><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Confirm your visit on WhatsApp (opens in a new tab)">Confirm your visit <ArrowUpRight size={17} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="section stay" id="stay" aria-labelledby="stay-title" tabIndex={-1}>
          <svg className="stay-clip" width="0" height="0" aria-hidden="true"><defs><clipPath id="stay-frame-shape" clipPathUnits="objectBoundingBox"><path d="M.18 0H.82C.9 0 .88.045.94.06C1 .075 1 .1 1 .14V.86C1 .9 1 .925.94.94C.88.955.9 1 .82 1H.18C.1 1 .12.955.06.94C0 .925 0 .9 0 .86V.14C0 .1 0 .075.06.06C.12.045.1 0 .18 0Z" /></clipPath></defs></svg>
          <svg className="stay-landscape" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 120V100C130 70 215 88 330 45C430 82 510 60 620 92C740 55 830 82 940 55C1040 85 1110 70 1200 96V120H0Z"/></svg>
          <div className="container stay-grid">
            <div className="stay-image"><ResponsiveImage src={images.stay1030} srcSet={`${images.stay640} 640w, ${images.stay1030} 1030w`} alt="Student House accommodation in the ashram gardens" width={1030} height={686} className="image-fill" sizes="(max-width: 900px) calc(100vw - 10px), 42vw" /></div>
            <div className="stay-copy">
              <svg className="stay-lotus" viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M60 100C40 78 35 58 60 25C85 58 80 78 60 100Z" stroke="currentColor" strokeWidth="2"/><path d="M60 100C32 100 15 85 10 50C38 50 55 72 60 100Z" stroke="currentColor" strokeWidth="2"/><path d="M60 100C88 100 105 85 110 50C82 50 65 72 60 100Z" stroke="currentColor" strokeWidth="2"/></svg>
              <h2 id="stay-title">Stay with intention.</h2>
              <p>The Student House supports spiritual study and participation in ashram life. It is not a holiday hotel.</p>
              <div className="rates">
                <div><BedDouble className="rate-icon" size={48} strokeWidth={1.4} aria-hidden="true" /><div><span>Shared room</span><strong>IDR 200,000</strong><small>per person / night</small></div></div>
                <div><AirVent className="rate-icon" size={48} strokeWidth={1.4} aria-hidden="true" /><div><span>Shared with air-con</span><strong>IDR 230,000</strong><small>per person / night</small></div></div>
              </div>
              <ul className="stay-facts"><li><Check size={19} aria-hidden="true" /> Minimum two nights; maximum one month</li><li><Check size={19} aria-hidden="true" /> Linen, towel and ashram activities included</li><li><Check size={19} aria-hidden="true" /> Separate rooms for men and women</li><li><Check size={19} aria-hidden="true" /> Check-in 2:00 pm; check-out 11:00 am</li><li><Check size={19} aria-hidden="true" /> Meals, transport, laundry and toiletries excluded</li><li><Check size={19} aria-hidden="true" /> Yoga classes are charged separately</li></ul>
              <a className="button button-dark" href={`${whatsapp}?text=Hello%20Ashram%20Munivara%2C%20I%20would%20like%20to%20ask%20about%20a%20Student%20House%20reservation.`} target="_blank" rel="noreferrer" aria-label="Ask about a stay on WhatsApp (opens in a new tab)">Ask about a stay <MessageCircle size={24} aria-hidden="true" /></a>
              <svg className="stay-watermark" viewBox="0 0 120 120" fill="none" aria-hidden="true"><path d="M60 100C40 78 35 58 60 25C85 58 80 78 60 100Z" stroke="currentColor" strokeWidth="1.5"/><path d="M60 100C32 100 15 85 10 50C38 50 55 72 60 100Z" stroke="currentColor" strokeWidth="1.5"/><path d="M60 100C88 100 105 85 110 50C82 50 65 72 60 100Z" stroke="currentColor" strokeWidth="1.5"/></svg>
            </div>
          </div>
        </section>

        <section className="section events" id="events" aria-labelledby="events-title" tabIndex={-1}>
          <svg className="events-landscape" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 120V95L90 65L155 90L245 45L340 92L430 70L540 104L650 82L760 103L870 72L960 102L1070 78L1200 98V120H0Z"/><path fill="currentColor" d="M35 120L43 54H47L51 120H35ZM44 58C25 55 16 46 12 35C29 36 40 43 44 58ZM45 58C63 51 76 52 86 59C69 67 56 66 45 58ZM44 55C32 39 31 26 36 15C48 28 50 40 44 55ZM47 56C51 37 60 26 72 22C71 40 62 51 47 56ZM78 120L85 70H89L94 120H78ZM87 73C70 70 61 62 57 51C73 52 83 59 87 73ZM88 73C104 66 117 67 126 74C111 82 98 81 88 73ZM87 70C75 55 74 43 79 32C90 44 92 56 87 70Z"/></svg>
          <div className="container">
            <div className="section-heading events-heading">
              <div><div className="event-title-line"><CalendarDays size={38} strokeWidth={1.5} aria-hidden="true" /><h2 id="events-title">Sacred days at the ashram.</h2></div><span className="event-updated">Online information last checked 23 November 2026.</span></div>
              <p>No upcoming dates are published here. Contact the ashram for current dates and availability.</p>
            </div>
            <div className="event-grid">
              <article className="event-card">
                <div className="event-image"><ResponsiveImage src={images.puja1030} srcSet={`${images.puja640} 640w, ${images.puja1030} 1030w`} alt="Evening puja ceremony at the ashram" width={1030} height={687} className="image-fill" sizes="(max-width: 800px) calc(100vw - 22px), 33vw" /></div>
                <h3>Full & New Moon</h3><p>Purnama and Tilem pujas honour the changing energy of the moon through prayer and meditation.</p>
                <ul className="event-details"><li><Clock3 aria-hidden="true" />Around 7:00–7:30 pm</li><li><Shirt aria-hidden="true" />Sarong, sash and covered shoulders</li><li><CalendarDays aria-hidden="true" />Evening ceremony · Balinese calendar</li></ul>
              </article>
              <article className="event-card">
                <div className="event-image"><ResponsiveImage src={images.offerings1030} srcSet={`${images.offerings640} 640w, ${images.offerings1030} 1030w`} alt="Ashram community gathered for an anniversary celebration" width={1030} height={690} className="image-fill" sizes="(max-width: 800px) calc(100vw - 22px), 33vw" /></div>
                <h3>Anniversary Celebrations</h3><p>Sacred ceremonies, songs and dances celebrate Jnana Buda Siwa during the ashram’s holy month.</p>
                <ul className="event-details"><li><Users aria-hidden="true" />All visitors may attend</li><li><Shirt aria-hidden="true" />Formal ashram dress code</li><li><CalendarDays aria-hidden="true" />9, 10, 11, 13 & 17 July · Annually</li></ul>
              </article>
              <article className="event-card">
                <div className="event-image"><ResponsiveImage src={images.ceremony768} srcSet={`${images.ceremony480} 480w, ${images.ceremony768} 768w`} alt="Sacred ashram temple during Nyepi retreat" width={768} height={968} className="image-fill" sizes="(max-width: 800px) calc(100vw - 22px), 33vw" /></div>
                <h3>Nyepi Retreat</h3><p>Honour the Balinese New Year with silence, fasting and meditation, closing with Agni Hotra.</p>
                <ul className="event-details"><li><Flame aria-hidden="true" />Agni Hotra fire puja at 5:00 am</li><li><Users aria-hidden="true" />Limited spaces; reservation required</li><li><CalendarDays aria-hidden="true" />March · Annual day of silence</li></ul>
              </article>
            </div>
            <div className="events-action"><a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Ask for upcoming dates on WhatsApp (opens in a new tab)">Ask for upcoming dates <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="section visit" id="visit" aria-labelledby="visit-title" tabIndex={-1}>
          <svg className="visit-clip" width="0" height="0" aria-hidden="true"><defs><clipPath id="visit-arch-shape" clipPathUnits="objectBoundingBox"><path d="M0 1V.34C0 .27.06.24.12.23C.08.15.19.11.32.12C.39.06.46.04.5 0C.54.04.61.06.68.12C.81.11.92.15.88.23C.94.24 1 .27 1 .34V1Z" /></clipPath></defs></svg>
          <svg className="visit-landscape" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden="true"><path fill="currentColor" d="M0 120V95L90 65L155 90L245 45L340 92L430 70L540 104L650 82L760 103L870 72L960 102L1070 78L1200 98V120H0Z"/><path fill="currentColor" d="M35 120L43 54H47L51 120H35ZM44 58C25 55 16 46 12 35C29 36 40 43 44 58ZM45 58C63 51 76 52 86 59C69 67 56 66 45 58ZM44 55C32 39 31 26 36 15C48 28 50 40 44 55ZM47 56C51 37 60 26 72 22C71 40 62 51 47 56ZM78 120L85 70H89L94 120H78ZM87 73C70 70 61 62 57 51C73 52 83 59 87 73ZM88 73C104 66 117 67 126 74C111 82 98 81 88 73ZM87 70C75 55 74 43 79 32C90 44 92 56 87 70Z"/></svg>
          <div className="container visit-grid">
            <div className="visit-copy">
              <div className="om-mark" lang="sa" aria-label="Om">ॐ</div>
              <h2 id="visit-title">Come as you are.</h2>
              <p className="visit-intro">Whatever your faith or background, you are welcome to join ashram programs with respect for its sacred atmosphere.</p>
              <div className="visit-lotus" aria-hidden="true"><span></span><Flower2 size={54} strokeWidth={1.4} /><span></span></div>
            </div>
            <div className="visit-details">
              <address className="contact-list"><a href={directions} target="_blank" rel="noreferrer" aria-label="Open Ashram Munivara directions in Google Maps (opens in a new tab)"><MapPin size={28} strokeWidth={1.5} aria-hidden="true" /><span><strong>Tirta Tawar Road, Banjar Junjungan</strong>5 km north of Ubud Main Road</span><ArrowUpRight size={18} aria-hidden="true" /></a><a href="mailto:infoashrammunivara@gmail.com"><Mail size={28} strokeWidth={1.5} aria-hidden="true" /><span><strong>Email the ashram</strong>infoashrammunivara@gmail.com</span><ArrowUpRight size={18} aria-hidden="true" /></a><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contact Ashram Munivara on WhatsApp (opens in a new tab)"><MessageCircle size={28} strokeWidth={1.5} aria-hidden="true" /><span><strong>WhatsApp</strong>+62 853 3744 5935</span><ArrowUpRight size={18} aria-hidden="true" /></a></address>
              <div className="etiquette"><div className="etiquette-title"><Flower2 size={22} aria-hidden="true" /><strong>Visitor etiquette</strong></div><p>For puja, wear a sarong and sash with a top covering the shoulders. Sarong rental is available at the ashram shop.</p></div>
            </div>
            <div className="visit-image"><ResponsiveImage src={images.ceremony768} srcSet={`${images.ceremony480} 480w, ${images.ceremony768} 768w`} alt="The ornate entrance to Ashram Munivara" width={768} height={968} className="image-fill" sizes="(max-width: 900px) 480px, 31vw" /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home" aria-label="Back to top"><img src="/images/logo.png" width="64" height="62" alt="" /><span className="footer-brand-divider" aria-hidden="true"></span><span className="brand-type"><strong>Ashram Munivara</strong><span>Jnana Buda Siwa · Ubud, Bali</span></span></a>
          <div className="footer-message"><Flower2 size={54} strokeWidth={1.3} aria-hidden="true" /><p>May all beings be happy.</p></div>
          <div className="footer-links"><a href="https://www.facebook.com/groups/Munivara/" target="_blank" rel="noreferrer" aria-label="Ashram Munivara on Facebook (opens in a new tab)"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h3v8h3.5Z" /></svg></a><a href="mailto:infoashrammunivara@gmail.com" aria-label="Email Ashram Munivara"><Mail size={20} aria-hidden="true" /></a><a href="#home" className="back-to-top">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Ashram Munivara</span><span>Original photography and emblem from Ashram Munivara.</span></div>
      </footer>
    </>
  );
}
