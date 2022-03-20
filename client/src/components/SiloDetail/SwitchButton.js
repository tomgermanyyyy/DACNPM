import "../../styles/SwitchButton.css"
const SwitchButton = () => {
  return (
    <label className="switch">
      <input type="checkbox"/>
      <span className="slider round"></span>
    </label>
  );
};

export default SwitchButton;
