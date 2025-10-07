import { ABOUT } from "../components/About-data";
import ABOUT_IMG from "../assets/Me.gif";
import ABOUT_VIDEO from "../assets/EFE-AR-MANUAL_PRODUCT-REEL.mp4";

const AboutPage = () => {
  return (
    <div className="main-font flex items-center justify-between my-10">
      <div>
        <img className="border-2 border-black rounded-full w-40 ml-14 mb-8" src={ABOUT_IMG} alt="self-portrait" />

         <div className="w-52 ml-14">
          <h2 className="text-xl font-bold">{ABOUT.title}</h2>
          <p>{ABOUT.description}</p>
        </div>
      </div>

      <video className="rounded-lg" width="60%" autoPlay muted loop>
  <source src={ABOUT_VIDEO} type="video/mp4" />
</video>

<div>
          <div className="mb-10 mr-8">
            <h2 className="text-xl font-bold">Software</h2>
            <ul>
              {ABOUT.tools.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>

          <div  className="mr-8">
            <h2 className="text-xl font-bold">Skills</h2>
            <ol>
              {ABOUT.skills.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>
        </div>
  );
};

export default AboutPage;
