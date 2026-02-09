import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Web Dev', 'AI', 'Design', 'Marketing', 'Business', 'Data Science']
  },
  price: {
    type: String,
    required: [true, 'Price is required']
  },
  duration: {
    type: String,
    required: [true, 'Duration is required']
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800'
  },
  enrolledStudents: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

export default mongoose.model('Course', courseSchema);
