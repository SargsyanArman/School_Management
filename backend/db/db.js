
import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database!');
});

export default db;