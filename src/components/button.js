import React from 'react'

const Button = (props) => {
    return (
        <input className="btn btn-danger " type="button" value={props.value}></input>
    )
}

export default Button
