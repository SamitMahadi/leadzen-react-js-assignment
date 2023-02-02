import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


const Modal = ({post}) => {
    const{name,email,phone,address:{street,suite,city},company:{name:companyName},website}=post

    return (
        <div>
            <input type="checkbox" id="View Details" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="View Details" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Name: <span className='font-normal'>{name}</span></h3>
                    <h3 className="text-lg font-bold">Email: <span className='font-normal'>{email}</span></h3>
                    <h3 className="text-lg font-bold">Phone: <span className='font-normal'>{phone}</span></h3>
                    <h3 className="text-lg font-bold">Website: <span className='font-normal'>{website}</span></h3>
                    <h3 className="text-lg font-bold">Adress: <span className='font-normal'>{street},{suite},{city}</span></h3>
                    <h3 className="text-lg font-bold">Company Name: <span className='font-normal'>{companyName}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Modal;