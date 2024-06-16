/* eslint-disable react/prop-types */
const Modal = ({ handleDelete, title, setIsVisible }) => {
  return (
    <div className="absolute inset-0 z-50 bg-black backdrop-blur-md">
      <div className="flex flex-col gap-3 text-white">
        <h2>Are you sure you want to delete {title}</h2>
        <button onClick={handleDelete}>Yes, Delete</button>
        <button onClick={() => setIsVisible(false)}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
