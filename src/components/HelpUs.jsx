import aboutImg from "../images/SocialService.webp";
import Title from "./Title";
export default function HelpUs() {
  return (
    <section className="section" id="about">
      <Title title="help" subTitle="us" />
      {/* <div className="section-title">
        <h2>
          help <span>us</span>
        </h2>
        IGQWRNaTE1WGdSR3FFTHU3MGtPZA2VCdTc0X2JiUjRKRXBXcXZArMXA1RDU2R0VZAbFVNTF9lYVRPcEpPWGFmZAlR4VkJyXzlMZAXdZAWWlSelU1d0d6RzlYR1ZASUFd6dzBzTUY3WHJxNGRiZATN1ZAlBEbWdPcHVDc3I5YjAZD
      </div> */}

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3> Join the Movement: Empower Conservation and Transform Lives</h3>
          <p>
          Join us in a transformative journey where your support not only conserves our precious environment 
          but also empowers marginalized communities. Be the change by backing our noble cause – from nurturing 
          ecosystems to uplifting lives.           
          </p>
           
          <p>
          Your contribution creates a sustainable legacy, fostering a world where nature thrives, and every individual flourishes. 
          Together, let's paint a brighter future for our planet and its people. Join hands, create impact!
          </p>
          <a href="#" className="btn">
            Donate
          </a>
        </article>
      </div>
    </section>
  );
}
