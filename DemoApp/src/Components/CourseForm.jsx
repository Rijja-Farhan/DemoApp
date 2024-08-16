import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCourse, updateCourse, clearEditingCourse } from '../state/slices/courseSlice';

function CourseForm() {
  const dispatch = useDispatch();
  const editingCourse = useSelector((state) => state.courses.editingCourse);

  const [name, setName] = useState('');

  useEffect(() => {
    if (editingCourse) {
      setName(editingCourse.name);
    } else {
      setName('');
    }
  }, [editingCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCourse) {
      dispatch(updateCourse({ id: editingCourse.id, name }));
      dispatch(clearEditingCourse()); // Reset after editing
    } else {
      dispatch(addCourse({ id: Date.now(), name }));
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Course name"
        className="w-full p-2 border border-gray-300 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
      >
        {editingCourse ? 'Update' : 'Add'} Course
      </button>
    </form>
  );
}

export default CourseForm;
