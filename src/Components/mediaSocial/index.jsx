import React from 'react'
import './style.css'
import media1 from '../../assets/apple.svg'
import media2 from '../../assets/Facebook.svg'
import media3 from '../../assets/google.svg'


export default function MediaSocial() {

    return(
        <div className="container-media">
            <a href=""><img src={media1} alt="" /></a>
            <a href=""><img src={media2} alt="" /></a>
            <a href=""><img src={media3} alt="" /></a>
        </div>
    )
}