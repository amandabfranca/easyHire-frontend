import React, { useState } from 'react';
import './EmployeeRegistrationForm.css'; 
import { Link } from 'react-router-dom';
import api from '../api';
import * as pdfjs from 'pdfjs-dist';
import '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';


const EmployeeRegistrationForm: React.FC = () => {
  const [employeeData, setEmployeeData] = useState({
    name: '',
    birthDate: '',
    cpf: '',
    email: '',
    phoneNumber: '',
    address: {
      street: '',
      number: '',
      city: '',
      state: '',
    },
    employmentContract: null,
    cpfRgDocument: null,
    proofOfAddress: null,
    schoolCurriculum: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name.startsWith('address.')) {
      const addressField = name.split('address.')[1];
      setEmployeeData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setEmployeeData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };



  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target) {
          const result = event.target.result;
          if (result instanceof ArrayBuffer) {
            const buffer = new Uint8Array(result);
            
          // Verifico o número de páginas do PDF
          //const numPages = checkPDFPages(buffer, e);

            setEmployeeData((prevData) => ({
              ...prevData,
              [name]: buffer,
            }));
          } else if (typeof result === 'string') {
            
            const text = result;
            const encoder = new TextEncoder();
            const buffer = encoder.encode(text);
            setEmployeeData((prevData) => ({
              ...prevData,
              [name]: buffer,
            }));
          }
        }
      };

      
      reader.readAsArrayBuffer(files[0]);
    }
  };

  /*const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      const reader = new FileReader();
  
      reader.onload = async (event) => {
        if (event.target) {
          const result = event.target.result;
          if (result instanceof ArrayBuffer) {
            
            const buffer = new Uint8Array(result);
  
            // Verifico o número de páginas do PDF
            const numPages = await checkPDFPages(buffer);
  
            if (numPages > 2) {
              alert('O arquivo PDF deve ter no máximo 2 páginas.');
              e.target.value = "";
              return;
            } else {
              setEmployeeData((prevData) => ({
                ...prevData,
                [name]: buffer,
              }));
            }
          } else if (typeof result === 'string') {
            
            const text = result;
            const encoder = new TextEncoder();
            const buffer = encoder.encode(text);
            setEmployeeData((prevData) => ({
              ...prevData,
              [name]: buffer,
            }));
          }
        }
      };
  
      
      reader.readAsArrayBuffer(files[0]);
    }
  };*/


  // Função para verificar o número de páginas em um arquivo PDF
  async function checkPDFPages(arrayBuffer: ArrayBuffer, e: React.ChangeEvent<HTMLInputElement>) {
    pdfjs.GlobalWorkerOptions.workerSrc = '../../node_modules/pdfjs-dist/build/pdf.worker.mjs';
    const pdf = await pdfjs.getDocument(arrayBuffer).promise;
    if (pdf.numPages > 2) {
      alert('O arquivo PDF deve ter no máximo 2 páginas.');
      e.target.value = "";
    }
  }


  const handleSubmit = async (e: React.FormEvent) => {
    try {
      const response = await api.post('/employees', employeeData);

      if (response.status === 201) {
        alert('Employee successfully registered');
      } else {
        
        if (response.data && response.data.message) {
          alert(response.data.message);
        } else {
          alert('Erro desconhecido'); 
        }
      }
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };



  return (
    <div className="registration-form-container">
      <h2></h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={employeeData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Birth Date:</label>
          <input
            type="date"
            name="birthDate"
            value={employeeData.birthDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={employeeData.cpf}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={employeeData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={employeeData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            name="address.street"
            placeholder="Street"
            value={employeeData.address.street}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address.number"
            placeholder="Number"
            value={employeeData.address.number}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address.city"
            placeholder="City"
            value={employeeData.address.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="address.state"
            placeholder="State"
            value={employeeData.address.state}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Employment Contract (PDF):</label>
          <input
            type="file"
            name="employmentContract"
            onChange={handleFileUpload}
            accept=".pdf"
            required
          />
        </div>
        <div>
          <label>CPF/RG (PDF):</label>
          <input
            type="file"
            name="cpfRgDocument"
            onChange={handleFileUpload}
            accept=".pdf"
            required
          />
        </div>
        <div>
          <label>Proof Of Address(PDF):</label>
          <input
            type="file"
            name="proofOfAddress"
            onChange={handleFileUpload}
            accept=".pdf"
            required
          />
        </div>
        <div>
          <label>School Curriculum (PDF, maximum 2 pages):</label>
          <input
            type="file"
            name="schoolCurriculum"
            onChange={handleFileUpload}
            accept=".pdf"
            required
          />
        </div>
        <button type="submit" className="register-button">Register Employee</button>
      </form>
      <div className="button-container">
        <Link to="/" className="button">Home</Link> {/* Botão para ir para a página Home */}
      </div>
    </div>
  );
};

export default EmployeeRegistrationForm;
