import './styles.scss'
import { AiFillGithub, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

export function Contact() {
    return (
        <div className="contentContainer">
            <section className="headerText">
                <h1>Contato</h1>
                <span>fale comigo</span>
            </section>
            <section className="contactInfo">
                <table>
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <AiFillGithub />
                                <a href="https://github.com/Lucas-2000/" target="_blank" rel="noreferrer">
                                    Github
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <AiFillFacebook />
                                <a href="https://www.facebook.com/lucas.marchesoni.7" target="_blank" rel="noreferrer">
                                    Facebook
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <AiFillInstagram />
                                <a href="https://instagram.com/lucasmarchesoni06" target="_blank" rel="noreferrer">
                                    Instagram
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <AiOutlineWhatsApp />
                                <a href="https://api.whatsapp.com/send?phone=5511987716014" target="_blank" rel="noreferrer">
                                    Whatsapp
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SiGmail />
                                <a href="mailto:lucasmarchesoni620@gmail.com?subject=Contato%20portfolio" target="_blank" rel="noreferrer">
                                    Email
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <AiFillLinkedin />
                                <a href="https://instagram.com/lucasmarchesoni06" target="_blank" rel="noreferrer">
                                    LinkedIn
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    )
}