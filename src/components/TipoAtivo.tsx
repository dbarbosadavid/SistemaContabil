import React from 'react';

interface props{
    grupo: string;
    saldo: string;
}

export const TipoAtivo: React.FC<props> = (props) => {
    return (
        <>
            <div className="grupo-contas">
                <h1>
                    {props.grupo}
                </h1>
                <h2>
                    {props.saldo}
                </h2>
            </div>
        </>
    );
}