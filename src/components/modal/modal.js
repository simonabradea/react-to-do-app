import "./modal.scss";

const Modal = ({children, header="Add new Task", show=true, onClose}) => {
    return(
        show ? <div className="modal-wrapper">
            <div className="modal-content">
                <div className="modal-header"><span>{header}</span><button className="close-button" onClick={onClose}>&#x2715;</button></div>
                <div className="modal-body">{children}</div>
                <div className="modal-footer"></div>
            </div>
        </div> : null
    )
}

export default Modal;