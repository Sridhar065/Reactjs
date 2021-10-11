import React from 'react'
import './Mystyle.css'

function Hello(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={`${className} font-xl`} >Hello Sridhar</h1>
            <h2>react</h2>
        </div>
    )
}

export default Hello