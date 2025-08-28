import React from 'react';
import { Link } from 'react-router-dom';

interface SubMenuProps {
    title: string;
    items: string[];
}

function textoParaURL(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export const SubMenu: React.FC<SubMenuProps> = (props) => {
    return (
        <>
            <a className="submenu" href="">{props.title}</a>
            <ul style={{ left: "6%" }}>
                {props.items.map((item, idx) => (
                    <li key={idx}><Link to={textoParaURL(item)}>{item}</Link></li>
                ))}
            </ul>
        </>
    );
}
