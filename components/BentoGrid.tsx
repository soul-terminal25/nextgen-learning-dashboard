"use client";
import { motion } from "framer-motion";
import HeroTile from "./HeroTile";
import ActivityTile from "./ActivityTile";
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

export default function BentoGrid({ courses = [] }: { courses?: Course[] }) {
  return (
    <motion.section
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
        <HeroTile />
      </motion.div>
      <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
        <ActivityTile />
      </motion.div>

      {courses.map((course) => (
        <motion.div key={course.id} variants={itemVariants}>
          <CourseCard course={course} />
        </motion.div>
      ))}
    </motion.section>
  );
}
