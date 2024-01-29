export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
  const studentsFromCity = arrayOfStudents.filter((student) => student.location === city);
  return studentsFromCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (studentGrade) {
      return { ...student, grade: studentGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
