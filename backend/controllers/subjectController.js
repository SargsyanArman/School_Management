import db from '../db/db.js';

export const getSubjects = (req, res) => {
    const sql = 'SELECT * FROM subjects';
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const addSubject = (req, res) => {
    const { name } = req.body;
    const sql = 'INSERT INTO subjects (`name`) VALUES (?)';
    db.query(sql, [name], (err) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};

export const updateSubject = (req, res) => {
    const { name } = req.body;
    const subjectId = req.params.id;
    const sql = 'UPDATE subjects SET name = ? WHERE id = ?';
    db.query(sql, [name, subjectId], (err) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};

export const deleteSubject = (req, res) => {
    const subjectId = req.params.id;
    const sql = 'DELETE FROM subjects WHERE id = ?';
    db.query(sql, [subjectId], (err) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};
