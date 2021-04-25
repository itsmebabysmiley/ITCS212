const dbConnection = require("../resources/dbConnection");
class CourseMng {
  async getAllCourses() {
    // Get the connection
    let connection = await dbConnection();
    try {
      let sql = "SELECT * FROM lab12.reminders ORDER BY duedate ASC";
      let results = await connection.query(sql);
      return results;
    } catch (error) {
      throw error;
    }
  }
  /* More SQL Methods here */
}
module.exports.CourseMng = CourseMng;