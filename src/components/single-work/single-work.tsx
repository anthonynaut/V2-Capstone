import React from 'react';

export const Single = () => {
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
{/* Where I would put the tutorial stuffs */}

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

{/* <!--start page-header --> */}
		<section id="page-header" className="parallax">
             <div className="overlay"></div>
			<div className="container">
				<h1>Single Work</h1>
                {/* <!--Start Breadcrumb--> */}
                <div className="breadcrumb">
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="index.html#works">Item</a>
						</li>
						<li className="current">
							<a href="single-work.html"> details</a>
						</li>
					</ul>
				</div>
                {/* <!--End Breadcrumb--> */}
			</div>
		</section>
		{/* <!--End page-header --> */}
		
		{/* <!--Start single-work --> */}
		<section id="single-work" className="section">
			<div className="container">
				<div className="row">					
					<div className="col-md-7">						
						<div id="single-work-slider" className="owl-carousel owl-theme">
							<div className="item"><img src="images/works/img4.jpg" alt=""/></div>
							<div className="item"><img src="images/works/img5.jpg" alt=""/></div>
							<div className="item"><img src="images/works/img6.jpg" alt=""/></div>						 
						</div>	
					</div>
                    
                    {/* <!--Start Work Detail--> */}
					<div className="col-md-5 work-detail">
                            <h3 className="margin-bottom-15"> Description </h3>	
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. </p>					
						 
						<ul className="work-detail-list">
							<li><span>Category :</span>blank</li>
							<li><span>Length :</span>blank</li>
							<li><span>Weight :</span>blank</li>
                            <li><span>Type :</span>Live blade</li>
							<li><span>Blade:</span>finish and blade type</li>
						</ul>
                        
                        <a href="/" className="btn btn-gray-border"></a>
                        
					</div>
                    {/* <!--End Work Detail--> */}
				</div>
                 {/* <!--/ row--> */}
                
			</div> 
            {/* <!--/ container-->		 */}
		</section>
		{/* <!--End single-work --> */}
		
	{/* <!-- --> */}
	<section id="featured" className="section parallax">
       <div className="container">
           <div className="row">
               
                <h3 className="margin-bottom-50">Related</h3>
                   
           </div>
       </div> 
       
      <div className="related-carousel owl-carousel">
            {/* <!-- Start Item--> */}
             <div className="item">
                 <div className="fworks-image">
                     <img src="images/works/img1.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div className="hover-link">
                        <a href="/">
                            <i className="fa fa-link"></i>
                        </a>

                        <a href="images/works/img1.jpg" className="popup-image">
                            <i className="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div className="featured-caption">
                         <h4>blank</h4>
                         <p>blank</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}
            
             {/* <!-- Start Item--> */}
             <div className="item">
                 <div className="fworks-image">
                     <img src="images/works/img2.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div className="hover-link">
                        <a href="/">
                            <i className="fa fa-link"></i>
                        </a>

                        <a href="images/works/img2.jpg" className="popup-image">
                            <i className="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div className="featured-caption">
                         <h4>blank</h4>
                         <p>blank</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div className="item">
                 <div className="fworks-image">
                     <img src="images/works/img3.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div className="hover-link">
                        <a href="/">
                            <i className="fa fa-link"></i>
                        </a>

                        <a href="images/works/img3.jpg" className="popup-image">
                            <i className="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div className="featured-caption">
                         <h4>blank</h4>
                         <p>blank</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div className="item">
                 <div className="fworks-image">
                     <img src="images/works/img4.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div className="hover-link">
                        <a href="/">
                            <i className="fa fa-link"></i>
                        </a>

                        <a href="images/works/img4.jpg" className="popup-image">
                            <i className="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div className="featured-caption">
                         <h4>blank</h4>
                         <p>blank</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div className="item">
                 <div className="fworks-image">
                     <img src="images/works/img5.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div className="hover-link">
                        <a href="/">
                            <i className="fa fa-link"></i>
                        </a>

                        <a href="images/works/img5/default.htm" className="popup-image">
                            <i className="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div className="featured-caption">
                         <h4>blank</h4>
                         <p>blank</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div className="item">
                 <div className="fworks-image">
                     <img src="images/works/img6.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div className="hover-link">
                        <a href="/">
                            <i className="fa fa-link"></i>
                        </a>

                        <a href="images/works/img6.jpg" className="popup-image">
                            <i className="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div className="featured-caption">
                         <h4>blank</h4>
                         <p>blank</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
             {/* <!-- End Item--> */}
                 
          </div>
     </section>	
    {/* <!-- End related works --> */}


 



<a href="/" className="scrollup"> <i className="fa fa-chevron-up"> </i> </a>

            </div>
        </div>
    </div>       

    )
}