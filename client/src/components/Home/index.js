import { faker } from '@faker-js/faker';
import React from 'react';
import '../../styles/Home.css';
import LineChart from '../LineChart';
import PlotMap from '../PlotMap';
import PlotTable from '../PlotTable';

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Plot 1',
            data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'PLot 2',
            data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            label: 'Plot 3',
            data: labels.map(() =>
                faker.datatype.number({ min: -1000, max: 1000 })
            ),
            borderColor: 'rgb(255, 205, 86)',
            backgroundColor: 'rgba(255, 205, 86, 0.5)',
        },
    ],
};

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to SmarFarm, Username</h1>
            <div className="home-wrapper">
                <div className="home-top">
                    <PlotMap />
                </div>
                <div className="home-center">
                    <LineChart data={data} title={'Crop level'} />
                    <LineChart data={data} title={'Humility'} />
                    <LineChart data={data} title={'Temperature'} />
                    <LineChart data={data} title={'Light'} />
                </div>
                <div className="home-bottom">
                    <PlotTable />
                </div>
            </div>
        </div>
    );
};

export default Home;
