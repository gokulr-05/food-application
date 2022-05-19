let SuccessModal = () => {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#successmodal"
        id="successmodalbtn"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="successmodal"
        tabindex="-1"
        aria-labelledby="successmodal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5
                class="modal-title text-capitalize text-success"
                id="exampleModalLabel"
              >
                order placed
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-capitalize text-center text-success">
              Your Order has been placed successfully!!
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
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
