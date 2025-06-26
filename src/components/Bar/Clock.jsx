import { time, timeZone } from "./Clock.module.css";

function Clock() {
  return (
    <div>
      <p className={time}>
        10:24 <span className={timeZone}>gmt</span>
      </p>
    </div>
  );
}

export default Clock;
