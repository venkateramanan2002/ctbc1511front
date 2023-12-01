
const Modal = ({ showModal, setShowModal, children }) => {

    return (
        <>
            {showModal && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="popup-close" onClick={() => setShowModal(false)}>✖</button>
                        {children}
                    </div>
                </div>

            )}

        </>
    );
};

export default Modal;