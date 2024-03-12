//API manager to CRUD students

const baseUrl = '/api/Student';

// Function to fetch all students
export const getAllStudents = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
};

// Function to add a student
export const addStudent = (singleStudent) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singleStudent),
  });
};

// Function to edit a student
export const editStudent = (student) => {
  return fetch(`${baseUrl}/${student.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(student)
  });
};

//Function to delete a student
export const deleteStudent = (id) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE"
    })
  }


// Function to get a portfolio by student id
export const getStudentById = (id) => {
  return fetch(`${baseUrl}/${id}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    });
};
