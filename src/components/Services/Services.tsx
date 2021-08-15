import React from 'react';

export const Services  = () => {
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





{/* <!--Start Services--> */}
   <section id="services" className="section">
        <div className="container">
            <div className="row">
            
                 <div className="title-box text-center">
                    <h2 className="title">Servicios</h2>
                 </div>
              
      
               <div className="col-md-4">
                   <div className="services-box">
                       <div className="services-icon"> <i className="icon-basket"></i> </div> 
                       <div className="services-desc">
                          <h4>4h</h4>
                          <p>this is 4h P</p>
                       </div>
                   </div>
               </div>
                  
       
               <div className="col-md-4">
                   <div className="services-box">
                       <div className="services-icon"> <i className="icon-shield"></i> </div> 
                       <div className="services-desc">
                          <h4>h4</h4>
                          <p>this is h4 P</p>
                       </div>
                   </div>
               </div>
        
               
     
               <div className="col-md-4">
                   <div className="services-box">
                       <div className="services-icon"> <i className="icon-hotairballoon"></i> </div> 
                       <div className="services-desc">
                          <h4>Crud for reviews and feedback?</h4>
                          <p>YES!</p>
                       </div>
                   </div>
               </div>
         

               <div className="col-md-4">
                   <div className="services-box">
                       <div className="services-icon"> <i className="icon-global"></i> </div> 
                       <div className="services-desc">
                          <h4>Filler text</h4>
                          <p>Lorem ipsum's dollars blah blah blah</p>
                       </div>
                   </div>
               </div>
    
               
    
               <div className="col-md-4">
                   <div className="services-box">
                       <div className="services-icon"> <i className="icon-target"></i> </div> 
                       <div className="services-desc">
                          <h4>say something nice</h4>
                          <p>blah</p>
                       </div>
                   </div>
               </div>

              
         
               <div className="col-md-4">
                   <div className="services-box">
                       <div className="services-icon"> <i className="icon-aperture"></i> </div> 
                       <div className="services-desc">
                          <h4>Suhh</h4>
                          <p>Blee </p>
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