import React from 'react'
import IcTwitter from "../../../images/icons/twitter.svg";
import IcFacebook from "../../../images/icons/facebook.svg";
import IcWeb from "../../../images/icons/web.svg";
import IcInstagram from "../../../images/icons/instagram.svg";
import IcLinkedin from "../../../images/icons/linkedin.svg";

import "./Social.scss"

const socialMedia = [
    {
        icon:<IcTwitter/>,
        link: "https://twitter.com/gcruzrios",
    },
    {
        icon:<IcFacebook/>,
        link: "https://facebook.com/gcruzrios",
    },
    {
        icon:<IcInstagram/>,
        link: "https://instagram/gcruzrios",
    },
    {
        icon:<IcLinkedin/>,
        link: "https://linkedin.com/gcruzrios",
    },
    {
        icon:<IcWeb/>,
        link: "https://greivin.net",
    },
]

export default function Social() {
    return (
        <div className="social">
            
            
            {socialMedia.map((social, index)=>(
                <a key={index} href={social.link} target="_blank" rel="noreferrer noopener"> {social.icon} </a>
            ))}
           
        </div>
    )
}
