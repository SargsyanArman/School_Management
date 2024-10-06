import db from '../db/db.js';

export const getPupils = (req, res) => {
    const sql = `SELECT
        pupils.name AS pupils_name,
        grades.name AS grades_name,
        pupils.id AS pupils_id,
        grades.id AS grades_id,
        GROUP_CONCAT(subjects.name SEPARATOR ', ') AS all_subjects
        FROM
        pupils
        LEFT JOIN grades_subjects ON pupils.grade_id = grades_subjects.grade_id
        LEFT JOIN subjects ON subjects.id = grades_subjects.subject_id
        LEFT JOIN grades ON grades.id = pupils.grade_id
        GROUP BY
        pupils.id`;
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const addPupil = (req, res) => {
    const { name, grade_id } = req.body;
    const sql = 'INSERT INTO pupils (`name`, `grade_id`) VALUES (?, ?)';
    db.query(sql, [name, grade_id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};

export const updatePupil = (req, res) => {
    const { pupils_name, grades_id } = req.body;
    const userId = req.params.id;
    const sql = 'UPDATE pupils SET name = ?, grade_id = ? WHERE id = ?';
    db.query(sql, [pupils_name, grades_id, userId], (err, result) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};

export const deletePupil = (req, res) => {
    const userId = req.params.id;
    const sql = 'DELETE FROM pupils WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};
