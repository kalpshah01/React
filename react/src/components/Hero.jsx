
function Hero({ image, title, desc }) {
  return (
    <div>
      <div className="card mb-3 py-4">
        <img src={image} className="card-img-top" alt="Hero Image" />
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
        </div>
      </div>
    </div>

  )
}

export default Hero 