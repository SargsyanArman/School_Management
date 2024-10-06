import express from 'express';
import cors from 'cors';
import adminsRoutes from './routes/adminRoutes.js';
import pupilsRoutes from './routes/pupilRoutes.js';
import subjectsRoutes from './routes/subjectRoutes.js';
import teachersRoutes from './routes/teacherRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admins', adminsRoutes);
app.use('/subjects', subjectsRoutes);
app.use('/pupils', pupilsRoutes);
app.use('/teachers', teachersRoutes);

const PORT = 8081;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
