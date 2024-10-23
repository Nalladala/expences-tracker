const db = require('../db/database');

exports.createCategory = (req, res) => {
  const { name, type } = req.body;
  db.run("INSERT INTO categories (name, type) VALUES (?, ?)", [name, type], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
};

exports.getAllCategories = (req, res) => {
  db.all("SELECT * FROM categories", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ categories: rows });
  });
};
