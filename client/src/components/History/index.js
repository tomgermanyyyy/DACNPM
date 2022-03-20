import React, { useRef, useState } from 'react'
import OptionForm from './OptionForm'
import HistoryResult from './HistoryResult'


function History() {
	const [selectedOptions, setOptions] = useState(
		{
			selectedPlot: '',
			selectedDevice: '',
			from: '',
			to: ''
		}
	);
	const [results, setResults] = useState(initalResults);
	const resultDiv = useRef(null);

	function handleClickView(event) {
		event.preventDefault();
		console.log('ok');
		resultDiv.current.classList.add('active');
	}

	function handleChangeValue(event) {
		setOptions({ ...selectedOptions, [event.target.name]: event.target.value })
	}

	return (
		<div className='history'>
			<h3>History of device activity</h3>
			<div className='content'>
				<div className='form-container'>
					<h5>
						Please choose following options
						<div id="please-choose"></div>
					</h5>
					<OptionForm 
						selectedOptions={selectedOptions} 
						handleChangeValue={handleChangeValue} 
						handleClickView={handleClickView} 
					/>
				</div>
				<div className='result-container' ref={resultDiv}>
					<h5>Result</h5>
					<HistoryResult results={results} />
				</div>
			</div>
		</div>
	)
}


const initalResults = [
	{
		"id": "#123456",
		"time": "07:00:00 AM",
		"action": "Open",
		"actor": "Username",
		"success": true
	},
	{
		"id": "#123457",
		"time": "07:00:00 AM",
		"action": "Open",
		"actor": "Auto",
		"success": true
	},
	{
		"id": "#123458",
		"time": "07:00:00 AM",
		"action": "Open",
		"actor": "Username",
		"success": false
	},
	{
		"id": "#123459",
		"time": "07:00:00 AM",
		"action": "Open",
		"actor": "Username",
		"success": true
	},
]

export default History