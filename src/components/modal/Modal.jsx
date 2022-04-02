import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'

import $ from 'jquery'

const Modal = () => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [username, setUsername] = useState('')
  let [phone, setPhone] = useState('')
  let dispatch = useDispatch()
  let usersState = useSelector((state) => state.userReducer)

  let handleAddUser = () => {
    let newUser = {
      id: usersState.data.length + 1,
      name,
      username,
      email,
      phone,
    }

    dispatch(actions.addUser(newUser))

    window.$('#exampleModal').modal('hide')
  }

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
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="col-form-label">
                  Kullanıcı Adı:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="col-form-label">
                  E-posta:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="col-form-label">
                  Telefon:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleAddUser()}
              >
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
