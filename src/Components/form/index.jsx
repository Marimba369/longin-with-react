import React from "react"

export default function Form() {
    return (
        <form>
            <input placeholder="digite o seu email" type="email" />
            <input type="password" placeholder="digite a sua senha" />
            <button type="submit">Login</button>
        </form>
    )
}