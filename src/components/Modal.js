import ReactDOM from "react-dom";

function Modal({ onClose, children, actionBar }) {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 bg-white p-10">
        <div className="flex h-full flex-col justify-between">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container"),
  );
}

export default Modal;
