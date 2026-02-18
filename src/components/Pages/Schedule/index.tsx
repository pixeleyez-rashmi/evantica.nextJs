import ScheduleHome from "./ScheduleHome";
import ScheduleSessions from "./ScheduleSessions";

export default function ScheduleIndex() {
  return (
    <>
      <div className="relative font-ibm">
        <ScheduleHome />
        <ScheduleSessions />
      </div>
    </>
  );
}
