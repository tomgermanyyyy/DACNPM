import React from 'react'
import ResultItem from './ResultItem'

function HistoryResult({results}) {
	return (
		<div className='result'>
			{results.map(result => 
				<ResultItem 
					id={result.id} 
					time={result.time} 
					action={result.action} 
					actor={result.actor} 
					success={result.success}  
				/>)
			}
		</div>
	)
}

export default HistoryResult