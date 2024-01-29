export default function getStudentIdsSum(arrayOfStudents) {
  return arrayOfStudents.reduce((sumIDs, student) => sumIDs + student.id, 0);
}
