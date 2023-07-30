import './index.css'

const About = () => {
  console.log('About called')
  return (
    <div className="about-card">
      <img
        className="about-img"
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
      />
      <h1 className="about-text">About</h1>
      <p>I Love to Create! I am FrontEnd Developer</p>
    </div>
  )
}

export default About
