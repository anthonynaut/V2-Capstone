import React, {Component} from 'react';

class Footer extends React.Component{
    render(){
        return(
            <div>
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
            </div>
        )
    }
}
export default Footer;