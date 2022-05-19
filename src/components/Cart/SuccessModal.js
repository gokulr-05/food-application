let SuccessModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#successmodal"
        id="successmodalbtn"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="successmodal"
        tabIndex="-1"
        aria-labelledby="successmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title text-capitalize text-success"
                id="exampleModalLabel"
              >
                order placed
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-capitalize text-center text-success">
              Your Order has been placed successfully!!
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
