import classes from "../../styles/SiloDetail.module.css";
import InfoBar from "./InfoBar";
import { FaRegEdit } from "react-icons/fa";
import { ConfigCheckForm, Modal } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { showModal } from "../../actions/showhide";
const SiloDetail = (props) => {
  const idOfSilo = props.siloName;
  const dispatch = useDispatch();
  const formIsShown = useSelector((state) => state.showhide);
  const showFormHandler = () => {
    dispatch(showModal());
  };
  return (
    <div className={classes.container}>
      {formIsShown && (
        <Modal>
          <ConfigCheckForm
            siloID={props.siloID}
            moisture_check={props.moisture_check}
            temp_check={props.temp_check}
            light_check={props.light_check}
          />
        </Modal>
      )}
      <div className={classes.title}>
        <h1>{`${idOfSilo}`}</h1>
        <div className={classes.checkmark}>
          <p>Edit check value</p>
          <FaRegEdit className={classes.editIcon} onClick={showFormHandler} />
        </div>
      </div>
      <InfoBar
        dome={props.dome}
        pump={props.pump}
        moisture={props.moisture}
        temperature={props.temperature}
        light={props.light}
      ></InfoBar>
      <div className={classes.address}>
        <span>Location:</span>
        <span>{props.location}</span>
      </div>
    </div>
  );
};

export default SiloDetail;
