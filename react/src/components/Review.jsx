import React from 'react'

function Review() {
  return (
    <div>
    

   <div className ="container my-5" id='Review'>
  <h1 className ="mb-4 text-center">Responsive Column List of Reviews</h1>

  <div className ="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div className ="col">
      <div className ="card h-100">
        <div className ="card-body">
          <h5 className ="card-title">Very cool product. Simple and customizable...</h5>
          <p className ="text-warning">⭐️⭐️⭐️⭐️⭐️</p>
          <p className ="card-text">Very cool product. Simple and customizable plugin that adds some nice functionality to your site. Good support too, I found a bug they fixed right away.</p>
          <p className ="text-muted mb-0">— Max Power</p>
        </div>
      </div>
    </div>

    <div className ="col">
      <div className ="card h-100">
        <div className ="card-body">
          <h5 className ="card-title">A good plugin!</h5>
          <p className ="text-warning">⭐️⭐️⭐️⭐️⭐️</p>
          <p className ="card-text">A good plugin! Support quickly answered my question, attaching a screenshot of the settings. Thank’s!</p>
          <p className ="text-muted mb-0">— Luna Eclipse</p>
        </div>
      </div>
    </div>

    <div className ="col">
      <div className ="card h-100">
        <div className ="card-body">
          <h5 className ="card-title">Very good plugin</h5>
          <p className ="text-warning">⭐️⭐️⭐️⭐️⭐️</p>
          <p className ="card-text">The Float Menu Pro is the best plugin I came across. It is flexible, beautifully designed and it does what it says. Keep the good work WOW-Company.</p>
          <p className ="text-muted mb-0">— Jax Maverick</p>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default Review 