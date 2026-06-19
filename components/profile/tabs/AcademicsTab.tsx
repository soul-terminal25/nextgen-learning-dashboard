import AcademicOverview from "../academics/AcademicOverview";
import AttendanceChart from "../academics/AttendanceChart";
import MyCoursesList from "../academics/MyCoursesList";

export default function AcademicsTab() {
  return (
    <div className="space-y-6">
      <AcademicOverview />
      <AttendanceChart />
      <MyCoursesList />
    </div>
  );
}
