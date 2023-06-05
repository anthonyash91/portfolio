import Name from "./Name/Name";
import Description from "./Description/Description";
import ContactButton from "./ContactButton/ContactButton";
import Avatar from "./Avatar/Avatar";

export default function Intro() {
  return (
    <>
      <div className="section">
        <div className="sub-section">
          <Name />
          <Description />
          <ContactButton />
        </div>

        <div className="sub-section photo">
          <Avatar />
        </div>
      </div>
    </>
  );
}
