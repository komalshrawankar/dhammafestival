import { useState } from 'react'
import './App.css'

const eventPosters = [
  { src: '/card1.png', alt: 'Dhamma Festival event poster' },
  { src: '/card2.png', alt: 'Dhamma Festival event poster' },
  { src: '/card3.png', alt: 'Dhamma Festival event poster' },
  { src: '/card4.png', alt: 'Dhamma Festival event poster' },
  { src: '/card5.png', alt: 'Dhamma Festival event poster' },
]

const journeyItems = [
  {
    title: '१२ वर्षांचा प्रवास',
    highlight: 'धम्मा फेस्टिवल २०२६ हे या उत्सवाचे बारावे वर्ष आहे.',
    text: 'कला, सेवा आणि सामाजिक एकतेचा हा प्रवास गेली १२ वर्षे अविरत सुरू आहे.',
    image: '/1sec.png',
    alt: 'धम्मा फेस्टिवलचा निळा उत्सवी देखावा',
  },
  {
    title: '१२ वर्षांची सेवा',
    preface: 'दीक्षाभूमीवर येणाऱ्या धम्म अनुयायांची गैरसोय होऊ नये, यासाठी',
    highlight: 'धम्मा फेस्टिवल गेली १२ वर्षे सेवाभावी कार्य करत आहे.',
    text: 'धम्म अनुयायांसाठी सुविधा आणि आपुलकीचे वातावरण निर्माण करणे हे आमचे ध्येय आहे.',
    image: '/2sec.png',
    alt: 'उत्सवाच्या प्रकाशात न्हालेला स्तूप',
  },
  {
    title: 'कलावंतांचा, लोकांसाठीचा उत्सव',
    highlight: 'कलावंतांनी कलावंतांसाठी नव्हे, तर समाजासाठी उभा केलेला हा एक अनोखा उत्सव आहे.',
    text: 'कलेच्या माध्यमातून समाजाला जोडणारा धम्मा फेस्टिवल हा एक वेगळा सांस्कृतिक मंच आहे.',
    image: '/3sec.jpg.jpeg',
    alt: 'फेस्टिवलमधील कलावंत आणि कार्यक्रम',
  },
  {
    title: 'विविधतेतून कलेचा उत्सव',
    highlight: 'विविध जाती-धर्म आणि समुदायातील कलावंत एकाच मंचावर येऊन आपल्या कलेचे सादरीकरण करतात.',
    text: 'कलेच्या माध्यमातून विविधतेचा सन्मान आणि सामाजिक एकतेचा संदेश दिला जातो.',
    image: '/4sec.jpg.jpeg',
    alt: 'धम्मा फेस्टिवलमधील सांस्कृतिक सादरीकरण',
  },
  {
    title: 'कलेची नवी पिढी घडविण्याचा संकल्प',
    highlight: 'समाजातून कलेची एक नवी आणि सक्षम पिढी तयार व्हावी, हा धम्मा फेस्टिवलचा मुख्य उद्देश आहे.',
    text: 'नवोदित कलावंतांना व्यासपीठ, संधी आणि प्रोत्साहन देण्याचा आमचा प्रयत्न आहे.',
    image: '/5sec.jpg.jpeg',
    alt: 'धम्मा फेस्टिवलमधील कलाकार',
  },
]

const marathiNumbers = ['०१', '०२', '०३', '०४', '०५']

function App() {
  const [formMessage, setFormMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()

    const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL
    if (!endpoint) {
      setFormMessage(
        'Google Sheet जोडलेली नाही. Vercel Project Settings → Environment Variables मध्ये VITE_GOOGLE_SHEETS_WEB_APP_URL जोडा आणि पुन्हा deploy करा.',
      )
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const submission = new URLSearchParams()
    for (const [key, value] of formData.entries()) {
      if (typeof value === 'string') submission.append(key, value.trim())
    }

    setIsSubmitting(true)
    setFormMessage('')

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: submission,
      })
      setFormMessage(
        'तुमची विनंती पाठवली आहे; Google Sheet मध्ये नोंद झाल्याची पुष्टी मिळाली नाही. कृपया Sheet तपासा. नोंद नसेल तर deployment तपासून पुन्हा प्रयत्न करा.',
      )
    } catch {
      setFormMessage(
        'अभिप्राय पाठवता आला नाही. इंटरनेट जोडणी तपासून पुन्हा प्रयत्न करा.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="festival-page">
      <nav className="site-nav" aria-label="मुख्य नेव्हिगेशन">
        <a className="site-nav-brand" href="#home">
          <img
            className="site-nav-logo"
            src="/logo.png"
            alt="धम्मा फेस्टिवल"
          />
        </a>
        <div className="site-nav-links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#performances">Performances</a>
          <a href="#footer">Contact</a>
        </div>
      </nav>

      <img
        id="home"
        className="festival-banner festival-banner--hero"
        src="/covermain.png"
        alt="धम्मा फेस्टिवल, नागपूर"
      />

      <section
        id="events"
        className="event-lineup"
        aria-label="फेस्टिवलमधील कार्यक्रम"
      >
        <picture>
          <source media="(max-width: 600px)" srcSet="/mobile.png" />
          <img
            className="lineup-banner"
            src="/cover4.png"
            alt="धम्मा फेस्टिवलचे कार्यक्रम आणि कलावंत"
          />
        </picture>
        <div className="poster-row">
          {eventPosters.map((poster, index) => (
            <img
              className="event-poster"
              key={poster.src}
              src={poster.src}
              alt={`${poster.alt} ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="festival-caption" aria-label="धम्मा फेस्टिवलचा १२ वर्षांचा प्रवास">
        <h2>धम्मा फेस्टिवल २०२६ हे बुद्धोत्सवाचे बारावे वर्ष आहे.</h2>
        <p>कला, सेवा आणि सामाजिक एकतेचा हा प्रवास गेली १२ वर्षे अविरत सुरू आहे.</p>
      </section>

      <img
        className="festival-banner festival-banner--closing"
        src="/cover.png"
        alt="धम्मा फेस्टिवल २०२६ — कला, लोकसहभाग, समता आणि समाज"
      />

      <section
        id="performances"
        className="journey-section"
        aria-labelledby="journey-title"
      >
        <header className="journey-header">
          <p className="journey-eyebrow">आमचा प्रवास · आमची ओळख</p>
          <h1 id="journey-title">
            धम्मा फेस्टिवल <span>२०२६</span>
          </h1>
          <p className="journey-intro">
            कला, सेवा आणि सामाजिक एकतेचा १२ वर्षांचा प्रवास
          </p>
          <p className="journey-description">
            दीक्षाभूमीच्या पवित्र भूमीवरून, कलेच्या माध्यमातून सेवा आणि
            सामाजिक एकतेचा संदेश जपणारा उत्सव.
          </p>
        </header>

        <div className="journey-list">
          {journeyItems.map((item, index) => (
            <article
              className={`journey-item${index % 2 === 1 ? ' journey-item--reverse' : ''}`}
              key={item.title}
            >
              <div className="journey-image-slot">
                <span className="journey-image-placeholder" aria-hidden="true">
                  {marathiNumbers[index]}
                </span>
                <img
                  className="journey-image"
                  src={item.image}
                  alt={item.alt}
                  onError={(event) => {
                    event.currentTarget.hidden = true
                  }}
                />
              </div>
              <div className="journey-copy">
                <p className="journey-number">{marathiNumbers[index]}</p>
                <div className="journey-content">
                  <p className="journey-kicker">धम्मा फेस्टिवल · २०२६</p>
                  <h2>{item.title}</h2>
                  {item.preface && (
                    <p className="journey-preface">{item.preface}</p>
                  )}
                  <p className="journey-highlight">{item.highlight}</p>
                  <p className="journey-text">{item.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <blockquote className="journey-quote">
          <span aria-hidden="true">“</span>
          <p>कलेतून समतेचा संदेश, संस्कृतीतून एकतेचा ध्यास…</p>
          <div className="journey-logos" aria-label="उत्सवाशी संबंधित संस्था">
            <img src="/new1.png" alt="संस्थेचा लोगो १" />
            <img src="/new2.png" alt="संस्थेचा लोगो २" />
            <img src="/new3.png" alt="संस्थेचा लोगो ३" />
          </div>
        </blockquote>
      </section>

      <section className="feedback-section" aria-labelledby="feedback-title">
        <div className="feedback-card">
          <header className="feedback-heading">
            <p className="feedback-kicker">धम्मा फेस्टिवल · २०२६</p>
            <span className="feedback-heading-mark" aria-hidden="true">
              ✦
            </span>
            <p className="journey-eyebrow">तुमचे मत आमच्यासाठी महत्त्वाचे</p>
            <h2 id="feedback-title">तुमचा अनुभव सांगा</h2>
            <p className="feedback-intro">
              तुमचा अभिप्राय आम्हाला पुढील उत्सव अधिक सुंदर करण्यास मदत करेल.
            </p>
          </header>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>नाव</span>
              <input
                name="name"
                type="text"
                autoComplete="name"
                placeholder="तुमचे पूर्ण नाव"
                required
              />
            </label>

            <label className="form-field">
              <span>मोबाईल क्रमांक</span>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                pattern="[0-9]{10}"
                maxLength="10"
                placeholder="दहा अंकी क्रमांक लिहा"
                title="कृपया दहा अंकी मोबाईल क्रमांक लिहा."
                required
              />
            </label>

            <fieldset className="form-field form-choice">
              <legend>तुम्हाला उत्सव आवडला का?</legend>
              <div className="choice-options">
                <label>
                  <input type="radio" name="liked" value="yes" required />
                  <span>होय</span>
                </label>
                <label>
                  <input type="radio" name="liked" value="no" />
                  <span>नाही</span>
                </label>
              </div>
            </fieldset>

            <label className="form-field">
              <span>तुमचा अभिप्राय</span>
              <textarea
                name="feedback"
                rows="4"
                placeholder="तुमचे विचार येथे लिहा"
                required
              />
            </label>

            <button
              className="feedback-submit"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'पाठवत आहे…' : 'अभिप्राय नोंदवा'}
            </button>
            <p className="feedback-status" aria-live="polite">
              {formMessage}
            </p>
          </form>
        </div>
      </section>

      <footer id="footer" className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <p className="footer-eyebrow">आयोजक</p>
            <img
              className="footer-logo"
              src="/logo.png"
              alt="धम्मा फेस्टिवल"
            />
            <p>
              कला, सेवा आणि सामाजिक एकतेचा उत्सव.
              <br />
              समाज कल्याण विभाग, महाराष्ट्र शासन, नागपूर
            </p>
          </div>

          <div className="footer-contact">
            <h3>संपर्क माहिती</h3>
            <a className="footer-contact-item" href="tel:+919272370920">
              <span className="footer-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M6.6 3.8 9.2 3.2l2 4.7-2 1.5a14.3 14.3 0 0 0 5.4 5.4l1.5-2 4.7 2-.6 2.6a2.7 2.7 0 0 1-2.9 2.1A16.8 16.8 0 0 1 4.5 6.7a2.7 2.7 0 0 1 2.1-2.9Z" />
                </svg>
              </span>
              <span>
                <small>फोन</small>
                <strong>+९१ ९२७ २३७ ०९२०</strong>
              </span>
            </a>
            <a
              className="footer-contact-item"
              href="mailto:dhammafestival111@gmail.com"
            >
              <span className="footer-contact-icon" aria-hidden="true">
                ईमेल
              </span>
              <span>
                <small>ईमेल</small>
                <strong>dhammafestival111@gmail.com</strong>
              </span>
            </a>
          </div>

          <div className="footer-address">
            <h3>कार्यालयाचा पत्ता</h3>
            <address>
              धम्मा फेस्टिवल ऑफिस,
              <br />
              कृष्णा अपार्टमेंट, ब्लॉक नं. ०८,
              <br />
              किराणा सेक्टर, रामकृष्ण रोड,
              <br />
              नागपूर – ४४००२७
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© २०२६ धम्मा फेस्टिवल. सर्व हक्क राखीव.</p>
          <p>समता · सेवा · सामाजिक एकता</p>
        </div>
      </footer>
    </main>
  )
}

export default App
