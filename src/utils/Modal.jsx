import React from "react";

const Modal = ({ children }) => {
  return <div className="bg-white/80 fixed inset-0 z-10">{children}</div>;
};

export default Modal;
