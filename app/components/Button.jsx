"use client"
import './Button.css'


import Link from 'next/link';
function Button(){
    return(
        <div className="container">
            <Link className = 'btn btn-border-1' href="/editor">Explore Compiler</Link>
            <Link className = 'btn btn-border-1' href="/problems">Solve Problems</Link>
        </div>
    )
}

export default Button;