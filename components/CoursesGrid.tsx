"use client";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
};

type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default function CoursesGrid({ courses = [] }: { courses?: Course[] }) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.div>
  );
}
