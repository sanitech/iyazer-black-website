import React from "react";
import aboutImage from "../Assets/images/forweb.webp";
const About = () => {
  return (
    <section>
      <div class="about-us-section">
        <div class="about-us-img-section">
          <img class="about-us-img" src={aboutImage} alt="" />

          <div class="expert">
            <div class="expert-text">
              <div class="expert-year">14</div>
              <div class="expert-text-header">
                <span class="pluse">+</span>
                <p>
                  Years <br />
                  Experience
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="about-text">
          <div class="about-text-header">Iyazer Film production</div>
          <div class="about-big-text">Creative & Expert Film Director</div>
          <div class="about-text-body">
            Our school is guided by visionary film directors who bring a wealth
            of creativity and expertise into the classroom. With a passion for
            storytelling and a deep commitment to nurturing the next generation
            of filmmakers, our directors not only craft compelling cinematic
            works but also inspire students to explore their own creative
            potential.
            <br />
            <br />
            With extensive experience across various genres and formats, our
            directors lead students through hands-on learning experiences,
            ensuring that every project is executed with artistic precision and
            a clear understanding of the filmmaking process. From script
            development to final production, students gain invaluable insights
            into the craft of visual storytelling under the mentorship of
            professionals who have mastered the art.
            <br />
            <br />
            Whether it's guiding students in producing their own dramas,
            documentaries, or commercials, our directors emphasize the
            importance of authenticity, creativity, and innovation. They foster
            a collaborative learning environment where students can experiment
            with new ideas and push the boundaries of their skills, preparing
            them for successful careers in the film industry.
            <br />
            <br />
            Through access to cutting-edge technology and a curriculum designed
            to reflect the dynamic nature of modern filmmaking, our school
            equips aspiring filmmakers with the tools and knowledge to thrive in
            a competitive industry. Our directors not only teach the technical
            aspects of the craft but also inspire students to tell stories that
            resonate deeply with audiences, both emotionally and intellectually.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
