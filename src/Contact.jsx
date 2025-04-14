import React from 'react'
import img1 from './assets/img8.png';
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div style={{backgroundColor: '#171717', height:'573px'}}>
      <div className='container' id='contact'>
        <div className='row'>
          <div className='col-12 mt-5'>
          <p className='fs-1 text-center' style={{color:'#FF4500'}}>Contact</p>
          </div>
          <div className='col-4'>
            <img src={img1} style={{width: '400px', height:'400px'}}/>
          </div>
          <div className='col-8 mt-5'>
          <div className="container mt-5 mb-5 w-50 me-5 text-center">
          <div className="bg-light p-4 rounded shadow">
          <h5 className="fw-bold mb-3 ps-1">Contact Info</h5>
            <ul className="list-unstyled ps-4 ">
              <li className="mb-3 d-flex align-items-center ps-5">
                <MdOutlinePhoneAndroid className="me-2 text-primary fs-4" /> 
                <span>+ 6369702012</span>
              </li>
              <li className="mb-3 d-flex align-items-center ps-5">
                <Link to="https://mail.google.com/mail/u/0/#inbox" style={{textDecoration:'none'}} ><HiOutlineMailOpen className="me-2 text-danger fs-4" />
                <span>arunmsc63@gmail.com</span></Link>
              </li>
              <li className="mb-3 d-flex align-items-center ps-5">
                <IoLocationOutline className="me-2 text-info fs-4" />
                <span>Coimbatore</span>
              </li>
            </ul>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
