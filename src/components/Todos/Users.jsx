import React, { useState } from 'react'
import { BiMale } from 'react-icons/bi';
import { GoTrashcan } from 'react-icons/go';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaFemale, FaSortAlphaUpAlt, FaSortAlphaDown } from 'react-icons/fa';


export default function Users({ users, handleDelete, handleSorted, filteredGender, handleSubmit, editableID,
  seteditableIdAction }) {
  console.log(editableID);

  return (
    <div className='table'>
      <div className='thead'>
        <tr>
          <th>N</th>
          <th>first name
            <p>
              <span className='sort' onClick={() => handleSorted(true, 'first_name')}>
                <FaSortAlphaDown />
              </span>
              <span className='sort' onClick={() => handleSorted(false, 'first_name')}>
                <FaSortAlphaUpAlt />
              </span>
            </p>
          </th>
          <th>last name
            <p>
              <span className='sort' onClick={() => handleSorted(true, 'last_name')}>
                <FaSortAlphaDown />
              </span>
              <span className='sort' onClick={() => handleSorted(false, 'last_name')}>
                <FaSortAlphaUpAlt />
              </span>
            </p>
          </th>
          <th>email
            <p>
              <span className='sort' onClick={() => handleSorted(true, 'email')}>
                <FaSortAlphaDown />
              </span>
              <span className='sort' onClick={() => handleSorted(false, 'email')}>
                <FaSortAlphaUpAlt />
              </span></p>
          </th>
          <th>gender
            <span className='sort' onClick={() => filteredGender('Male')}>
              <BiMale />
            </span>
            <span className='sort' onClick={() => filteredGender('Female')}>
              <FaFemale />
            </span>
          </th>
          <th>ip address
            <p>
              <span className='sort' onClick={() => handleSorted(true, 'ip_address')}>
                <FaSortAlphaDown />
              </span>
              <span className='sort' onClick={() => handleSorted(false, 'ip_address')}>
                <FaSortAlphaUpAlt />
              </span>
            </p>
          </th>
          <th></th>
        </tr>
      </div>
      <div className='tbody' >
        {
          users.map((user, index) => {
            return (
              <>
                {editableID !== user.id ? (
                  <p className='tr' key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.gender}</td>
                    <td>{user.ip_address}</td>
                    <td><span onClick={() => seteditableIdAction(user.id)}><AiOutlineEdit /></span></td>
                    <td><span onClick={() => handleDelete(user.id)}><GoTrashcan /></span></td>
                  </p >
                ) : (
                  <form
                    key={user.id}
                    className='tr'
                    onSubmit={(e) => handleSubmit(e, user.id)}>
                    <td>{index + 1}</td>
                    <div>
                      <input type="text" placeholder={user.first_name} id='first_name' />
                    </div>
                    <div>
                      <input type="text" placeholder={user.last_name} id='last_name' />
                    </div>
                    <div>
                      <input type="text" placeholder={user.email} id='email' />
                    </div>
                    <div>
                      <input type="text" placeholder={user.gender} id='gender' />
                    </div>
                    <div>
                      <input type="text" placeholder={user.ip_address} id='ip_address' />
                    </div>
                    <div>
                      <input type="submit" value={'save'} />
                    </div>

                  </form>
                )

                }
              </>
            )
          })
        }
      </div>
    </div>
  )
}
