interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student {
  firstName: 'Khalid',
  lastName: 'Benhamou',
  age: 24,
  location: 'Morocco'
}

const student2: Student {
  firstName: 'Reece',
  lastName: 'James',
  age: 24,
  location: 'United Kingdom'
}

const students: Student[] = [student1, student2];

const body = document.getElementsByTagName('body')[0];
const table = document.createElement('table');
const thead = document.createElement('thead');
const thFirstName = document.createElement('th');
const thLocation = document.createElement('th');

thFirstName.innerText = 'First Name';
thLocation.innerText = 'Location';

thead.append(thFirstName);
thead.append(thLocation);
table.append(thead);

students.forEach((s) => {
  const tableRow = document.createElement('tr');
  const tableData_1 = document.createElement('td');
  const tableData_2 = document.createElement('td');

  tableData_1.innerText = s.firstName;
  tableData_2.innerText = s.location;

  tableRow.append(tableData_1);
  tableRow.append(tableData_2);

  table.append(tableRow);
});

body.append(table);
