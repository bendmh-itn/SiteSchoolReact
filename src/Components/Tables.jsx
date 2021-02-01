import React from 'react';




const Table = ({data=[], tabKey = []}) => {
    return ( 
        <>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                    {tabKey.map((key) => 
                        <th key={key} scope="col">{key}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {data.map((person) => 
                        <tr key={person.Nom}>
                            {tabKey.map((key) =>
                                {if (key === "Nom" || key === "Prénom")
                                    return <td>{person[key]}</td>
                                    if (person[key] !== "")
                                    return <td><a href={person[key]} target="_blank" rel="noreferrer">Lien</a></td> 
                                    return <td></td>
                                }
                            )}
                        </tr>
                    )}
                    </tbody>
            </table>
        </>
     );
}
 
export default Table;