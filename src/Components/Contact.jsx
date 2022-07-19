import React, { Component } from 'react'
import contact from '../Components/public/image/contactlogo.jpg';
import mailme from '../Components/public/image/mailmeimg.jpg';


class Contact extends Component {
    render() {
        return (
            <section className="container-1">

                <img id="contactimg" src={contact} width="180" height="180" alt="contactlogo"/>
                <h3> <strong>Marquita Matney</strong></h3>
                <h4>Please, feel free to browse my site in hope's you will use my services!</h4>
                <h4>Email Id: marquita.matney@gmail.com</h4>
                <a id="mail"href="https://mail.google.com/mail/?view=cm&fs=1&to=marquita.matney@gmail.com"><img id="mailmelogo" src={mailme} alt="mail me"/>Click Here To Send Mail</a>
                <h4>Mobile: 404/313-2602</h4>

                
                
                        <a href="https://www.facebook.com/marquita.braymatney">
                        <span className="icon fa fa-facebook" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://twitter.com/marquita_matney" >
                                <span className="icon fa fa-twitter"  style={{color:'antiquewhite'}}></span>
                        </a>
                        <a href="https://github.com/mmatney2">
                                <span className="icon fa fa-github" style={{color:'antiquewhite'}} ></span>
                        </a>
                        <a href="https://www.linkedin.com/in/marquitamatney/">
                                <span className="icon fa fa-linkedin-square"  style={{color:'antiquewhite'}}></span>
                        </a>
                        {/* <a href="https://techstud105blog.wordpress.com/">
                                <span className="icon fa fa-wordpress" style={{color:'antiquewhite'}}></span>
                        </a> */}
                
            </section>
        )
    }
}

export default Contact