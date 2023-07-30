import './index.css'

const Contact = () => {
  console.log('Contact called')
  return (
    <div className="contact-card">
      <img
        className="contact-img"
        src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
        alt="contact"
      />
      <h1 className="contact-text">Contact</h1>
    </div>
  )
}

export default Contact
