import MaterialTable from 'material-table';
import { useState } from 'react';
import tableIcons from './MaterialTableIcons';
import TableTitle from './TableTitle';

export default function PlotTable() {
    const [columns, setColumns] = useState([
        { title: 'Name', field: 'name' },
        { title: 'Crop level, %', field: 'crop' },
        { title: 'Temperature, °C', field: 'temperature' },
        { title: 'Humility, %', field: 'humility' },
        { title: 'Light', field: 'light' },
    ]);

    const [data, setData] = useState([
        {
            name: 'Plot 1',
            crop: 1,
            temperature: 35,
            humility: 10,
            light: 5,
        },
        {
            name: 'Plot 2',
            crop: 2,
            temperature: 37.5,
            humility: 10,
            light: 5,
        },
        {
            name: 'Plot 3',
            crop: 4,
            temperature: 34,
            humility: 10,
            light: 5,
        },
    ]);

    return (
        <MaterialTable
            title={<TableTitle title={'Plots'} />}
            style={{
                border: 'none',
                boxShadow: 'none',
            }}
            options={{
                paging: false,
                pageSize: 3,
                pageSizeOptions: [3, 5, 10],
            }}
            columns={columns}
            data={data}
            icons={tableIcons}
        />
    );
}
