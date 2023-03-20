import React from 'react'

export default function Summarycard() {
  return (
    <>
        <div className='d-flex flex-column align-items-center justify-content-center m-2 p-0'>
            <div  className='btn btn-outline-danger m-2 p-2 w-100 d-flex flex-row justify-content-between align-items-center'>
                <div className="text-danger"><i className='fa fa-home me-1'></i> Reaction</div>
                <div className="text-dark"><span className='font-weight-bold'> 80</span>/100</div>
            </div>
            <div  className='btn btn-outline-success m-2 p-2 w-100 d-flex flex-row justify-content-between align-items-center'>
                <div className="text-success"><i className='fa fa-phone me-1'></i>Reaction</div>
                <div className="text-dark"><span className='font-weight-bold'> 80</span>/100</div>
            </div>
            <div  className='btn btn-outline-warning m-2 p-2 w-100 d-flex flex-row justify-content-between align-items-center'>
                <div className="text-warning"><i className='fa fa-car me-1'></i>Reaction</div>
                <div className="text-dark"><span className='font-weight-bold'> 80</span>/100</div>
            </div>
            <div  className='btn btn-outline-info m-2 p-2 w-100 d-flex flex-row justify-content-between align-items-center'>
                <div className="text-info"><i className='fa fa-sign me-1'></i>Reaction</div>
                <div className="text-dark"><span className='font-weight-bold'> 80</span>/100</div>
            </div>

            <button className='btn btn-dark text-center w-100 mx-2 my-3 p-2'> Continue</button>

        </div>

    </>
  )
}
