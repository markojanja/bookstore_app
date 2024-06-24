const Modal = ({ handleDelete, title, toggleModal }) => {
  return (
    <div className="absolute inset-0 z-50 bg-slate-50/5 backdrop-blur-md flex flex-col items-center justify-start">
      <div className="flex flex-col gap-3 text-black mt-20 p-5 border bg-gray-50 rounded shadow-sm">
        <h2 className="text-2xl font-semibold">Are you sure you want to delete {title}</h2>
        <button className="bg-red-500 text-white px-3 py-2 cursor-pointer rounded" onClick={handleDelete}>
          Yes, Delete
        </button>
        <button className="bg-emerald-500 text-white py-3 px-5 rounded" onClick={toggleModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
