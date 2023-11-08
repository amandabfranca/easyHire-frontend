import api from './index';

export {};

interface Employee {
  id: number;
  name: string;
  // Outros campos do funcionário
}

export async function getEmployees(): Promise<Employee[]> {
  try {
    const response = await api.get<Employee[]>('/employees');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function addEmployee(employeeData: Employee): Promise<Employee> {
  try {
    const response = await api.post<Employee>('/employees', employeeData);
    return response.data;
  } catch (error) {
    throw error;
  }
}
