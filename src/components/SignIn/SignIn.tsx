import React, {useState} from 'react';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../sharedComponents/Input';
import { Container, Button, makeStyles, Typography, Snackbar,  } from '@material-ui/core';
import { RouteComponentProps, withRouter } from "react-router-dom";
// import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

export const SignIn = () => {
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


{/* 
{/* // Functional Component Created inside of this component
// Will only be used to close snackbar */}
 {/* const Alert = (props:AlertProps) => {  */}
{/* //     return <MuiAlert elevation={6} variant='filled' {...props} />;
// }



// const useStyles = makeStyles({ */}
{/* {/* //     googleButton:{ 
//         backgroundColor: 'rgb(66,133,244)',
//         marginTop: '2em',
//         padding: '0',
//         color: 'white',
//         height: '50px',
//         width: '240px',
//         border: 'none',
//         textAlign: 'center',
//         boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
//         fontSize: '16px',
//         lineHeight: '48px',
//         display: 'block',
//         borderRadius: '1px',
//         fontFamily: 'Roboto, arial, sans-serif',
//         cursor: 'pointer'
//     }, */}
{/* //     googleLogo:{
//         width: '48px',
//         height: '48px',
//         display: 'block'
//     },
//     typographyStyle: {
//         fontFamily: 'Roboto, arial, sans-serif;',
//         textAlign: 'center',
//         fontSize: '2em'
//     },
//     containerStyle: {
//         marginTop: '2em'
//     },
//     snackBar: {
//         color: 'white',
//         backgroundColor: '#4caf50'
//     }

// })

// interface SignInProps{
//     history: RouteComponentProps["history"];
//     location: RouteComponentProps['location'];
//     match: RouteComponentProps['match'];
//   }

// export const SignIn = withRouter( (props:SignInProps) => {

//     const auth = useAuth();
//     const classes = useStyles();
//     const { history } = props
//     const [open, setOpen] = useState(false);

//     const handleSnackOpen = () => {
//         setOpen(true)
//     }

//     const handleSnackClose = (event?: React.SyntheticEvent, reason?:string) => {
//         if(reason === 'clickaway'){
//             return;
//         }

//         setOpen(false)
//         history.push('/')
//     }

    // const sign_in = async () => {
    //    const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider()); */}
    {/* //    if(response.user){
    //        handleSnackOpen()
    //    }
    // };

    // const sign_out = async () => {
    //     await auth.signOut();
    // }

    // return (
    //     <div>
    //         <Container maxWidth = 'sm' className={classes.containerStyle}>
    //             <Typography className={classes.typographyStyle}>Sign In Below</Typography>
    //             <form>
    //             <div>
    //                 <label htmlFor="email">Email</label>
    //                 <Input  name="email" placeholder='Place Email Here' />
    //             </div>
    //             <div>
    //                 <label htmlFor="password">Password</label>
    //                 <Input  name="password" placeholder='Place Password Here' />
    //             </div>
    //             <Button type='submit' variant='contained' color='primary'>Submit</Button>
    //             </form>
                
    //             <AuthCheck fallback={
//                     <Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button>
//                 }>
//                     <Button variant='contained' color='secondary' onClick={sign_out}>Sign Out</Button>
//                 </AuthCheck>
//                 <Snackbar message={'Success'} open={open} autoHideDuration={6000} onClose={handleSnackClose}>
//                 <Alert onClose={handleSnackClose} severity="success">
//                     Successful Sign In - Redirect in 6 secs
//                 </Alert>
//                 </Snackbar>

//             </Container>
//         </div> */}
{/* //     )
// })  */}
<a href="#" className="scrollup"> <i className="fa fa-chevron-up"> </i> </a>

            </div>
        </div>
    </div>
  
    )
}