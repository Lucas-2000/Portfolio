import './styles.scss'
import { MdAnalytics, MdDeveloperMode } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'

export function Services() {
    return (
        <div className="contentContainer">
            <section className="headerText">
                <h1>Meus serviços</h1>
                <span>o que posso oferecer</span>
            </section>
            <div className="servicesPaper">
                <section>
                    <header>
                        <MdDeveloperMode size={40} style={{ color: '#121214' }} />
                        <strong>
                            Desenvolvedor
                        </strong>
                    </header>
                    <p>
                        Desenvolvedor web frontend e de sistemas desktops
                    </p>
                </section>
                <section>
                    <header>
                        <FaDatabase size={40} style={{ color: '#121214' }} />
                        <strong>
                            Banco de dados
                        </strong>
                    </header>
                    <p>
                        Integração com banco de dados relacionais e não relacionais
                    </p>
                </section>
                <section>
                    <header>
                        <MdAnalytics size={40} style={{ color: '#121214' }} />
                        <strong>
                            Analista
                        </strong>
                    </header>
                    <p>
                        Diagramas e modelagem num geral
                    </p>
                </section>
            </div>
        </div>
    )
}