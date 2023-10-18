import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addUser } from '../Reducers/userSlider';
import '../CSS/styles.css'; 

const generateRandomId = () => {
  return Math.floor(Math.random() * 1000);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
  return passwordRegex.test(password);
};

const AddUserPage = () => {
  const [userData, setUserData] = useState({ newName: '', newPassword: '', newConfirmPassword: '', newEmail:'', newNumber: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector(state => state.user.userList);

  const handleAddUser = e => {
    e.preventDefault();
  
    const { newName, newPassword, newConfirmPassword, newEmail, newNumber } = userData;

    if (!newName || !newPassword || !newEmail || !newNumber || !newConfirmPassword) {
      alert('All Fields are Mandatory'); 
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      alert('Invalid Email format'); 
      return;
    }
  
    if (newNumber.length !== 10) {
      alert('Invalid Phone Number. It must be 10 digits.'); 
      return;
    }
  
    const isEmailAlreadyRegistered = userList.some(user => user.email === newEmail);
    if (isEmailAlreadyRegistered) {
      alert('Email already registered.'); 
      return;
    }

    if (!validatePassword(newPassword)) {
      alert('Password should be minimum 6 and maximum 12 characters. It should contain at least one special character, one number, one lower case letter, and one upper case letter.'); 
      return;
    }

    if (newPassword !== newConfirmPassword) {
      alert('Passwords do not match'); 
      return;
    }

    let randomId;
    let isUnique = false;
    while (!isUnique) {
      randomId = generateRandomId();
      isUnique = !userList.some(user => user.id === randomId);
    }
  
    dispatch(addUser({ randomId, newName, newPassword, newEmail, newNumber }));
  
    setUserData({ newName: '', newPassword: '', newConfirmPassword: '', newEmail:'' , newNumber:'' });
    alert('User added successfully.'); 
    navigate('/');
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="form-container">
          <h2>Welcome to KWIKMA₹T</h2>
          <h3>Enter User Details</h3>
          <form onSubmit={handleAddUser}>
            <div>
              <input
                type="text"
                name="newName"
                placeholder="Name"
                value={userData.newName}
                onChange={handleInputChange}
              />
            </div>
          
            <div>
              <input
                type="text"
                name="newEmail"
                placeholder="Email - ID"
                value={userData.newEmail}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="number"
                name="newNumber"
                placeholder="Mobile Number"
                value={userData.newNumber}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="password"
                name="newPassword"
                placeholder="Enter Password"
                value={userData.newPassword}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <input
                type="password"
                name="newConfirmPassword"
                placeholder="Confirm Password"
                value={userData.newConfirmPassword}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="small-button">Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserPage;
