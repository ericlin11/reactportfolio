import ProfilePic from '../assets/images/ProfilePicture.jpg'

export default function About() {
    return (
        <div className="about">
            <img id="profile" src={ProfilePic}></img>
            <h1 > Eric Lin</h1>
            <h2> Brooklyn, NY </h2>
            <h2>•</h2>
            <h2> eric.lin206@gmail.com</h2>
            <h3>I am a software/web developer, tech enthusiast looking to produce creative
                software and solving problems.</h3>
        </div>
    )

}