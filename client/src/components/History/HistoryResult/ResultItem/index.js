import React from 'react'

function ResultItem({ id, date, hour, action, actor, success }) {
    return (
        <div className='resultItem'>
            <div className='pattern'></div>
            <h6 class="date">{date}</h6>
            <div className='resultBox'>
                <div className='item-flex'>
                    <span className='id'>{id}</span>
                    <span>{hour}</span>
                </div>
                <div className='item-flex'>
                    <div>
                        <span>Action: {action}</span>
                        <span>Actor: {actor}</span>
                    </div>
                    {success ?
                    <span className='success'>Success</span> :
                    <span className='failure'>Failure</span>}
                </div>
            </div>
        </div>
    )
}

export default ResultItem