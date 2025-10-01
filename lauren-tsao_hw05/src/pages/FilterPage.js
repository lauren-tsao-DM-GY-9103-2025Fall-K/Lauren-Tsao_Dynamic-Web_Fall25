import { useState } from "react";
import Filter from "../components/Filter";

const OPTIONS = [
  { label: "About Me", value: "I am a product designer with 7 years of experience in motion design." },
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
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="p-3 main-font">Hello! My name is Lauren.</div>
      <img
        className="p-3"
        src="https://images.squarespace-cdn.com/content/v1/6797e73dcc7f53637938d525/104a6879-ca79-4d99-b109-f78bb49cb87d/Me_circle.png?format=30w" alt="A self-portrait"
      />
      <Filter options={OPTIONS} onChange={handleChange}></Filter>
      <div className="p-3 main-font">{value?.value || "Pick something!"}</div> 
    </div>
  );
};

export default FilterPage;
