import './Css/Contact.css'


const Contact = () => {
    return(
        <>
        <header className="Header">
            <div className="Header-title">
                <p>Mi nombre es</p>
                <h1 className="title">Ariel Montes</h1>
                <span>Front End Developer</span>
                {/* <p>Aprendiendo programando</p>
                <p>trainee</p>  */}
                <button className="Button-cv">Descargar CV</button>
                <button className="Button-contact">Hablame</button>
            </div>
            <div className="Header-img">
                <img src="./foto-portada-portfolio.jpg" />
            </div>
        </header>
        </>
    )
}

export default Contact;