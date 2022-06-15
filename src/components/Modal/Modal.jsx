import React from 'react'
import '../Modal/Model.css'

const Modal = ({active, setActive}) => {
  return (
    <div className={active ? "model active" : "model"} onClick={() => setActive(false)}>
        <div className='model__content' onClick={e => e.stopPropagation()}>

        </div>   
    </div>
  )
}
export default Modal;
