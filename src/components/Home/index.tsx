import coding from '../../assets/images/coding.jpg'
import './styles.scss'

export function Home() {
    return (
        <div className="contentContainer">
            <main className="mainContent">
                <section className="sectionInfo">
                    <p>Olá, meu nome é <br /> <strong>Lucas Marchesoni</strong> <br /> e sou um <span>desenvolvedor</span> </p>
                    <a href="/about">
                        <button>Saiba mais</button>
                    </a>
                </section>
                <section className="sectionImage">
                    <img src={coding} alt="codando" />
                </section>
            </main>
        </div>
    )
}