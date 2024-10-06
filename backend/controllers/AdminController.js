import db from '../db/db.js';

export const loginAdmin = (req, res) => {
    const sql = 'SELECT * FROM admins WHERE email = ? AND password = ?';
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            return res.json({ status: "Success", user: { name: data[0].name, email: data[0].email } });
        } else {
            return res.json({ status: "Failed" });
        }
    });
};
