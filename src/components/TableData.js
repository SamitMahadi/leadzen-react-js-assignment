import React from 'react';
import Modal from './Modal';

const TableData = ({ post }) => {
    const { id, name, address, company } = post
    return (
      <>  <tr >
            <th>{id}</th>
            <td>{name}</td>
            <td>{address.city}</td>
            <td>{company.name}</td>
            <td><label htmlFor="View Details" className='btn  btn-error text-white'>View Details</label></td>


        </tr>

        {
            <Modal
            post={post}
            >

            </Modal>
        }
        </>
    );
};

export default TableData;



