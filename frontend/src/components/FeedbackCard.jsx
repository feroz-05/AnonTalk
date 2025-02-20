import React from 'react'

function FeedbackCard(props) {
  return (
    <>
            <div className="card" style={{width:'18rem'}}>
        <img src={props.img} className="card-img-top" alt={props.name}/>
        <div className="card-body">
            <p className="card-text">{props.data}</p>
        </div>
        </div>
    </>
  )
}

export default FeedbackCard
