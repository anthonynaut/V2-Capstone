import React from 'react';
import Button from '@material-ui/core/Button';
import './css/style.css';

export const Blades  = () => {
    return (
        <div>
          		<div className="row ">
        <div className="medium-12 columns">
            </div>
                            {/* <!--Start Page loader --> */}
<div id="pageloader">   
 <div className="loader">
   <img src="../../../assets/images/progress.gif" alt='loader' />
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
                             <img src="../../../assets/images/logo.png" alt="Company logo" />
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



{/* <!--Start Blades Sort--> */}
   <section id="works" className="section">
				{/* <!-- Filtering --> */}
                  <div className="title-box text-center">
                    <h2 className="title">Blades</h2>
                 </div>


					<div className=" col-md-12 text-center">
						{/* <!-- Filtering --> */}
						<ul className="filtering">
							<li className="filter" data-filter="all">All</li>
							<li className="filter" data-filter="fashion">Live Blades</li>
							<li className="filter" data-filter="event">Trainers</li>
							<li className="filter" data-filter="wedding">Entry Level</li>
                            <li className="filter" data-filter="corporate">Fan favorite</li>
							<li className="filter" data-filter="corporate">Master</li>
						</ul>
					</div>
                
				<div className="work-main">
					{/* <!-- Work Grid --> */}
					<ul className="work-grid">
						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix corporate">
							<div className="work-image">
                                <img src="../../../assets/images/works/img1.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-works">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="assets/images/works/img1.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}
                        
						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix fashion wedding">
							<div className="work-image">
                                <img src="../../../assets/images/works/img2.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img2.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}
                        
						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix corporate">
							<div className="work-image">
                                <img src="../../../assets/images/works/img3.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                   <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img3.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix corporate">
							<div className="work-image">
                                <img src="../../../assets/images/works/img4.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img4.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>stuff</h4>
                                     <p>stuff</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}
                        
						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix fashion wedding">
							<div className="work-image">
                                <img src="../../../assets/images/works/img5.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img5.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>stuff</h4>
                                     <p>stuff</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}
						
						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix event wedding">
							<div className="work-image">
                                <img src="../../../assets/images/works/img6.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img6.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix event">
							<div className="work-image">
                                <img src="../../../assets/images/works/img7.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img7.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div>
                             {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix corporate">
							<div className="work-image">
                                <img src="../../../assets/images/works/img8.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img8.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div>
                             {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix event">
							<div className="work-image">
                                <img src="../../../assets/images/works/img9.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img9.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix wedding">
							<div className="work-image">
                                <img src="../../../assets/images/works/img10.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img10.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div>
                             {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="../../../assets/work-item thumnail-img mix fashion">
							<div className="work-image">
                                <img src="../../../assets/images/works/img11.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img11.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div> 
                            {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}

						{/* <!-- Work Item --> */}
						<li className="work-item thumnail-img mix corporate">
							<div className="work-image">
                                <img src="../../../assets/images/works/img12.jpg" alt="thumbnail"/>
                                
                                 {/* <!--Hover link--> */}
                                 <div className="hover-link">
                                    <a href="../single-work">
                                        <i className="fa fa-link"></i>
                                    </a>
        
                                    <a href="../../../assets/images/works/img12.jpg" className="popup-image">
                                        <i className="fa fa-plus"></i>
                                    </a>
                                 </div>
                                 {/* <!--End link--> */}

                                 {/* <!--Hover Caption--> */}
                                 <div className="work-caption">
                                     <h4>blank</h4>
                                     <p>blank</p>
                                 </div>
                                 {/* <!--End Caption--> */}

                            </div>
                             {/* <!-- /.work-image--> */}
						</li> 
						{/* <!--End Work Item --> */}
					</ul>
                    
				</div>
			</section>
  
 
<a href="#" className="scrollup"> <i className="fa fa-chevron-up"> </i> </a>

            </div>
        </div>
    )
}