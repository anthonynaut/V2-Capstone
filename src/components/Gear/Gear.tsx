import React from 'react';
import './css/css.css'

 
export const Gear = () => {
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

<a href="#" className="scrollup"> <i className="fa fa-chevron-up"> </i> </a>

            </div>
        </div>
    </div>
    )
}