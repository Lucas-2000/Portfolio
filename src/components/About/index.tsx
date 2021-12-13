import './styles.scss'
import lucas from '../../assets/images/lucas.jpg'

export function About() {
    return (
        <div className="contentContainer">
            <section className="headerText">
                <h1>Sobre mim</h1>
                <span>quem sou</span>
            </section>
            <section className="aboutMe">
                <aside>
                    <img src={lucas} alt="Foto de perfil" />
                </aside>
                <section>
                    <strong>Meu nome é Lucas e eu sou um <span>desenvolvedor</span></strong>
                    <p>
                        Estudante de ciências da computação na Universidade São Judas Tadeus, procurando uma inserção na area da programação.
                        Técnico em informática formado pela ETEC Lauro Gomes.
                        Conhecimentos nas linguagens C#, Java, Javascript, HTML, CSS, SASS, React, Banco de dados MySql, Arquitetura MVC
                    </p>
                    <a href='../CV - Lucas Marchesoni.pdf' download>
                        <button>
                            Download CV
                        </button>
                    </a>
                </section>
            </section>
        </div >
    )
}