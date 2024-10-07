import React from 'react'

const NavBar = () => {
  return (
    <div className="row">
        <div  style={{height:"100px"}}  className="col-12 border border-black">
            <ul style={{listStyle:"none"}} className=' mt-4 d-flex flex-row justify-content-center'>
                <li className='h1 position-absolute start-0'>Redux_Cart</li>
                <li 
                className='position-absolute end-0 me-5 px-5 h4  '>Count
                    <div className='me-4 pe-5 position-absolute  end-0'>0</div>
                </li>
                <li className='position-absolute  end-0 me-3 h4'>Total<div className=' position_absolute start-0 ms-2 ps-2
                '>0</div></li>
            </ul>
        </div>
    </div>

  )
}

export default NavBar