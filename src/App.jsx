import { useState } from 'react';
import './App.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dob, setDob] = useState("");

  const modalClasses = 'fixed top-1/2 left-1/2 right-auto bottom-auto -translate-x-1/2 -translate-y-1/2 bg-white py-8 px-30 rounded-lg';
  const overlayClasses = 'fixed inset-0 bg-gray-300 bg-opacity-50';

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPhoneNumber("");
    setDob("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const selectedDate = new Date(dob);

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    // Phone number validation
    if (phoneNumber.length !== 10) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    // Date of birth validation
    if (selectedDate > currentDate) {
      alert("Invalid date of birth. Date of birth cannot be in the future.");
      return;
    }

    // On successful validation: reset form and keep modal open
    resetForm();
  };

  return (
    <>
      <div className='modal'>
        <div className='flex flex-col justify-center items-center space-y-5 mt-20'>
          <h1 className='text-2xl font-bold'>User  Details Modal</h1>
          <button className='bg-blue-600 rounded-lg text-white px-5 py-2 text-lg font-semibold' onClick={openModal}>
            Open Form
          </button>
        </div>
        <div className='modal-content'>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={modalClasses}
            overlayClassName={overlayClasses}
            onAfterOpen={() => { /* Optional: Add any actions after modal opens */ }}
          >
            <form className='flex flex-col justify-center items-center space-y-2 gap-y-3' onSubmit={handleSubmit}>
              <h1 className='text-2xl font-bold'>Fill Details</h1>
              <div className='flex flex-col space-y-2 justify-center items-center'>
                <label className='text-lg font-semibold'>Username:</label>
                <input
                  className='border-1 border-gray-200 py-2 px-2 rounded-md w-70'
                  id='username'
                  value={username}
                  type='text'
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='flex flex-col space-y-2 justify-center items-center'>
                <label className='text-lg font-semibold'>Email Address:</label>
                <input
                  className='border-1 border-gray-200 py-2 px-2 rounded-md w-70'
                  id='email'
                  value={email}
                  type='email'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='flex flex-col space-y-2 justify-center items-center'>
                <label className='text-lg font-semibold'>Phone Number:</label>
                <input
                  className='border-1 border-gray-200 py-2 px-2 rounded-md w-70'
                  id='phone'
                  value={phoneNumber}
                  type='number'
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className='flex flex-col space-y-2 justify-center items-center'>
                <label className='text-lg font-semibold'>Date of Birth:</label>
                <input
                  className='border-1 border-gray-200 py-2 px-2 rounded-md w-70'
                  id='dob'
                  value={dob}
                  type='date'
                  required
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <button
                className='submit-button bg-sky-400 rounded-md py-2 px-10 text-white font-semibold text-md'
                type='submit'
              >
                Submit
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default App;
