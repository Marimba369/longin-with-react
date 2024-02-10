import React from "react"
import './style.css'
import MediaSocial from "../mediaSocial"
import iconPassword from "../../assets/Group.svg"

export default function Form() {
    return (
        <form>
            <h1 className="form-sign"> Sign in </h1>
            <input className= "form-email" placeholder="Digite o seu email" type="email"/>

            <div>
                <input className= "form-password" type="password" placeholder="Digite a sua senha"/>
                <a href="#"> <img src={iconPassword} className="form-iconPassword" /> </a>
                <p className="form-text">Forgor password?</p>
            </div>
            
            <button className="form-submit" type="submit">Login</button>
           
            <div>
                <p className="form-word">or continuos with</p>
            </div>
            
            <div>
                <MediaSocial/>
            </div>
        </form>
    )
}