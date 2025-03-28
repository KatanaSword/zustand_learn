import React from "react";
import useCourseStore from "../app/courseStore";
import { useShallow } from "zustand/shallow";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    useShallow((state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    }))
  );
  return (
    <>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className={`course-item`}
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={(e) => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span
                  style={{
                    color: "black",
                  }}
                >
                  {course?.title}
                </span>
                <button
                  className="delete-btn"
                  onClick={() => removeCourse(course.id)}
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
