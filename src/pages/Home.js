import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
            
		<div className="row ">
	           <div className="medium-12 columns">
                   </div>
                                   {/* <!--Start Page loader --> */}
  <div id="pageloader">   
        <div class="loader">
          <img src="assets/images/progress.gif" alt='loader' />
        </div>
   </div>

   {/* <!--End Page loader --> */}
   
      
   {/* <!--Start Navigation--> */}
		<header id="header">
				<div class="container">
					<div class="row">
						<div class="col-sm-12">
							<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-menu">
								<span class="sr-only">Toggle navigation</span>
								<span class="fa fa-bars"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
                            {/* <!--Start Logo --> */}
							<div class="logo-nav">
								<a href="index.html">
									<img src="assets/images/logo.png" alt="Company logo" />
								</a>
							</div>
                            {/* <!--End Logo --> */}
							<div class="clear-toggle"></div>
							<div id="main-menu" class="collapse scroll navbar-right">
								<ul class="nav">
                                
									<li class="active"> <a href="#home">Home</a> </li>
									
									<li> <a href="#about">About</a> </li>
                                    
                                    <li> <a href="#history">Shipping</a> </li>
                                    
                                    <li> <a href="#works">Our Work</a> </li>
                                   
								    <li> <a href="#services">Services</a> </li>
																		
									<li> <a href="#blog">Blog</a></li>
                                                                         
									<li> <a href="#contact">Contact</a> </li>
										
								</ul>
							</div>
                            {/* <!-- end main-menu --> */}
						</div>
					</div>
				</div>
			</header>
    {/* <!--End Navigation--> */}

    
        {/* <!-- Start Slider  --> */}
        <section id="home" class="home">
             <div class="slider-overlay"></div>
            <div class="flexslider">
                <ul class="slides scroll">
                    <li class="first">
                        <div class="slider-text-wrapper">  
                            <div class="container">
                                <div class="big"> Join The Community!</div>          
                                <div class="small">Show Us What You've Got!</div>
                                <a href="https://www.reddit.com/r/balisong/" class="middle btn btn-white">r/balisong</a>
                            </div>       
                        </div>
                        <img src="assets/images/slider/community1.gif" alt=""/>
                    </li>
                    
                    <li class="secondary">
                        <div class="slider-text-wrapper"> 
                            <div class="container">                       
                                <div class="big">Get Started!</div>          
                                <div class="small">Browse Our Broad Collection Of Balisongs Made By Flippers, For Flippers!</div>
                                <a href="#works" class=" middle btn btn-white">Shop Now 👀</a>
                            </div>
                         </div>
                        <img src="assets/images/slider/collection1.jpg" alt=""/>
                    </li>
                    
                    <li class="third">
                        <div class="slider-text-wrapper"> 
                            <div class="container">                              
                                <div class="big">Highest Of Quality, Refined and Built with purpose.</div>          
                                <div class="small">Customer Satisfaction Guarantee Or Your Money Back!</div>
                                <a href="#works" class="middle btn btn-white">Shop Now👏</a>
                             </div>
                        </div>
                        <img src="assets/images/slider/brsrep_wood.jpg" alt=""/>
                    </li>
                </ul>
            </div>
        </section>
          {/* <!-- End Slider  --> */}


  <section id="video" class="section parallax">
        <div class="overlay"></div>
       <div class="container">
           <div class="row">
           
                 <div class="title-box text-center white">
                    <h2 class="title">Video</h2>
                 </div>
             
             <div class="col-md-6">
                 <div class="video-caption-main">
                      {/* <!--Video caption #1--> */}
                      <div class="video-caption">
                          <div class="video-icon">
                              <i class="fa fa-briefcase"></i>
                          </div>
                          <div class="video-caption-info">
                              <h4>Take a look at  this video to see how we work.</h4>
                              <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                          </div>
                      </div>
                      
                       {/* <!--Video caption #2--> */}
                      <div class="video-caption">
                          <div class="video-icon">
                              <i class="fa fa-glass"></i>
                          </div>
                          <div class="video-caption-info">
                              <h4>The programming language of ios apps</h4>
                              <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                          </div>
                      </div>

                      {/* <!--Video caption #3--> */}
                      <div class="video-caption">
                          <div class="video-icon">
                              <i class="fa fa-rocket "></i>
                          </div>
                          <div class="video-caption-info">
                              <h4>Take a look at  this video to see how we work.</h4>
                              <p>Lorem ipsum dolor consectetur adipisicing incididunt eiusmod tempor incididunt laboredolore magna aliqua.</p>
                          </div>
                      </div>
                      
                 </div>
             </div>
            {/* <!-- End Video caption--> */}
             
            <div class="col-md-6">
                <div class="play-video">
                  <iframe src="http://player.vimeo.com/video/115919099?title=0&amp;byline=0&amp;portrait=0&amp;color=fff" allowfullscreen></iframe>
                </div>
            </div> 
               
           </div>
            {/* <!-- /.row--> */}
       </div> 
       {/* <!-- /.container--> */}
  </section>
  {/* <!--End video--> */}


   <a href="#" class="scrollup"> <i class="fa fa-chevron-up"> </i> </a>

            </div>
        );
    }
}
export default Home;