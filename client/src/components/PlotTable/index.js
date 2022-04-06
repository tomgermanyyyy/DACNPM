import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import tableIcons from './MaterialTableIcons';
import TableTitle from './TableTitle';

function PlotTable({ plotData }) {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([
    { title: 'Crop', field: 'crop' },
    { title: 'Temperature, °C', field: 'temp_value' },
    { title: 'Moisture, %', field: 'moisture_value' },
    { title: 'Light, lux', field: 'light_value' },
  ]);

  useEffect(() => {
    setData(
      plotData.map((plot) => {
        const { crop, temp_value, moisture_value, light_value } = plot;
        return { crop, temp_value, moisture_value, light_value };
      })
    );
  }, [plotData]);

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

PlotTable.propType = {
  plotData: PropTypes.array.isRequired,
};

export default PlotTable;
