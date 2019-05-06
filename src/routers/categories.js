const router = require("express").Router();
const conn = require("../connection/connection");

// Post data Categories ke db Mysql / REGISTER
router.post("/addCategories", async (req, res) => {
  var sql = `INSERT INTO categories SET ?;`; // Tanda tanya akan digantikan oleh variable data

  var sql2 = `SELECT * FROM categories;`;
  var data = req.body;

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

// UPDATE catagories BY movieID
router.patch("/categories/:id", (req, res) => {
  const sql = "UPDATE categories SET ? WHERE id = ?";
  const data = [req.body, req.params.id];

  conn.query(sql, data, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

// DELET categories BY categoriesID lewat params
router.delete("/categories/:id", (req, res) => {
  const sql = `DELETE FROM categories WHERE id = ?`;
  const data = req.params.id;

  conn.query(sql, data, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

// GET all catagories
router.get("/allcategories", (req, res) => {
  const sql = `SELECT* FROM categories;`;

  conn.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
});

module.exports = router;
