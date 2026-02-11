import React from 'react'

function Review() {
  return (
    <div>
    

   <div class="container my-5">
  <h1 class="mb-4 text-center">Responsive Column List of Reviews</h1>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Very cool product. Simple and customizable...</h5>
          <p class="text-warning">⭐️⭐️⭐️⭐️⭐️</p>
          <p class="card-text">Very cool product. Simple and customizable plugin that adds some nice functionality to your site. Good support too, I found a bug they fixed right away.</p>
          <p class="text-muted mb-0">— Max Power</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">A good plugin!</h5>
          <p class="text-warning">⭐️⭐️⭐️⭐️⭐️</p>
          <p class="card-text">A good plugin! Support quickly answered my question, attaching a screenshot of the settings. Thank’s!</p>
          <p class="text-muted mb-0">— Luna Eclipse</p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">Very good plugin</h5>
          <p class="text-warning">⭐️⭐️⭐️⭐️⭐️</p>
          <p class="card-text">The Float Menu Pro is the best plugin I came across. It is flexible, beautifully designed and it does what it says. Keep the good work WOW-Company.</p>
          <p class="text-muted mb-0">— Jax Maverick</p>
        </div>
      </div>
    </div>

  </div>
</div>

    </div>
  )
}

export default Review 