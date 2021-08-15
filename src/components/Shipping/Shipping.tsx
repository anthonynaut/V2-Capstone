import React from 'react';

export const Shipping = () => {
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



{/* <!--Start Shipping--> */}
    <section id="history" className="section parallax">
		<div className="overlay"></div>
            <div className="container">
                
                 <div className="title-box text-center white">
                    <h2 className="title">Shipping</h2>
                 </div>
                 
                     {/* <!--  Timeline --> */}
                    <ul className="timeline list-unstyled">
                        
                        <li className="year">OrderIn</li>
                        
                        {/* <!-- Item --> */}
                        <li className="timeline-item">
                            <h4>Once your order is recieved...</h4>
                            <p>Item will be processed through our systems while payment is pending. You may cancel your order within 48 hours for orders placed, once payment is recieved that 48 hour window reduces down to a 24 hours cancellation period.</p>
                            <span>Good Picks! </span>
                        </li>
                        {/* <!-- End Item --> */}
                        
                        {/* <!-- Item --> */}
                        <li className="timeline-item">
                            <h4> Payment processed!</h4>
                            <p>Your Order will undergo an inspection to ensure the item being recieved is as promised!</p>
                            <span>You've got to spend money to lose money.</span>
                        </li>
                        {/* <!-- End Item --> */}
                        
                      
                        <li className="year">Transit</li>
                        
                        
                        {/* <!-- Item --> */}
                        <li className="timeline-item">
                            <h4>Ready for shipping!</h4>
                            <p>Your Order is now ready to be packaged up and shipped! All paid orders are sent the very next business day (No weekends, unless you pay the extra to cover weekend shipping). You will then promptly be provided with your orders tracking info.</p>
                            <span>Ready to get this show on the road...</span>
                        </li>
                        {/* <!-- End Item --> */}
                        
                        {/* <!-- Item --> */}
                        <li className="timeline-item">
                            <h4>Stay Dot Calm</h4>
                            <p>I bet you can't wait to recieve your order. We Throw in extra goodies in there for everyorder placed! Free of Charge! You probably keep checking your phone for updates on the whereabouts of your package. Ha ha!</p>
                            <span>Patience is a Virtue!</span>
                        </li>
                        {/* <!-- End Item --> */}
                        
                         {/* <!-- Item --> */}
                        <li className="timeline-item">
                            <h4>Review Time!</h4>
                            <p>You now got your badass care package of symphonic destruction, now, what else is there to this process you ask? Well I certainly hope you haven't forgotten about us the moment you ran inside to get your unboxing knife, Leave us a review! It is the courteous thing to do!</p>
                            <span> Happy Customer! 😁</span>
                        </li>
                        {/* <!-- End Item --> */}
                        
                         <li className="clear"></li>
                        
                        <li className="end-icon fa fa-bookmark"></li>
                    </ul>
                   {/* <!-- End Timeline --> */}
                   
           </div> 
           {/* <!--/.container--> */}
	</section>
   {/* <!--End Shipping--> */}

<div>
 {/* <!--Start Footer--> */}
   <footer>
       <div className="container">
           <div className="row">
               {/* <!--Start copyright--> */}
               <div className="col-md-6 col-sm-6 col-xs-6">
                   <div className="copyright"><p>Latchless © 2021 <a href="/">Home</a>
                 </p></div>
               </div>
               {/* <!--End copyright--> */}
               
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