import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from "../../styles/Modal.module.css"
import { useDispatch } from 'react-redux'
import { hideModal } from '../../actions/showhide'
const Modal = (props) => {
    const dispatch = useDispatch();
    const Backdrop = ()=>{
        const hideModalHandler = () => {
            dispatch(hideModal())
        }
        return <div className={classes.backdrop} onClick={hideModalHandler}></div>
    }
    const OverlayModal = (props) => {
        return <div className={classes.modal}>
            {props.children}
        </div>     
    }
    const portalElement = document.getElementById("overlay-form")
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop></Backdrop>,portalElement)}
            {ReactDOM.createPortal(<OverlayModal>
                {props.children}
            </OverlayModal>,portalElement)}
        </Fragment>
  )
}

export default Modal