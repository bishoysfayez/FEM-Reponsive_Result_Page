import React from 'react'
import Summarycard from '../SummaryCard/Summarycard.jsx'
export default function  cardContainer() {
  return (
    <>
      <div className="mainDiv container mx-auto my-4 text-white d-flex flex-row align-items-center justify-content-center row"> 
      
      <div className="leftDiv bg-primary d-flex flex-column align-items-center col-md-6">
          <h3 className="yourResult text-center text-white">Your Result</h3>
          <div className="score bg-danger w-50 m-3 p-1">
            <h2 className='display-1 font-weight-light text-center p-1 m-1'>76</h2>
            <p className='text-center text-white'>of 100</p>
          </div>
          <div className="resultInsight flex-column align-items-center justify-content-center py-3 my-0">
            <h3 className='text-center p-2 m-2'>Great</h3>
            <p className='text-center p-1 m-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.</p>


          </div>
  
        </div>


        <div className="rightDiv d-flex flex-column p-4 col-md-6">
          <h2 className="summary text-dark">Summary</h2>
          <Summarycard />
        </div>
      
      </div>
    </>
  )
}
