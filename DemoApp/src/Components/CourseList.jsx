import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCourse, setEditingCourse } from '../state/slices/courseSlice';

function CourseList() {
  const courses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();

  const handleDelete = (courseId) => {
    dispatch(deleteCourse(courseId));
  };

  const handleEdit = (course) => {
    dispatch(setEditingCourse(course));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Courses</h2>
      <ul className="bg-white border border-gray-200 rounded-lg shadow-md">
        {courses.length > 0 ? (
          courses.map((course) => (
            <li 
              key={course.id} 
              className="px-4 py-3 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition duration-300 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800">{course.name}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(course)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(course.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="px-4 py-3 text-center text-gray-500">No courses available</li>
        )}
      </ul>
    </div>
  );
}

export default CourseList;
