import React from 'react'

const Pagination = () => {
  return (
    <div className='flex justify-center mt-7'>
      <div className="join">
        <button className="join-item btn-sm btn">1</button>
        <button className="join-item btn-sm btn">2</button>
        <button className="join-item btn-sm btn btn-disabled">...</button>
        <button className="join-item btn-sm btn">99</button>
        <button className="join-item btn-sm btn">100</button>
      </div>
    </div>
  )
}

export default Pagination