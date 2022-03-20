import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'


function PortalButton({handleClickView}) {
    const el = document.createElement('div');
    
    useEffect(() => {
        const pleaseChoose = document.getElementById('please-choose');
        pleaseChoose.appendChild(el)
        return () => {
            pleaseChoose.removeChild(el)
        }
    })
    
    return ReactDOM.createPortal(
        <button type="submit" onClick={handleClickView}>View</button>,
        el
    )
}

export default PortalButton