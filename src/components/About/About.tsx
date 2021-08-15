import React from 'react';

export const About = () => {
    return (
        <div>
                              <div>
          		<div className="row ">
        <div className="medium-12 columns">
            </div>
                            {/* <!--Start Page loader --> */}
<div id="pageloader">   
 <div className="loader">
   <img src="assets/images/progress.gif" alt='loader' />
 </div>
</div>

{/* <!--End Page loader --> */}


{/* <!--Start Navigation--> */}
 <header id="header">
         <div className="container">
             <div className="row">
                 <div className="col-sm-12">
                     <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
                         <span className="sr-only">Toggle navigation</span>
                         <span className="fa fa-bars"></span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                     </button>
                     {/* <!--Start Logo --> */}
                     <div className="logo-nav">
                         <a href="/">
                             <img src="assets/images/logo.png" alt="Company logo" />
                         </a>
                     </div>
                     {/* <!--End Logo --> */}
                     <div className="clear-toggle"></div>
                     <div id="main-menu" className="collapse scroll navbar-right">
                         <ul className="nav">
                         
                             <li className="active"> <a href="/">Home</a> </li>
                             
                             <li> <a href="./Dashboard">Dashboard</a> </li>

                             <li> <a href="./Blades">Blades</a> </li>

                             <li> <a href="./Gear">Gear</a> </li>

                             <li> <a href="./NewArrivals">New Arrivals</a> </li>
                             
                             <li> <a href="./ComingSoon">Coming Soon</a> </li>
                                                         
                             <li> <a href="./services">Services</a> </li>
                                                                 
                             <li> <a href="./Shipping">Shipping</a> </li>        
                             
                             <li> <a href="./About">About</a> </li>

                             <li> <a href="./Blog">Blog</a></li>

                             <li> <a href="./Contact">Contact</a> </li>
                                 
                             <li> <a href="./SignIn">Sign In</a> </li>
                         </ul>
                     </div>
                     {/* <!-- end main-menu --> */}
                 </div>
             </div>
         </div>
     </header>
{/* <!--End Navigation--> */}



{/* <!-- Start Facts--> */}
  <section id="facts" className="section parallax">
    <div className="overlay"></div>
       <div className="container">
           <div className="row">
                  
                {/* <!-- Start Item--> */}
                <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                    <span><i className="icon-happy"></i></span>
                
                    </div>
                <body>
                
                <h2>Star Rating</h2>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                
                </body>
                
                
                    <h3>1,000+</h3>
                    <span>Positive Reviews</span>
                </div>
                {/* <!-- End Item--> */}
 
                 {/* <!-- Start Item--> */}
                <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                 <span><i className="icon-presentation"></i></span>
                    <h2>Trending</h2>
                    <h3>Most commended</h3>
                    <span>Balisong site for all skill levels</span>
                </div>
                {/* <!-- End Item--> */}

                 {/* <!-- Start Item--> */}
                <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                 <span><i className="icon-target"></i></span>
                    <h2>fast</h2>
                    <h3>On Time</h3>
                    <span>Order Processing</span>
                </div>  
                {/* <!-- End Item--> */}

                 {/* <!-- Start Item--> */}
                <div className="col-md-3 col-sm-6 facts-box margin-bottom-30">
                 <span><i className="icon-trophy"></i></span>
                    <h2>Gauranteed</h2>
                    <h3>Satisfaction</h3>
                    <span>Or your money back</span>
                </div>
                {/* <!-- End Item--> */}

             </div>
             </section>
              {/* <!-- /.row --> */}
       {/* <!-- /.container --> */}
  {/* <!--End Facts--> */}



{/* <!--Start About--> */}
  <section  id="about" className="section">
       <div className="container">
           <div className="row">
              
              <div className="col-md-4">
                  <div className="features-icon-box">
                  
                      <div className="features-icon">
                      <i className="fa fa-leaf"></i>
                      </div>
                      
                      <div className="features-info">
                         <h4>By The Balisong Community, for the Balisong Community. Period.</h4>
                         <p>At Latchless we care about  you. We ensure to get the best of the best into our customers hands by providing accessability to top tier Balisongs for a more affordable price.</p>
                      </div>
                  </div>
              </div>
 
              <div className="col-md-4">
                  <div className="features-icon-box">
                  
                      <div className="features-icon">
                      <i className="fa fa-paper-plane"></i>
                      </div>
                      
                      <div className="features-info">
                         <h4>We put in as much as we get back</h4>
                         <p> The profits from everything sold is put back into the company in order to improve customer experience. We do this to secure our position as the best discounted, budget, wallet friendly Balisong store on the internet. </p>
                      </div>
                  </div>
              </div>

             

              <div className="col-md-4">
                  <div className="features-icon-box">
                  
                      <div className="features-icon">
                     <i className="fa fa-line-chart"></i>
                      </div>
                      
                      <div className="features-info">
                         <h4>Can't Beat The Quality, Especially For The Price!</h4>
                         <p>Ever wanted to buy your dream Balisong? Ever wanted to get a solid starter budget friendly Balisong? Does your CCC (Cheap Chinese Crap) suck n' keep cutting you, and are looking for an upgrade? <b>We've Got You Covered</b>. Compared to Other competitors that sell their substandard junk 💩 with intentions to maximize profits off you, although they may be able to beat the price they sure as hell can't beat our Quality! Although, that cutting part we can't help you with. That's on you 🤷‍♂️. But if you buy from us atleast you'll look cool doing it 😎. Sorry not sorry.</p>
                      </div>
                  </div>
              </div>

           
              
           </div> 
       
       </div>
   
  </section> 





  <div>
 {/* <!--Start Footer--> */}
   <footer>
       <div className="container">
           <div className="row">
             
               <div className="col-md-6 col-sm-6 col-xs-6">
                   <div className="copyright"><p>Latchless © 2021 <a href="/">Home</a>
                 </p></div>
               </div>
         
               
               {/* <!--start social icons--> */}
               <div className="col-md-6 col-sm-6 col-xs-6">
                   <div className="social-icons">
                       <ul>
                        <li><a href="https://www.facebook.com/profile.php?id=100070715876208"><i className="fa fa-facebook"></i></a></li>
                        <li> <a href="https://twitter.com/naut_v"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/anthony-naut-a14b081b5/"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="https://www.instagram.com/built_to_last_v2/"><i className="fa fa-instagram"></i></a></li>
                       </ul>
                    </div>
               </div>
               {/* <!--End social icons--> */}
           </div> 
           {/* <!-- /.row--> */}
       </div> 
       {/* <!-- /.container--> */}
   </footer>
   {/* <!--End Footer--> */}
            </div>






<a href="#" className="scrollup"> <i className="fa fa-chevron-up"> </i> </a>

            </div>
        </div>
    </div>
    )
}