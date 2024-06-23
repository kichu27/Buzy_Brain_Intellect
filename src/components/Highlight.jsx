import React from 'react'
import './styles/f.css';

function Highlight(props) {
  return (
    <div className='box1'>

<div className="box2">

<img  className="i" alt="img" src={`src/components/${props.src}`} height={200} width={150} />

</div>

<div className="box3">

<div className="box4"><p className='tit'>{props.tit}</p><p>{props.cont}</p></div>


</div>
    </div>
  )
}

export default Highlight