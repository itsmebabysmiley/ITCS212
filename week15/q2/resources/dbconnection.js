const mysql = require("promise-mysql");

var dbConfig = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "lab12",
};
module.exports = async () => {
  try {
    let pool = await mysql.createPool(dbConfig);
    let connection = pool.getConnection();
    return connection;
  } catch (error) {
    throw error;
  }
};
