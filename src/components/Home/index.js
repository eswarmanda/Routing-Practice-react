import './index.css'

const Home = () => {
  console.log('header called')
  return (
    <div className="home-img-card">
      <img
        className="home-img"
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
      />
      <h1 className="home-text">Home</h1>
    </div>
  )
}

/* <img src="" alt="" /> */

export default Home
