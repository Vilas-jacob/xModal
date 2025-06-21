import { useState } from 'react'
import './App.css'
import Modal from 'react-modal';

function App() {
  const [modalIsOpen,setModalIsOpen]=useState(false);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [dob,setDob]=useState("");

  const modalClasses = 'modal-content fixed top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 bg-white py-8 px-8 rounded-lg w-96';
  const overlayClasses='ReactModal__Overlay fixed inset-0 bg-gray-300 bg-opacity-50';

  Modal.setAppElement('#root');

  function openModal(){
    setModalIsOpen(true);
  }

  function closeModal(){
    setModalIsOpen(false);
  }

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPhoneNumber("");
    setDob("");
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    const currentDate = new Date();
    const selectedDate = new Date(dob);

   
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if(phoneNumber.length!==10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }
    
    if(selectedDate > currentDate){
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    resetForm();
  }

  return (
    <div className='modal'>
      <div className='flex flex-col justify-center items-center space-y-5 mt-20'>
        <h1 className='text-2xl font-bold'>User Details Modal</h1>
        <button className='bg-blue-600 rounded-lg text-white px-5 py-2 text-lg font-semibold' onClick={openModal}>Open Form</button>
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={modalClasses}
        overlayClassName={overlayClasses}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={true}
      >
        <form className='flex flex-col justify-center items-center space-y-4' onSubmit={handleSubmit}>
          <h1 className='text-2xl font-bold'>Fill Details</h1>
          
          <div className='w-full'>
            <label className='text-lg font-semibold'>Username:</label>
            <input 
              className='border border-gray-200 py-2 px-2 rounded-md w-full mt-1'
              id='username'
              value={username}
              type='text'
              required 
              onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          
          <div className='w-full'>
            <label className='text-lg font-semibold'>Email Address:</label>
            <input 
              className='border border-gray-200 py-2 px-2 rounded-md w-full mt-1'
              id='email'
              value={email}
              type='email'
              required 
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          
          <div className='w-full'>
            <label className='text-lg font-semibold'>Phone Number:</label>
            <input 
              className='border border-gray-200 py-2 px-2 rounded-md w-full mt-1'
              id='phone'
              value={phoneNumber}
              type='number'
              required 
              onChange={(e)=>setPhoneNumber(e.target.value)}
            />
          </div>
          
          <div className='w-full'>
            <label className='text-lg font-semibold'>Date of Birth:</label>
            <input 
              className='border border-gray-200 py-2 px-2 rounded-md w-full mt-1'
              id='dob'
              value={dob}
              type='date'
              required 
              onChange={(e)=>setDob(e.target.value)}
            />
          </div>
          
          <button 
            className='submit-button bg-sky-400 rounded-md py-2 px-10 text-white font-semibold text-md mt-4' 
            type='submit'
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default App
