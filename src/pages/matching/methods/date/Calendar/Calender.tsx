import DatePicker from "react-datepicker";
import { useDate } from "../useDate";
import "./Calendar.css";

function Calender() {
  const { startDate, endDate, setDateRange } = useDate();
  return (
    <DatePicker
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        const isNotNull = update.some((date) => date !== null);
        isNotNull && setDateRange(update);
      }}
      withPortal
      portalId="root-portal"
    />
  );
}

export default Calender;
