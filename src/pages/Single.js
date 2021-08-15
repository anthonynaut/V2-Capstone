import React, {Component} from 'react';
class Single extends React.Component {
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
                                
									<li class="active"> <a href="index.html">Home</a> </li>
									
									<li> <a href="index.html#about">About</a> </li>
                                    
                                    <li> <a href="index.html#history">History</a> </li>
                                    
                                    <li> <a href="index.html#works">Our Work</a> </li>
                                    
                                     <li> <a href="index.html#team">Team</a> </li>
                                   
								    <li> <a href="index.html#services">Services</a> </li>
																		
									<li> <a href="index.html#blog">Blog</a></li>
                                    
                                    <li> <a href="index.html#testimonials">Testimonials</a></li>
                                     
									<li> <a href="index.html#contact">Contact</a> </li>
										
								</ul>
							</div>
                            {/* <!-- end main-menu --> */}
						</div>
					</div>
				</div>
			</header>
    {/* <!--End Navigation--> */}

		{/* <!--start page-header --> */}
		<section id="page-header" class="parallax">
             <div class="overlay"></div>
			<div class="container">
				<h1>Single Work</h1>
                {/* <!--Start Breadcrumb--> */}
                <div class="breadcrumb">
					<ul>
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>
							<a href="index.html#works">Our Works</a>
						</li>
						<li class="current">
							<a href="pages/single-work.html">Project details</a>
						</li>
					</ul>
				</div>
              
                {/* <!--End Breadcrumb--> */}
			</div>
		</section>
		{/* <!--End page-header --> */}
		
		{/* <!--Start single-work --> */}
		<section id="single-work" class="section">
			<div class="container">
				<div class="row">					
					<div class="col-md-7">						
						<div id="single-work-slider" class="owl-carousel owl-theme">
							<div class="item"><img src="assets/images/works/img4.jpg" alt=""/></div>
							<div class="item"><img src="assets/images/works/img5.jpg" alt=""/></div>
							<div class="item"><img src="assets/images/works/img6.jpg" alt=""/></div>						 
						</div>	
					</div>
                    
                    {/* <!--Start Work Detail--> */}
					<div class="col-md-5 work-detail">
                            <h3 class="margin-bottom-15">Work Description </h3>	
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet. </p>					
						 
						<ul class="work-detail-list">
							<li><span>Category :</span>Business</li>
							<li><span>Client :</span>Newtheme</li>
							<li><span>Technoligies used :</span>HTML 5,CSS 3</li>
                            <li><span>Tags :</span>Photography, Branding, Wordpress</li>
							<li><span>Date released :</span>January 22, 2015</li>
						</ul>
                        
                        <a href="#" class="btn btn-gray-border">Visit website</a>
                        
					</div>
                    {/* <!--End Work Detail--> */}
				</div>
                 {/* <!--/ row--> */}
			</div> 
            {/* <!--/ container-->		 */}
		</section>
		{/* <!--End single-work --> */}
		
	{/* <!--related works --> */}
	<section id="featured-works" class="section parallax">
       <div class="container">
           <div class="row">
               
                <h3 class="margin-bottom-50">Related Projects</h3>
                   
           </div>
       </div> 
       
      <div class="related-project-carousel owl-carousel">
            {/* <!-- Start Item--> */}
             <div class="item">
                 <div class="fworks-image">
                     <img src="assets/images/works/img1.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div class="hover-link">
                        <a href="#">
                            <i class="fa fa-link"></i>
                        </a>

                        <a href="assets/images/works/img1.jpg" class="popup-image">
                            <i class="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div class="featured-caption">
                         <h4>Project Title</h4>
                         <p>Design, Photography</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}
            
             {/* <!-- Start Item--> */}
             <div class="item">
                 <div class="fworks-image">
                     <img src="assets/images/works/img2.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div class="hover-link">
                        <a href="#">
                            <i class="fa fa-link"></i>
                        </a>

                        <a href="assets/images/works/img2.jpg" class="popup-image">
                            <i class="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div class="featured-caption">
                         <h4>Project Title</h4>
                         <p>Design, Photography</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div class="item">
                 <div class="fworks-image">
                     <img src="assets/images/works/img3.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div class="hover-link">
                        <a href="#">
                            <i class="fa fa-link"></i>
                        </a>

                        <a href="assets/images/works/img3.jpg" class="popup-image">
                            <i class="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div class="featured-caption">
                         <h4>Project Title</h4>
                         <p>Design, Photography</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div class="item">
                 <div class="fworks-image">
                     <img src="assets/images/works/img4.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div class="hover-link">
                        <a href="#">
                            <i class="fa fa-link"></i>
                        </a>

                        <a href="assets/images/works/img4.jpg" class="popup-image">
                            <i class="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div class="featured-caption">
                         <h4>Project Title</h4>
                         <p>Design, Photography</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div class="item">
                 <div class="fworks-image">
                     <img src="assets/images/works/img5.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div class="hover-link">
                        <a href="#">
                            <i class="fa fa-link"></i>
                        </a>

                        <a href="assets/images/works/img5/default.htm" class="popup-image">
                            <i class="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div class="featured-caption">
                         <h4>Project Title</h4>
                         <p>Design, Photography</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
            {/* <!-- End Item--> */}

            {/* <!-- Start Item--> */}
             <div class="item">
                 <div class="fworks-image">
                     <img src="assets/images/works/img6.jpg" alt=""/> 
                     
                     {/* <!--Hover link--> */}
                     <div class="hover-link">
                        <a href="#">
                            <i class="fa fa-link"></i>
                        </a>

                        <a href="assets/images/works/img6.jpg" class="popup-image">
                            <i class="fa fa-plus"></i>
                        </a>
                     </div>
                     {/* <!--End link--> */}
                     
                     {/* <!--Hover Caption--> */}
                     <div class="featured-caption">
                         <h4>Project Title</h4>
                         <p>Design, Photography</p>
                     </div>
                     {/* <!--End Caption--> */}
                     
                 </div>
             </div>
             {/* <!-- End Item--> */}
                 
          </div>
     </section>	
    {/* <!-- End related works --> */}


   {/* <!--Start Footer--> */}
   <footer>
       <div class="container">
           <div class="row">
               {/* <!--Start copyright--> */}
               <div class="col-md-6 col-sm-6 col-xs-6">
                   <div class="copyright"><p>Copyright © 2016 All Rights reserved by: <a href="http://templatestock.co">Template Stock</a>
                 </p></div>
               </div>
               {/* <!--End copyright--> */}
               
               {/* <!--start social icons--> */}
               <div class="col-md-6 col-sm-6 col-xs-6">
                   <div class="social-icons">
                       <ul>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
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

   <a href="#" class="scrollup"> <i class="fa fa-chevron-up"> </i> </a>
                </div>  
	     );
    }
}
export default Single;