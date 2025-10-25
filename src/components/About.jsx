import Back from "./Back"
import Heading from "./Heading"


function About() {
  return (
    <><section className="about">
        <Back  name='BrickBase' title='About Us - Who We Are?' cover={"about.jpg"} />
        <div className="f container file mtop">
            <div className="left row">
                <Heading  title='Our Agency Story' subtitle='Check out our company story and work process' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <button className="btn2">More About Us</button>
            </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
        </section></>
  )
}

export default About