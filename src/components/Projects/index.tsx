import './styles.scss'
import { GiTripleNeedle } from 'react-icons/gi'
import { BiPlusMedical } from 'react-icons/bi'
import { IoMdCalculator } from 'react-icons/io'

export function Projects() {
    return (
        <div className="contentContainer">
            <section className="headerText">
                <h1>Projetos</h1>
                <span>principais projetos que ja desenvolvi</span>
            </section>
            <div className="projectsPaper">
                <section>
                    <header>
                        <GiTripleNeedle size={40} style={{ color: '#121214' }} />
                        <strong>
                            InfoVac
                        </strong>
                    </header>
                    <p>
                        Desenvolvido em React a partir do projeto de extensão soluções digitais da Universidade São Judas. Site bilingue informativo sobre vacinas.
                    </p>
                </section>
                <section>
                    <header>
                        <BiPlusMedical size={40} style={{ color: '#121214' }} />
                        <strong>
                            Imuniza Fácil
                        </strong>
                    </header>
                    <p>
                        Desenvolvido em Java e MySql um gerenciador da fila de vacinação da covid 19. Possível fazer CRUD, puxar relatórios, gerenciar a fila.
                    </p>
                </section>
                <section>
                    <header>
                        <IoMdCalculator size={40} style={{ color: '#121214' }} />
                        <strong>
                            Calculadora
                        </strong>
                    </header>
                    <p>
                        Desenvolvido em React com a biblioteca Material UI. Calculadora 100% funcional.
                    </p>
                </section>
            </div>
        </div>
    )
}