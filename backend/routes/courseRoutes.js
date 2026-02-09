import express from 'express';
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  getEnrolledCourses
} from '../controllers/courseController.js';
import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getCourses);
router.get('/enrolled', protect, getEnrolledCourses);
router.get('/:id', getCourse);
router.post('/', protect, admin, createCourse);
router.put('/:id', protect, admin, updateCourse);
router.delete('/:id', protect, admin, deleteCourse);
router.post('/:id/enroll', protect, enrollCourse);

export default router;
