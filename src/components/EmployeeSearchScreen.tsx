import React, { useState } from 'react';


interface EmployeeDetails {
  name: string;
  birth_date: string;
  cpf: string;
  email: string;
  phone_number: string;
  street: string;
  number: string;
  city: string;
  state: string;
}

const EmployeeSearchScreen = () => {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [employeeData, setEmployeeData] = useState<EmployeeDetails | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`http://localhost:8080/employees/${searchCriteria}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setEmployeeData(data);
      } else {
        console.error('Erro na pesquisa ou resultados não encontrados');
        setEmployeeData(null);
      }
    } catch (error) {
      console.error('Erro na pesquisa:', error);
      setEmployeeData(null);
    }
  };

  return (
    <div className="employee-search-container">
      <h2>Search Employees</h2>
      <form>
        <input
          type="text"
          placeholder="Search by metadata or document type"
          value={searchCriteria}
          onChange={(e) => setSearchCriteria(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
      <div className="employee-details">
        {employeeData ? (
          <table>
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{employeeData.name}</td>
              </tr>
              <tr>
                <td>Birth Date:</td>
                <td>{employeeData.birth_date}</td>
              </tr>
              <tr>
                <td>CPF:</td>
                <td>{employeeData.cpf}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{employeeData.email}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{employeeData.phone_number}</td>
              </tr>
              <tr>
                <td>Address:</td>
                <td>
                  {employeeData.street}, {employeeData.number}, {employeeData.city}, {employeeData.state}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No employee found.</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeSearchScreen;
