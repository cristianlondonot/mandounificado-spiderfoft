
import { useState } from "react";
import { DatePicker } from "keep-react";

const RangeDate = () => {

  const [rangeDate, setRangeDate] = useState(null);

  return (
    <DatePicker showTwoMonth={true} rangeDate={setRangeDate} placeholder="Desde - Hasta">
      <DatePicker.Range />
    </DatePicker>
  );
}

export default RangeDate