const execute = require("./index");

const SQL_QUERY = "SELECT COUNT(*) FROM student GROUP BY age";

execute(SQL_QUERY).then((data) => {
  console.log(data);
});