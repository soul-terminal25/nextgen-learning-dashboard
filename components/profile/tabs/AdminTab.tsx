import Timetable from "../admin/Timetable";
import FeeInfo from "../admin/FeeInfo";

export default function AdminTab() {
  return (
    <div className="space-y-6">
      <Timetable />
      <FeeInfo />
    </div>
  );
}
