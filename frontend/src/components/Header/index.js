import "./Header.css";

import { VscChromeClose, VscAdd, VscChecklist, VscExtensions } from "react-icons/vsc";
import { Component } from "react";

export class Header extends Component {
    render(){
        return(
            <header className="headerContainer">
                <div className="logo">
                    <h2>Grupo<span>Freitas</span></h2>
                </div>
                <div className="menu">
                    <ul>
                        <li><span><VscExtensions/></span><p> Resumo</p></li>
                        <li><span><VscChecklist/></span> <p>Tickets</p></li>
                        <li><span><VscAdd/> </span><p>Novo Ticket</p></li>
                        <li><span><VscChromeClose /></span> <p>Sair</p></li>
                    </ul>
                </div>
            </header>
        )
    }
}

