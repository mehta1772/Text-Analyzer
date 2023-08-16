import React,{useState} from 'react'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
   let myStyle={
      color:props.mode==='dark'?'white':'grey',
      backgroundColor: props.mode==='dark'?'grey':'white',
    }

  

  return (
    <div className="container" >
        <h1 className='container my-2' style={{color:props.mode==='dark'?'white':'grey'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong> 
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      This term implies a detailed examination of something to gain a deeper understanding of its components, structure, and implications. It often involves breaking down complex information into smaller parts and evaluating their significance.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong> Free to Use</strong> 
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      An app that is available at no cost to users. This approach can attract a larger user base and enhance user experience, but developers must carefully consider their monetization strategy and ensure the app's overall quality and value to users.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible</strong> 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      careful design, development, testing, and ongoing maintenance. Prioritizing browser compatibility enhances user satisfaction, expands the app's reach, and contributes to its overall success in a diverse online ecosystem.
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
