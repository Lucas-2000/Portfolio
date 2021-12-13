import './styles.scss'

export function Header() {
    return (
        <div className="containerContent">
            <header className="headerContent">
                <strong>Lucas Marchesoni.</strong>
                <a href="/">
                    Home
                </a>
                <a href="/about">
                    Sobre
                </a>
                <a href="/services">
                    Serviços
                </a>
                <a href="/projects">
                    Projetos
                </a>
                <a href="/contact">
                    Contato
                </a>
            </header>
        </div>
    )
}