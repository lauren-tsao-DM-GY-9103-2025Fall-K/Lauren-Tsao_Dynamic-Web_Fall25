import { NavLink } from "react-router-dom";
import { CONSTELLATION } from "./Constellation-data";
import Button from "./Button";

const ZodiacCard = () => {
  return (
    <div className="absolute w-screen h-screen overflow-clip flex items-center justify-center">
      <div className=" w-1/2 h-2/3">
        <div className="flex justify-between items-center">
          <h1>Virgo</h1>
          <span>Date</span>
        </div>
        <hr />

        <div className="h-3/4 flex items-center justify-between">
          <span>
            Today is a day for careful planning and attention to detail, Virgo.
            Your analytical skills are heightened, making it an excellent time
            to tackle complex problems. In your personal relationships, clear
            communication will prevent misunderstandings. Take some time for
            self-care and don't be too critical of yourself or others. A small
            act of kindness could have unexpected positive results.
          </span>
          <img
            className="ml-10 h-5/6"
            src={CONSTELLATION.virgo}
            alt="virgo constellation"
          />
        </div>
        <NavLink to="/home">
        <Button secondary>Back</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default ZodiacCard;
