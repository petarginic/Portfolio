import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (

    <div className='contact'>


      <div className="container">

        <div className="row  forma justify-content-center align-items-center">
          <div className="col-md-12  ">




            <form>
              <div className="card ">
                <div className="card-header p-0">
                  <div className="bg-info text-white text-center py-2">
                    <h3><i className="fa fa-envelope"></i> Contact me</h3>
                    <p>I will respond soon I can </p>
                  </div>
                </div>
                <div className="card-body p-3">


                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                      </div>
                      <input type="text" className="form-control"  placeholder="Enter your name" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend blok">
                        <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                      </div>
                      <input type="email" className="form-control"  name="email" placeholder="Enter your email" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                      </div>
                      <textarea className="form-control" placeholder="Your message" required></textarea>
                    </div>
                  </div>

                  <div className="text-center">
                    <input type="submit" value="Submit" className="btn btn-info btn-block rounded-0 py-2 dugme" />
                  </div>
                </div>

              </div>
            </form>



          </div>
        </div>
      </div>

    </div>





  )
}

export default Contact