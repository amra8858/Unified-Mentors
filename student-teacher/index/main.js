document.addEventListener('DOMContentLoaded', (event) => {
  const adminLoginBtn = document.getElementById('adminLoginBtn');
  const teacherLoginBtn = document.getElementById('teacherLoginBtn');
  const studentLoginBtn = document.getElementById('studentLoginBtn');
  const registerBtn = document.getElementById('registerBtn');

  if (adminLoginBtn) {
    adminLoginBtn.addEventListener('click', function() {
      window.location.href = 'admin-dashboard.html';
    });
  }

  if (teacherLoginBtn) {
    teacherLoginBtn.addEventListener('click', function() {
      window.location.href = 'teacher-dashboard.html';
    });
  } 
  if (studentLoginBtn) {
    studentLoginBtn.addEventListener('click', function() {
      window.location.href = 'student-dashboard.html';
    });
  } 
  if (registerBtn) {
    registerBtn.addEventListener('click', function() {
      window.location.href = 'register.html';
    });
  } else {
    console.error('Element with ID "registerBtn" not found!');
  }
});
