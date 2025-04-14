import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { Link} from 'react-router-dom';

const Email = () => {
  return (
    <div style={{backgroundColor: '#171717', position:'relative', height:'573px'}}>
    <div className='container text-center'>
        <div className='row'>
            <div className='col-12 mt-5'>
                <p className=' fs-1' style={{color:'#FF4500'}}>Email</p>
            </div>
            <div className='col-12 mt-5'>
                <Link to="https://mail.google.com/mail/u/0/#inbox"> <MdOutlineEmail style={{fontSize:'150px',color:'#F40009'}}/></Link>
             </div>
        </div>
    </div>
    </div>
  )
}

export default Email
