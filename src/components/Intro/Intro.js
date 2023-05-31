import './Intro.scss'

export default function Intro() {
    return (
        <>
            <div className="section">
                <div className="sub-section">
                    <div className="name">
                    <h1>Anthony Ashcraft 👋</h1>
                    <span />Junior Full-Stack Engineer
                    </div>

                    <div className="description">I'm a passionate full-stack Software Engineer (with a focus on frontend) with experience in creating beautiful, user-friendly, UX-rich web applications.</div>

                    <div className="buttons">
                        <button className="contact">Contact Me<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M49.9 27.8C15.1 12.7-19.2 50.1-1.2 83.5L68.1 212.2c4.4 8.3 12.6 13.8 21.9 15c0 0 0 0 0 0l176 22c3.4 .4 6 3.3 6 6.7s-2.6 6.3-6 6.7l-176 22s0 0 0 0c-9.3 1.2-17.5 6.8-21.9 15L-1.2 428.5c-18 33.4 16.3 70.8 51.1 55.7L491.8 292.7c32.1-13.9 32.1-59.5 0-73.4L49.9 27.8z"/></svg></button>
                    </div>
                </div>

                <div className="sub-section photo">
                    <div className="icon">
                    <div className="icon-image" />
                    </div>
                </div>
            </div>
        </>
    )
}