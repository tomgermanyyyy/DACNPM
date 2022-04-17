import React, { useRef, useState } from 'react';
import OptionForm from './OptionForm';
import HistoryResult from './HistoryResult';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { openNav } from '../../actions/sidebar';
import '../../styles/ChangePasswordPage.css';

function History() {
  const dispatch = useDispatch();

  const [selectedOptions, setOptions] = useState({
    selectedPlot: '',
    selectedDevice: '',
    from: '',
    to: '',
  });
  const [results, setResults] = useState([]);
  const resultDiv = useRef(null);

  function handleClickView(event) {
    event.preventDefault();
    console.log('ok');
    axios
      .post('http://localhost:5000/api/history/search', {
        selectedPlot: selectedOptions.selectedPlot,
        selectedDevice: selectedOptions.selectedDevice,
        from: selectedOptions.from,
        to: selectedOptions.to,
      })
      .then((res) => {
        let arr = [];
        res.data.map((item) => {
          let date = new Date(item.timestamp);
          let hours = date.getHours();
          if (hours < 10) hours = '0' + hours;

          let minutes = date.getMinutes();
          if (minutes < 10) minutes = '0' + minutes;

          let seconds = date.getSeconds();
          if (seconds < 10) seconds = '0' + seconds;

          arr.push({
            id: item._id,
            date:
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear(),
            hour: hours + ':' + minutes + ':' + seconds,
            action: item.status,
            actor: item.user,
            success: item.success,
          });
        });
        setResults(arr);
      })
      .catch((err) => {
        console.log(err);
      });
    const validValues = validateOptions();
    if (validValues) resultDiv.current.classList.add('active');
  }

  function validateOptions() {
    let [msg1, msg2, msg3] = document.querySelectorAll(
      '.history form .option .message'
    );
    let validateOneOption1 = validateOneOption(
      selectedOptions.selectedPlot,
      msg1
    );
    let validateOneOption2 = validateOneOption(
      selectedOptions.selectedDevice,
      msg2
    );
    let validateOneOption3 = validateOneOption(selectedOptions.from, msg3);
    let validateOneOption4 = validateOneOption(selectedOptions.to, msg3);
    if (
      validateOneOption1 &&
      validateOneOption2 &&
      validateOneOption3 &&
      validateOneOption4
    )
      return true;
    return false;
  }

  function validateOneOption(item, msg) {
    if (item) {
      if (msg.classList.contains('active')) {
        msg.classList.remove('active');
      }
      return true;
    } else {
      if (!msg.classList.contains('active')) {
        msg.classList.add('active');
      }
      return false;
    }
  }

  function handleChangeValue(event) {
    setOptions({ ...selectedOptions, [event.target.name]: event.target.value });
  }

  return (
    <div id="main-content" className="history">
      <button
        className="openbtn"
        style={{ backgroundColor: 'white' }}
        onClick={() => dispatch(openNav())}
      >
        &#9776;
      </button>
      <h3>History of device activity</h3>
      <div className="content">
        <div className="form-container">
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
        <div className="result-container" ref={resultDiv}>
          <h5>Result</h5>
          {results.length == 0 ? (
            <p className="sorry">Sorry, no matches were found</p>
          ) : (
            <HistoryResult results={results} />
          )}
        </div>
      </div>
    </div>
  );
}

export default History;
