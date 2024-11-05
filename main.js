let employees = [];

function toggleForm() {
    const form = document.getElementById('employeeForm');
    form.classList.toggle('hidden');
}

function addEmployee(event) {
    event.preventDefault();
    
    const newEmployee = {
        employee_id: document.getElementById('employee_id').value,
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        phone_number: document.getElementById('phone_number').value,
        email: document.getElementById('email').value,
        hire_date: document.getElementById('hire_date').value,
        dept_id: document.getElementById('dept_id').value,
        manager_id: document.getElementById('manager_id').value,
        salary: document.getElementById('salary').value,
        address: document.getElementById('address').value,
        birth_date: document.getElementById('birth_date').value,
        gender: document.getElementById('gender').value,
        image_url: document.getElementById('image_url').value
    };

    // Check if employee ID already exists
    if (employees.some(emp => emp.employee_id === newEmployee.employee_id)) {
        alert('Employee ID already exists!');
        return;
    }

    employees.push(newEmployee);
    updateEmployeeList();
    event.target.reset();
    toggleForm();
}

function removeEmployee() {
    const idToRemove = document.getElementById('removeId').value;
    const initialLength = employees.length;
    employees = employees.filter(emp => emp.employee_id !== idToRemove);
    
    if (employees.length === initialLength) {
        alert('Employee ID not found!');
    } else {
        alert('Employee removed successfully!');
        document.getElementById('removeId').value = '';
        updateEmployeeList();
    }
}

function updateEmployeeList() {
    const employeeList = document.getElementById('employeeList');
    employeeList.innerHTML = '';

    employees.forEach(emp => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        
        card.innerHTML = `
            <img src="${emp.image_url}" alt="${emp.first_name} ${emp.last_name}" 
                 onerror="this.src='https://via.placeholder.com/100'">
            <div class="employee-info">
                <p><strong>ID:</strong> ${emp.employee_id}</p>
                <p><strong>Name:</strong> ${emp.first_name} ${emp.last_name}</p>
                <p><strong>Email:</strong> ${emp.email}</p>
                <p><strong>Phone:</strong> ${emp.phone_number}</p>
                <p><strong>Department:</strong> ${emp.dept_id}</p>
                <p><strong>Salary:</strong> $${emp.salary}</p>
                <p><strong>Hire Date:</strong> ${new Date(emp.hire_date).toLocaleDateString()}</p>
                <p><strong>Address:</strong> ${emp.address}</p>
            </div>
        `;
        
        employeeList.appendChild(card);
    });
}