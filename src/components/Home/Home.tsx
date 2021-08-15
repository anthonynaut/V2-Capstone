import React from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import './css/css.css'
interface Props{
    title: string;
}

export const Home = ( props:Props) => {

    // New classes variable code
    const classes = useStyles();

    return (
                
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


 {/* <!-- Start Slider  --> */}
 <section id="home" className="home">
      <div className="slider-overlay"></div>
     <div className="flexslider">
         <ul className="slides scroll">
             <li className="first">
                 <div className="slider-text-wrapper">  
                     <div className="container">
                         <div className="big"> Join The Community!</div>          
                         <div className="small">Show Us What You've Got!</div>
                         <a href="https://www.reddit.com/r/balisong/" className="middle btn btn-white">r/balisong</a>
                     </div>       
                 </div>
                 <img src="assets/images/slider/community1.gif" alt=""/>
             </li>
             
             <li className="secondary">
                 <div className="slider-text-wrapper"> 
                     <div className="container">                       
                         <div className="big">Get Started!</div>          
                         <div className="small">Browse Our Broad Collection Of Balisongs Made By Flippers, For Flippers!</div>
                         <a href="#works" className=" middle btn btn-white">Shop Now 👀</a>
                     </div>
                  </div>
                 <img src="assets/images/slider/collection1.jpg" alt=""/>
             </li>
             
             <li className="third">
                 <div className="slider-text-wrapper"> 
                     <div className="container">                              
                         <div className="big">Highest Of Quality, Refined and Built with purpose.</div>          
                         <div className="small">Customer Satisfaction Guarantee Or Your Money Back!</div>
                         <a href="#works" className="middle btn btn-white">Shop Now👏</a>
                      </div>
                 </div>
                 <img src="assets/images/slider/brsrep_wood.jpg" alt=""/>
             </li>
         </ul>
     </div>
 </section>
   {/* <!-- End Slider  --> */}



   {/* <!--Start Why Choose us--> */}
  <section id="why-choose" className="section">
       <div className="container">
           <div className="row">
           
                 <div className="title-box text-center">
                    <h2 className="title">What Makes Us So Different?</h2>
                 </div>
              
              {/* <!--start tabs--> */}
              <div className="col-md-6">
                  <div className="tabs tabs-main">
					<ul className="nav nav-tabs">
					  <li className="active"><a href="#one" data-toggle="tab">Company Goal</a></li>
					  <li><a href="#two" data-toggle="tab">About Me</a></li>
					  <li><a href="#three" data-toggle="tab">We Hear You</a></li>
					</ul>
					<div className="tab-content">

						{/* <!--Start Tab Item #1 --> */}
						<div className="tab-pane in active" id="one">
							<p>
                               We strive for perfection. All equipment and products are inspected upon arrival at our warehouses. After an order is placed, your order will undergo a 2nd inspection before shipping to assure you are getting exactly what you ordered.                              
							</p>
						</div>
						{/* <!-- End Tab --> */}

						{/* <!--Start Tab Item #2 --> */}
						<div className="tab-pane" id="two">
							<p>
                                I personally remember wanting to get into the hobby of Balisong collecting/flipping at the young age of 12 back in my middle school days, and all that was out there at the time for beginners were unnecessarily overpriced knives that were not only painful to obtain, but to maintain aswell. (I know, I wasn't the typical kid. I mean What kind of kid asks their parents for an outlawed skin splittin, stitch creatin, finger guillotine as thier christmas present? Definitely not me, I saved up and bought all of mines under the radar of course. I'm not that crazy.) But I did start off like any other novice you know, with a tight budget and soft hands 🗡🩸😵. Over time, I began despising the outragous premiums demanded by these knife companies. So ladies and gentleman, I present to you, Latchess! The most affordable Balisong merchant store on the internet!

							</p>
						</div>
						{/* <!-- End Tab --> */}

						{/* <!--Start Tab Item #3 --> */}
						<div className="tab-pane" id="three">
							<p>
                                We read all feedback that's posted about us on here and on social media. You can tag us by using #Latchless or leave us reviews, We love to hear back from you! It helps us a lot in terms of keeping this store relvant so we can continue to supply the community; Novices or Masters of the art alike with the finest leading brands for an affordable price.							</p>
						</div>
						{/* <!-- End Tab --> */}

					</div>
				</div>
              </div>
             {/* <!-- End Tabs--> */}
            
            {/* <!--Start Accordion--> */}
            <div className="col-md-6">
               <div className="panel-group accordion-main" id="accordion">
                       {/* <!--About accordion #1--> */}
				       <div className="panel">
                           <div className="panel-heading collapsed" data-toggle="collapse"
                            data-parent="#accordion" data-target="#collapseOne">
                          <h6 className="panel-title accordion-toggle">
                              Check Out Our Gear!
                          </h6>
                        </div>
					<div id="collapseOne" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>Insert coin to continue...
                            </p>
                                
                        </div>
					</div>
				  </div>
                  
                  {/* <!--About accordion #2--> */}
				  <div className="panel">
                       <div className="panel-heading collapsed" data-toggle="collapse"
                        data-parent="#accordion" data-target="#collapseTwo">
                      <h6 className="panel-title accordion-toggle">
                          is this?
                      </h6>
                       </div>
					<div id="collapseTwo" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p> Bye Wurld.
                            </p>
                        </div>
					</div>
				  </div>

                 {/* <!--About accordion #3--> */}
				  <div className="panel">
                      <div className="panel-heading collapsed" data-toggle="collapse"
                            data-parent="#accordion" data-target="#collapseThree">
                          <h6 className="panel-title accordion-toggle">
                              filler text 4 now listen to lorem ipsums dollas $$$
                          </h6>
                        </div>
					<div id="collapseThree" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non blandit nibh. Sed eget tortor tincidunt, auctor sem eget, mollis nisi. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor fusce diam ornare.
                            </p>
                                
                        </div>
					</div>
				  </div>

                {/* <!--About accordion #4--> */}
				 <div className="panel">
                     <div className="panel-heading collapsed" data-toggle="collapse"
                            data-parent="#accordion" data-target="#collapseFour">
                          <h6 className="panel-title accordion-toggle">
                              this is.
                          </h6>
                        </div>
					<div id="collapseFour" className="panel-collapse collapse">
                            <div className="panel-body">
                                <p>Hello Wurld.
                            </p>
                        </div>
					</div>
				  </div>
				</div>
            </div>
            {/* <!--End Accordion--> */}
              
           </div> 
           {/* <!--/.row--> */}
       </div>
        {/* <!--/.container--> */}
  </section>
  {/* <!--End Why Choose us--> */}





<section id="video" className="section parallax">
 <div className="overlay"></div>
<div className="container">
    <div className="row">
    
          <div className="title-box text-center white">
             <h2 className="title">Video</h2>
          </div>
      
      <div className="col-md-6">
          <div className="video-caption-main">

               {/* <!--Video caption #3--> */}
               <div className="video-caption">
                   <div className="video-icon">
                       <i className="fa fa-rocket "></i>
                   </div>
                   <div className="video-caption-info">
                       <h4>Don't know how to flip but want to learn?</h4>
                       <p>First, check out how good you could be at flipping! This could be you! Click <a href='/Blog'>here to Learn More.</a></p>
                   </div>
               </div>
               
          </div>
      </div>
     {/* <!-- End Video caption--> */}
      
     <div className="col-md-6">
         <div className="play-video">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/djJjJeCMLKg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
         </div>
     </div> 
        
    </div>
     {/* <!-- /.row--> */}
</div> 
{/* <!-- /.container--> */}
</section>
{/* <!--End video--> */}

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
<a href="/" className="scrollup"> <i className="fa fa-chevron-up"> </i> </a>

     </div>
    )
}
const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    },
    main: {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white'
    }
    
})