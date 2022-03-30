import React from 'react'
import RectangleBox from './RectangleBox';
import PortalButton from './PortalButton';
import PlantImg from '../../../assets/plant.png'
import WaterPumpImg from '../../../assets/WaterPump.png'
import CeilingMeshImg from '../../../assets/CeilingMesh.png'

const plots = [
	{
		"id": "623fc8e17446956862565b44",
		"name": "Plot 1",
		"image": PlantImg
	},
	{
		"id": "6231a25a7dd34d26841ed8e1",
		"name": "Plot 2",
		"image": PlantImg
	},
	{
		"id": "6231a2897dd34d26841ed8e2",
		"name": "Plot 3",
		"image": PlantImg
	}
];
const devices = [
	{
		"id": "1",
		"name": "Water Pump",
		"value": "pump",
		"image": WaterPumpImg
	},
	{
		"id": "2",
		"name": "Ceiling Mesh",
		"value": "dome",
		"image": CeilingMeshImg
	}
];

function OptionForm({selectedOptions ,handleChangeValue, handleClickView}) {

	const plotItems = plots.map((plot) =>
		<div key={plot.id} className="option-item">
			<input
				type="radio"
				value={plot.id}
				name="selectedPlot"
				checked={selectedOptions.selectedPlot === plot.id}
				onChange={handleChangeValue}
			>
			</input>
			<label>
				<RectangleBox name={plot.name} image={plot.image} circle_around={true} />
			</label>
		</div>
	);
	
	const deviceItems = devices.map((device) =>
		<div key={device.id} className="option-item">
			<input
				type="radio"
				value={device.value}
				name="selectedDevice"
				checked={selectedOptions.selectedDevice === device.value}
				onChange={handleChangeValue}>
			</input>
			<label>
			<RectangleBox name={device.name} image={device.image} circle_around={false} />
			</label>
		</div>
	);

	function handleHideOtherOptions(event) {
		const chooseActive = document.querySelector('.history .option.active');
		chooseActive.classList.remove('active');
		event.target.parentElement.classList.add('active');
	}

	return (
		<form>
			<div className='options'>
				<div className='plot-option option active' >
					<h6 onClick={handleHideOtherOptions} data-option="plot">Choose a plot</h6>
					<div className='message'>You have not selected the plot</div>
					<div className='option-flex'>
						{plotItems}
					</div>
				</div>
				<div className='device-option option'>
					<h6 onClick={handleHideOtherOptions} data-option="device">Choose a device</h6>
					<div className='message'>You have not selected the device</div>
					<div className='option-flex'>
						{deviceItems}
					</div>
				</div>
				<div className='time-option option'>
					<h6 onClick={handleHideOtherOptions} data-option="time">Choose a time</h6>
					<div className='message'>You have not selected the time</div>
					<div className='option-flex'>
						<label>
							<span>From:</span>
							<input 
								type="date" 
								name="from" 
								value={selectedOptions.from} 
								onChange={handleChangeValue}>
							</input>
						</label>
						<label>
							<span>To:</span>
							<input 
								type="date" 
								name="to" 
								value={selectedOptions.to} 
								onChange={handleChangeValue}></input>
						</label>
					</div> 
				</div>
			</div>
			<PortalButton handleClickView={handleClickView} />
		</form>
	)
}

export default OptionForm