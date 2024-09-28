// src/UserTable.js
import React, { useState } from 'react';


const names = [
  'Alice', 'Bob', 'Charlie', 'David', 'Eva',
  'Frank', 'Grace', 'Hannah', 'Ian', 'Jack',
  'Kate', 'Leo', 'Mia', 'Nina', 'Oscar',
  'Paula', 'Quinn', 'Ryan', 'Sophia', 'Tom',
  'Uma', 'Vera', 'Walt', 'Xena', 'Yara', 'Zack'
];

const occupations = [
  'Software Engineer', 'Data Scientist', 'Product Manager', 
  'Graphic Designer', 'Web Developer', 'Marketing Specialist', 
  'Sales Representative', 'HR Manager', 'Accountant', 
  'Project Coordinator'
];

const sampleUsers = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  name: names[index % names.length], // Cycle through names
  age: 20 + (index % 30),
  occupation: occupations[index % occupations.length] // Cycle through occupations
}));

const Datatable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(5);
  const totalPages = Math.ceil(sampleUsers.length / usersPerPage);

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleUsersPerPageChange = (event) => {
    setUsersPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = sampleUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div>
      <h1>User Data Table</h1>
      
      <div className="users-per-page">
        <label htmlFor="usersPerPage">Users per page: </label>
        <select id="usersPerPage" value={usersPerPage} onChange={handleUsersPerPageChange}>
          <option value={1}>1</option>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td className="user-name">{user.name}</td>
              <td>{user.age}</td>
              <td>{user.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange('next')} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Datatable;
