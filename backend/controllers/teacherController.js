import db from '../db/db.js';

export const getTeachers = (req, res) => {
    const sql = `
        SELECT
            teachers.name AS teachers_name,
            teachers.id AS teacher_id,
            GROUP_CONCAT(subjects.name SEPARATOR ', ') AS all_subjects
        FROM
            teachers
        LEFT JOIN teachers_subjects ON teachers.id = teachers_subjects.teacher_id
        LEFT JOIN subjects ON subjects.id = teachers_subjects.subject_id
        GROUP BY
            teachers.id;
    `;

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

export const createTeacher = (req, res) => {
    const { name, subjectId } = req.body;
    const sqlInsertTeacher = 'INSERT INTO teachers (name) VALUES (?)';

    db.query(sqlInsertTeacher, [name], (err, result) => {
        if (err) {
            return res.json({ status: "Error", message: err.message });
        }

        const teacherId = result.insertId;

        const sqlInsertTeacherSubject = 'INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (?, ?)';
        db.query(sqlInsertTeacherSubject, [teacherId, subjectId], (err) => {
            if (err) {
                return res.json({ status: "Error", message: err.message });
            }
            return res.json({ status: "Success" });
        });
    });
};

export const updateTeacher = (req, res) => {
    const { name, subjectId } = req.body;
    const teacherId = req.params.id;

    const sql = 'UPDATE teachers SET name = ? WHERE id = ?';
    const values = [name, teacherId];

    db.query(sql, values, (err) => {
        if (err) return res.json(err);

        const sqlInsertTeacherSubject = 'INSERT INTO teachers_subjects (teacher_id, subject_id) VALUES (?, ?) ON DUPLICATE KEY UPDATE subject_id = ?';
        const subjectValues = [teacherId, subjectId, subjectId];

        db.query(sqlInsertTeacherSubject, subjectValues, (err) => {
            if (err) return res.json(err);
            return res.json({ status: "Success" });
        });
    });
};

export const deleteTeacher = (req, res) => {
    const teacherId = req.params.id;
    const sql = 'DELETE FROM teachers WHERE id = ?';

    db.query(sql, [teacherId], (err) => {
        if (err) return res.json(err);
        return res.json({ status: "Success" });
    });
};

