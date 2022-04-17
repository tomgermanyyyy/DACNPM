import axios from 'axios';
import { useEffect, useState } from 'react';
import { API_SERVER_URL } from '../../config';
import '../../styles/Home.css';
import HomePlot from '../HomePlot';
import PlotMap from '../PlotMap';
import PlotTable from '../PlotTable';
import { useDispatch } from 'react-redux';
import { openNav } from '../../actions/sidebar';

const Home = () => {
  const [plotData, setPlotData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlotData = async () => {
      try {
        const { data } = await axios.get(`${API_SERVER_URL}/api/plot`);
        setPlotData(data);
      } catch (err) {
        console.error(err);
      }
    };

    getPlotData();
  }, []);

  return (
    <div id="main-content" className="home-container">
      <button
        className="openbtn"
        type="button"
        onClick={() => dispatch(openNav())}
      >
        &#9776;
      </button>
      <h1 className="home-title">Welcome to SmartFarm, Admin</h1>
      <div className="home-wrapper">
        <div className="home-top">
          <PlotMap plotData={plotData} />
        </div>
        <div className="home-center">
          {plotData.map((plot) => (
            <HomePlot key={plot._id} plot={plot} />
          ))}
        </div>
        <div className="home-bottom">
          <PlotTable plotData={plotData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
