const router = require("express").Router();
const conn = require("../connection/connection");

//Tambah Conection
router.post("/movcat/filmkatagori", async (req, res) => {
  var sql = `INSERT INTO movcat SET ?;`;
  var sql2 = `SELECT mo.nama as Nama_Movie, c.nama as Nama_Category FROM movies mo JOIN movcat mc ON mo.id = mc.movie_id
    JOIN categories c ON c.id = mc.category_id;`;

  var data = req.body;

  conn.query(sql, data, (err, result) => {
    if (err) return res.send(err.sqlMessage); // Error pada post data

    conn.query(sql2, (err, result) => {
      if (err) return res.send(err); // Error pada select data

      res.send(result);
    });
  });
});

// DELET movcat BY movcatID lewat params
router.delete("/movcat/:id", (req, res) => {
  const sql = `DELETE FROM movcat WHERE id = ?`;
  const data = req.params.id;

  conn.query(sql, data, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

module.exports = router;
