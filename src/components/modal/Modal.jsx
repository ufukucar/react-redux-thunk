import React from 'react'

const Modal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Kullanıcı Ekle
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="col-form-label">
                  Ad Soyad:
                </label>
                <input type="text" className="form-control" id="name" />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="col-form-label">
                  Kullanıcı Adı:
                </label>
                <input type="text" className="form-control" id="username" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  E-posta:
                </label>
                <input type="text" className="form-control" id="email" />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="col-form-label">
                  Telefon:
                </label>
                <input type="text" className="form-control" id="phone" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Kapat
              </button>
              <button type="button" className="btn btn-primary">
                Kaydet
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
