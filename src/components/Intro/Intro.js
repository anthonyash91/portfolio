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
                        <button className="contact">Contact Me</button>
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