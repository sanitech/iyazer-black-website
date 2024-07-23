import React from 'react'
import aboutImage from '../Assets/images/forweb.png'
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
                        I’m a world-renowned filmmaker who, for the past 9 years of my
                        26-years career have specialized in creating incredible cinematic
                        images no matter what the camera. Some of my most iconic work was
                        created with Canon DSLRs. Sloping each project alongside the
                        communities at the heart of her stories in order to ensure
                        authenticity.
                        <br />
                        <br />
                        I can film your project whether it is a commercial advertise, a
                        short film or a document film. I have expertise in these fields.
                        Founded in 2007 by Faime located at Kisterdast, London.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
