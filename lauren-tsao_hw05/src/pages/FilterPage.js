import { useState } from "react";
import Filter from "../components/Filter";

const OPTIONS = [
  { label: "UX Design", value: "UX Design projects here" },
  { label: "Motion Design", value: "Motion Design projects here" },
  { label: "Website Development", value: "Website Development projects here" },
];

const FilterPage = () => {
  const [value, setValue] = useState(null);

  const handleChange = (option) => {
    setValue(option);
  };
  return (
    <div className="fixed flex flex-col items-center w-screen h-screen">
      <div className="p-3 main-font">Take a look at my projects!</div>
      <Filter options={OPTIONS} onChange={handleChange}></Filter>
      <div className="p-3 main-font">{value?.value || "Select a category above!"}</div> 
    </div>
  );
};

export default FilterPage;
