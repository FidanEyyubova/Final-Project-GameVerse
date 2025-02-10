import React from 'react'

const Faq = () => {
  return (
    <div className='five'>
      <div className="container-fluid">
      <div className="row five g-0">
          <div className="col-12">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div>
                <NavLink className="faq" to={"/faq"}>Frequently Asked Questions</NavLink>
              </div>
              <div className="w-50 py-5">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What types of games are available on this website?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          We offer a variety of games, including action,
                          adventure, puzzle, strategy, sports, racing, and more.
                          Whether you prefer single-player, multiplayer, or
                          casual games, we have something for everyone.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What if I encounter problems while playing?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          If the problem persists, you can contact our Support
                          Team through the "Contact Us" section. Please provide
                          details such as the name of the game, the issue you’re
                          experiencing, and any error messages you’ve received.
                          We’ll work to resolve the problem as quickly as
                          possible!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Are the games on this site safe and virus-free?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, all the games on our site are thoroughly tested
                          to ensure they are safe and virus-free. We work with
                          trusted developers and conduct regular security checks
                          to protect your device and personal information. We
                          also use secure connections to ensure your experience
                          is safe while playing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mb-4">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        How do I use promotional codes or discounts?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          To use a promotional code or discount, simply go to
                          the Cart section during checkout. There, you’ll find a
                          field where you can enter your discount code. Once
                          entered, click "Apply" to see the discount reflected
                          in your total. Be sure that is valid.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Do you have a mobile app?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <p>
                          Currently, we do not have a mobile app. However, you
                          can easily access and buy games directly from our
                          website on your computer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
