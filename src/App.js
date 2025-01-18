import './App.css';
import React, { useState } from 'react';

/**
 * Project Author: abhayku2002
 */

const AgeCalculator = () => {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed

    if (birthDate > today || !year || !month || !day) {
      alert('Please enter a valid date of birth.');
      return;
    }

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    let currentMonth = today.getMonth();
    let birthMonth = birthDate.getMonth();

    // Adjust for incomplete months
    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    <div className="container">
      <h1 className="title">Age Calculator</h1>
      <div className="input-group">
        <input
          type="number"
          className="input"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <button className="button" onClick={calculateAge}>Calculate Age</button>
      {age !== null && (
        <div className="result">
          <h2>Your Age: {age} years</h2>
        </div>
      )}
      <footer className="footer">Built by abhayku2002</footer>
    </div>
  );
};

function App() {
  return <AgeCalculator />;
}

export default App;
