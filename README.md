# Easy Hire - Employee Registration System

Easy Hire is a web application that allows you to register employees and search for information about registered employees.

## Requirements

Before getting started, you need to ensure that you have the following software installed:

- Node.js: [Official Website](https://nodejs.org/)
- npm (Node.js package manager): Typically installed alongside Node.js
- Backend Server: Make sure you have a backend server up and running to handle the application's requests. The default URL is `http://localhost:8080`, but you can configure it as needed.

## Setup

1. Clone the Easy Hire repository:

```bash
git clone https://github.com/amandabfranca/easyHire-frontend.git
```

2. Navigate to the project directory:

```bash
cd easyHire-frontend
```

3. Install project dependencies:

```bash
npm install
```

4. Configure the backend server URL:

Open the `src/api/index.ts` file and set the URL of your backend server in the `baseURL` variable(`http://localhost:8080`).

## Running the Application

After configuration, you can run the application:

```bash
npm start
```

Access the application in your web browser at `http://localhost:3000`.

## Usage

- On the home page, you can register a new employee by clicking "Register Employee" or search for employees by clicking "Search Employee."
- On the registration page, fill out the fields and submit the necessary documents.
- On the search page, enter search criteria (cpf number) and click "Search" to find information about registered employees.

## Additional Information

- This project uses React to create the user interface.
- A backend server is required for the full functionality of the application.

## Contact

If you have any questions or need support, please contact [francabs.amanda@gmail.com].

