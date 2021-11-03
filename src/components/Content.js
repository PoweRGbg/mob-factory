import logo from '../logo.svg';
import SliderNav from './SliderNav';
import Card from './Card';

export default function Content (){
 return (    
    <div className="cd-hero">

    <SliderNav />

      <ul className="cd-hero-slider">

          <li className="selected">
              <div className="cd-full-width">
                  <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="1">
                      <div className="row">
                              <div className="tm-3-col-container">                                        
                                      <Card />
                                      {/* <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
                                          <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                                              <i className="fa fa-4x fa-bicycle tm-home-fa"></i>
                                              <h2 className="tm-text-title">Welcome!</h2>
                                              <p className="tm-text">There are 3 different gallaries in this template. You can customize them in any suitable way you prefer. You can also modify the content columns as you wish. Images are from Unsplash website. Good Luck!</p>
                                          </div>          
                                      </div>
                                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 tm-3-col-textbox">
                                          <div className="text-xs-left tm-textbox tm-textbox-padding tm-bg-white-translucent tm-3-col-textbox-inner">
                                              <i className="fa fa-4x fa-plane tm-home-fa"></i>
                                              <h2 className="tm-text-title">Stay relaxed</h2>
                                              <p className="tm-text">You can easily change icons in HTML codes by <a href="http://fontawesome.io/icons/" target="_parent">Font Awesome</a>. Praesent tempus dapibus. Curabitur sodales, est auctor congue vulputate, nisl tellus finibus nunc, vitae consectetur enim.</p>
                                          </div>          
                                      </div>                                         */}
                              </div>
                      </div>
                  </div>
              </div>
          </li>
          {/* <li>                    
              <div className="cd-full-width">
                  <div className="container-fluid js-tm-page-content" data-page-no="2" data-page-type="gallery">
                      <div className="tm-img-gallery-container">
                          <div className="tm-img-gallery gallery-one">
                              <div className="tm-img-gallery-info-container">                                    
                                  <h2 className="tm-text-title tm-gallery-title tm-white"><span className="tm-white">First Image Gallery</span></h2>
                                  <p className="tm-text">Curabitur quis tellus sed orci rhoncus fermentum. Praesent sollicitudin scelerisque nunc et vehicula. Sed ex magna, elementum ut volutpat ut, vehicula quis metus.
                                  </p>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-01-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Image <span>One</span></h2>
                                          <p className="tm-figure-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                          <a href="img/tm-img-01.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-02-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Image <span>Two</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-02.jpg">View more</a>
                                      </figcaption>
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-03-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Image <span>Three</span></h2>
                                          <p className="tm-figure-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                          <a href="img/tm-img-03.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-04-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Image <span>Four</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-04.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>                                                                          
                          </div>                                 
                      </div>
                  </div>                                                    
              </div>                    
          </li> */}

          {/* <li>                    
              <div className="cd-full-width">
                  <div className="container-fluid js-tm-page-content" data-page-no="3" data-page-type="gallery">
                      <div className="tm-img-gallery-container tm-img-gallery-container-2">
                          <div className="tm-img-gallery gallery-two">
                              
                              <div className="tm-img-gallery-info-container">                                    
                                  <h2 className="tm-text-title tm-gallery-title"><span className="tm-white">Second Gallery</span></h2>
                                  <p className="tm-text"><span className="tm-white">Aenean nulla lorem, laoreet eu nibh et, lacinia ullamcorper dui. Nullam ut tincidunt odio. Morbi accumsan diam vel enim cursus, in dapibus eros tristique.</span>
                                  </p>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-05-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>One</span></h2>
                                          <p className="tm-figure-description">Suspendisse id placerat risus. Mauris quis luctus risus.</p>
                                          <a href="img/tm-img-05.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-06-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Two</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-06.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-07-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Three</span></h2>
                                          <p className="tm-figure-description">Suspendisse id placerat risus. Mauris quis luctus risus.</p>
                                          <a href="img/tm-img-07.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-08-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Four</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-08.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-09-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Five</span></h2>
                                          <p className="tm-figure-description">Suspendisse id placerat risus. Mauris quis luctus risus.</p>
                                          <a href="img/tm-img-09.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-10-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Six</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-10.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>  
                          </div>                                 
                      </div>
                  </div>                      
              </div>
          </li>

          <li>
              <div className="cd-full-width">
                  <div className="container-fluid js-tm-page-content" data-page-no="4" data-page-type="gallery">                        
                      <div className="tm-img-gallery-container tm-img-gallery-container-3">
                          <div className="tm-img-gallery gallery-three">
                              
                              <div className="tm-img-gallery-info-container">                                    
                                  <h2 className="tm-text-title tm-gallery-title"><span className="tm-white">Third Image Grid</span></h2>
                                  <p className="tm-text"><span className="tm-white">Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Maecenas purus sem, lobortis id odio in, ultrices scelerisque sapien.</span>
                                  </p>                                     
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-11-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>One</span></h2>
                                          <p className="tm-figure-description">Suspendisse id placerat risus. Mauris quis luctus risus.</p>
                                          <a href="img/tm-img-11.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-12-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Two</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-12.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-13-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Three</span></h2>
                                          <p className="tm-figure-description">Suspendisse id placerat risus. Mauris quis luctus risus.</p>
                                          <a href="img/tm-img-13.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-14-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Four</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-14.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-15-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Five</span></h2>
                                          <p className="tm-figure-description">Suspendisse id placerat risus. Mauris quis luctus risus.</p>
                                          <a href="img/tm-img-15.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>
                              <div className="grid-item">
                                  <figure className="effect-ruby">
                                      <img src="img/tm-img-16-tn.jpg" alt="Image" className="img-fluid tm-img"></img>
                                      <figcaption>
                                          <h2 className="tm-figure-title">Picture <span>Six</span></h2>
                                          <p className="tm-figure-description">Maecenas purus sem, lobortis id odio in sapien.</p>
                                          <a href="img/tm-img-16.jpg">View more</a>
                                      </figcaption>           
                                  </figure>
                              </div>                                                                                                 
                          </div>                                 
                      </div> 
                  </div>         
              </div>  
          </li>

          <li>
              <div className="cd-full-width">
                  <div className="container-fluid js-tm-page-content tm-page-width" data-page-no="5">
                      <div className="row">
                          <div className="col-xs-12">
                              <div className="tm-flex">
                                  <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-textbox-padding tm-white-box-margin-b">
                                      <h2 className="tm-text-title">Lorem ipsum dolor</h2>
                                      <p className="tm-text">Nulla efficitur, ligula et imperdiet volutpat, lacus tortor tempus massa, eget tempus quam nibh vel nulla. Vivamus non molestie leo, non tincidunt diam. Mauris sagittis elit in velit ultricies aliquet sed in magna. Pellentesque semper, est nec consequat viverra, sem augue tincidunt nisi, a posuere nisi sapien sed sapien. Nulla facilisi.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="row">
                          <div className="col-xs-12">
                              <div className="tm-flex">
                                  <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                                      <h2 className="tm-text-title">Nulla facilisi</h2>
                                      <p className="tm-text">Donec vitae bibendum est, et ultrices urna. Curabitur ac bibendum augue, a convallis mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ultrices placerat arcu.</p>
                                  </div>
                                  <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding">
                                      <h2 className="tm-text-title">Aliquam sem sem</h2>
                                      <p className="tm-text">Proin sagittis mauris dolor, vel efficitur lectus dictum nec. Sed ultrices placerat arcu, id malesuada metus cursus suscipit. Donex quis consectetur ligula. Proin accumsan eros id nisi porttitor, a facilisis quam cursus.</p>     
                                  </div>
                              </div>
                          </div>
                      </div>                        
                  </div>              
              </div> 

          </li>

          <li>
              <div className="cd-full-width">
                  <div className="container-fluid js-tm-page-content tm-page-pad" data-page-no="6">
                      <div className="tm-contact-page">                                
                          <div className="row">
                              <div className="col-xs-12">
                                  <div className="tm-flex tm-contact-container">                                
                                      <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                                          <h2 className="tm-contact-info">Contact Us</h2>
                                          <p className="tm-text">Praesent tempus dapibus odio nec elementum. Sed elementum est quis tortor faucibus, et molestie nibh finibus. Mauris condimentum ex vestibulum fringilla consectetur.</p>                                                
                                          
                                          <form action="index.html" method="post" className="tm-contact-form">

                                              <div className="form-group">
                                                  <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name"  required/>
                                              </div>
                                  
                                              <div className="form-group">                                                        
                                                  <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email"  required/>
                                              </div>                                                        
                                              
                                              <div className="form-group">
                                                  <textarea id="contact_message" name="contact_message" className="form-control" rows="5" placeholder="Your message" required></textarea>
                                              </div> 

                                              <button type="submit" className="pull-xs-right tm-submit-btn">Send</button>  
                                          
                                          </form>  
                                      </div>

                                      <div className="tm-bg-white-translucent text-xs-left tm-textbox tm-2-col-textbox-2 tm-textbox-padding tm-textbox-padding-contact">
                                          <h2 className="tm-contact-info">123 New Street 11000, San Francisco, CA</h2>
                                          <div id="google-map"></div>
                                      </div>

                                  </div>

                              </div>

                          </div>

                      </div>    

                  </div>
                  
              </div> 
          </li> */}
      </ul> 

      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
      
      <footer className="tm-footer">
      
          <div className="tm-social-icons-container text-xs-center">
              <a href="#" className="tm-social-link"><i className="fa fa-facebook"></i></a>
              <a href="#" className="tm-social-link"><i className="fa fa-google-plus"></i></a>
              <a href="#" className="tm-social-link"><i className="fa fa-twitter"></i></a>
              <a href="#" className="tm-social-link"><i className="fa fa-behance"></i></a>
              <a href="#" className="tm-social-link"><i className="fa fa-linkedin"></i></a>
          </div>
          
          <p className="tm-copyright-text">Copyright &copy; 2016 Your Company 
          
          - Design: <a rel="nofollow" href="http://www.templatemo.com/page/1" className="tm-footer-link" target="_parent">Templatemo</a></p>

      </footer>
              
  </div> );
};