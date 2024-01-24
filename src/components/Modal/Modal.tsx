import { useEffect } from "react";
import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body?.classList.add("bodyLock");
    } else {
      body?.classList.remove("bodyLock");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modalContainer">
          <div className="modalHeader">
            <div>Modal</div>
            <div onClick={onClose}>X</div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
