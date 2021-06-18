import React from 'react';
import '../css/contact.css'
import Button from './button';

const contact = () => {
    return (
        <div className="main">
            <div className="container  ">
                <div class="section-heading">
                    <h2>contact Me</h2>
                    <div class="line-dec"></div>
                    <span>curious to connect you. &#x1F60D;</span>
                </div>
                
          <div class="row">
            <div class="right-content">
              <div class="container">
                <form id="contact" action="" method="post">
                  <div class="row">
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          class="form-control"
                          id="name"
                          placeholder="Your name..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          class="form-control"
                          id="email"
                          placeholder="Your email..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          name="contact"
                          type="number"
                          class="form-control"
                          id="contact"
                          placeholder="contact..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-6">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          class="form-control"
                          id="subject"
                          placeholder="Subject..."
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div class="col-md-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          class="form-control"
                          id="message"
                          placeholder="Your message..."
                          required=""
                        ></textarea>
                      </fieldset>
                    </div>
                    
                  </div>
                </form>
                <Button value="Send" ></Button>

              </div>
            </div>
          </div>
        
            </div>
        </div>
    )
}

export default contact
