import { ABOUT } from "../components/About-data";
import ABOUT_IMG from "../assets/Me.gif";

const AboutPage = () => {
  return (
    <div className="main-font flex justify-center items-center my-20">
      <div>
        <img className="border-2 border-black rounded-full w-80 mx-10" src={ABOUT_IMG} alt="self-portrait" />
      </div>

      <div>
        <div className="my-5">
          <h2 className="text-xl font-bold">{ABOUT.title}</h2>
          <p>{ABOUT.description}</p>
        </div>

        <div className="flex">
          <div className="m-10">
            <h2 className="text-xl font-bold">Software</h2>
            <ul>
              {ABOUT.tools.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div className="m-10">
            <h2 className="text-xl font-bold">Skills</h2>
            <ol>
              {ABOUT.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
