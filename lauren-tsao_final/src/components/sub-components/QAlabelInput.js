import React from "react";

const QALabelInput = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div className="flex flex-col w-80">
      <label className="text-[20px] mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-black px-3 py-2 mb-4 focus:outline-none focus:ring-1 focus:ring-black"
      />
    </div>
  );
};

export default QALabelInput;
