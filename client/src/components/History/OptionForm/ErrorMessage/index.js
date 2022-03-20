import React from 'react'

function ErrorMessage({value, message}) {
    if (!value) return null;
    return (
        <div className='message'>{message}</div>
    )
}

export default ErrorMessage