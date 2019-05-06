const router = require("express").Router();
const conn = require("../connection/connection");

// Post data movies ke db Mysql / REGISTER
router.post("/addMovie", async (req, res) => {
  var sql = `INSERT INTO movies SET ?;`; // Tanda tanya akan digantikan oleh variable data
  var sql2 = `SELECT * FROM movies;`;
  var data = req.body; // Object dari movies
  conn.query(sql, data, (err, result) => {
    // send dan save data ke mySql db
    // data = lokasi simpan data user yg di input
    if (err) return res.send(err.sqlMessage);

    conn.query(sql2, (err, result) => {
      if (err) return res.send(err); // Error pada select data

      res.send(result);
    });
  });
});

// UPDATE movie BY movieID
router.patch("/movies/:id", (req, res) => {
  const sql = "UPDATE movies SET ? WHERE id = ?";
  const data = [req.body, req.params.id];

  conn.query(sql, data, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

// DELET movie BY movieID lewat params
router.delete("/movies/:id", (req, res) => {
  // DELETE TASK BY ID
  const sql = `DELETE FROM movies WHERE id = ?`;
  const data = req.params.id;

  conn.query(sql, data, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

// GET all movies
router.get("/allmovies", (req, res) => {
  const sql = `SELECT* FROM movies;`;
  //const data = req.params.userid;

  conn.query(
    sql,
    /*data,*/ (err, result) => {
      if (err) return res.send(err);

      res.send(result);
    }
  );
});

module.exports = router;
