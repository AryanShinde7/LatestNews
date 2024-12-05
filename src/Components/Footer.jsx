import React from 'react'

function Footer() {
  return (
    <div style={{width:"100vw" , height:"200px" , backgroundColor:"#212529"}}>
        <h4 className='text-light mx-4' style={{fontSize:"17px" , paddingTop :"30px"}}>Developed by - Aryan Rajesh Shinde</h4>
        <span className='text-light' style={{marginLeft:"23px"}}>email - </span> <a style={{fontSize:"15px"}} href="mailto:aryanshinde.5105@gmail.com">aryanshinde.5105@gmail.com</a>
        <h4 className='text-light mx-4 py-3' style={{fontSize:"13px" , paddingTop :"30px"}}>Made with - <ul style={{padding:"0px" , margin:"0px"}}>React.js,</ul><ul style={{padding:"0px" , margin:"0px"}}>Bootstrap,</ul><ul style={{padding:"0px" , margin:"0px"}}>NewsAPI</ul></h4>

    </div>
  )
}

export default Footer