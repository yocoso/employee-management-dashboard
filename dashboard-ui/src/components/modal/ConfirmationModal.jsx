const ConfirmationModal = ({ isOpen, onClose, onConfirm, item }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
                <p>Are you sure you want to delete this item?</p>
                <div className="mt-4 flex justify-end space-x-3">
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => onConfirm(item)}
                    >
                        Confirm
                    </button>
                    <button
                        className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;
