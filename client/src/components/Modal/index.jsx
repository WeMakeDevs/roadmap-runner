import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export default function Modal({ closeModal, children, maxWidth = "450px" }) {
  return ReactDOM.createPortal(
    <div className="modal-background" aria-hidden="true">
      <div className="modal" style={{ maxWidth }}>
        <div className="modal-content">
          <button
            className="modal-close-btn"
            onClick={closeModal}
            type="button"
          >
            <i className="fas fa-times txt-red" id="modal-dismiss-btn" />
          </button>

          <div className="txt-dark-gray lh-md modal-children">{children}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}
