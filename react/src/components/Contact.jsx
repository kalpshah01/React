import React from 'react'

function Contact() {
  return (
 <section className="container py-5" id="Contact">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row">
       
        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </div>

       
        <div className="col-md-6">
          <div className="p-3 border rounded">
            <p><strong>Address:</strong> Surat</p>
            <p><strong>Phone:</strong> +91 9408417561</p>
            <p><strong>Email:</strong> kalpshah962005@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 