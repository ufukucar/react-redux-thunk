import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import actions from '../../actions'
import Modal from '../modal/Modal'

const Users = () => {
  let [nameEdit, setNameEdit] = useState('')
  let [emailEdit, setEmailEdit] = useState('')
  let [usernameEdit, setUsernameEdit] = useState('')
  let [phoneEdit, setPhoneEdit] = useState('')
  let [editClick, setEditClick] = useState(false)
  let [userIndex, setUserIndex] = useState(-1)
  let [showModal, setShowModal] = useState(false)

  let dispatch = useDispatch()
  let usersState = useSelector((state) => state.userReducer)

  useEffect(() => {
    dispatch(actions.fetchUsers())
  }, [dispatch])

  let handleEditClick = (user, index) => {
    setNameEdit(user.name)
    setEmailEdit(user.email)
    setUsernameEdit(user.username)
    setPhoneEdit(user.phone)
    setEditClick(true)
    setUserIndex(index)
  }

  let handleUpdate = (user) => {
    setEditClick(false)
    let updatedUser = {
      name: nameEdit,
      email: emailEdit,
      username: usernameEdit,
      phone: phoneEdit,
      id: user.id,
    }
    dispatch(actions.updateUser(updatedUser))
  }
  let handleDelete = (userId) => {
    if (window.confirm('Silmek istediğinize emin misiniz ?')) {
      dispatch(actions.deleteUser(userId))
    }
  }

  return (
    <>
      {usersState.isLoading ? (
        <div className="text-center mb-5">
          <i className="fas fa-sync fa-spin"></i>
        </div>
      ) : (
        <>
          <Modal />
          <div className="table-responsive">
            <div className="YeniEkle">
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-target=".bd-example-modal-lg"
                className="btn btn-primary float-end"
              >
                Kullacı Ekle
              </button>
            </div>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Ad Soyad</th>
                  <th scope="col">Kullanıcı Adı</th>
                  <th scope="col">E-posta</th>
                  <th scope="col">Telefon</th>
                </tr>
              </thead>
              <tbody>
                {usersState.data.map((user, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {editClick && userIndex === index ? (
                        <input
                          type="text"
                          className="form-control"
                          value={nameEdit}
                          onChange={(e) => setNameEdit(e.target.value)}
                        />
                      ) : (
                        user.name
                      )}
                    </td>
                    <td>
                      {editClick && userIndex === index ? (
                        <input
                          type="text"
                          className="form-control"
                          value={usernameEdit}
                          onChange={(e) => setUsernameEdit(e.target.value)}
                        />
                      ) : (
                        user.username
                      )}
                    </td>
                    <td>
                      {editClick && userIndex === index ? (
                        <input
                          type="text"
                          className="form-control"
                          value={emailEdit}
                          onChange={(e) => setEmailEdit(e.target.value)}
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td>
                      {editClick && userIndex === index ? (
                        <input
                          type="text"
                          className="form-control"
                          value={phoneEdit}
                          onChange={(e) => setPhoneEdit(e.target.value)}
                        />
                      ) : (
                        user.phone
                      )}
                    </td>
                    <td className="d-flex justify-content-between">
                      {editClick && userIndex === index ? (
                        <button
                          className="btn btn-sm btn-success text-white"
                          onClick={(e) => {
                            e.preventDefault()
                            handleUpdate(user)
                          }}
                        >
                          <i className="fas fa-check"></i>
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-warning "
                          onClick={() => handleEditClick(user, index)}
                        >
                          <i className="fas fa-user-edit"></i>
                        </button>
                      )}

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                      >
                        <i className="fas fa-user-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  )
}

export default Users
