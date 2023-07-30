import './index.css'

const NotFound = () => {
  console.log('NotFound called')
  return (
    <div className="not-found-card">
      <img
        className="not-found-img"
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
      />
      <h1 className="not-found-text">Not Found</h1>
    </div>
  )
}

export default NotFound
