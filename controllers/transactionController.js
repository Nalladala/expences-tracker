const db = require('../db/database');

exports.createTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  db.run("INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)", [type, category, amount, date, description], function(err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
};


exports.getTransactionById = (req, res) => {
    const id = req.params.id;
    db.get("SELECT * FROM transactions WHERE id = ?", [id], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (!row) {
        return res.status(404).json({ error: "Transaction not found" });
      }
      res.json({ transaction: row });
    });
  };
  
// Other controller methods for update, delete, etc.
