export function PrintableFile({client, invoiceInfo, articles, deadline, percentage}) {
    let nettoSum
    for(const x of articles){
        nettoSum =+ x.gPreis
    }
    const percentageToAdd = nettoSum * (percentage / 100)
    let bruttoSum = 0
        bruttoSum = percentageToAdd? (nettoSum + percentageToAdd):nettoSum


    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
            <p style={{textAlign: 'center', fontWeight: 'bold', borderBottom: '2px solid black'}}>METI-Construction
                UG</p>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: 50}}>
                <div style={{width: '30%', fontSize: '20px', lineHeight: 1.5}}>
                    <div style={{textDecoration: 'underline', fontSize: '10px'}}>METI-Construction UG - Uhlenhorst
                        149A - 21435 Stelle
                    </div>
                    <div>{client.name}</div>
                    <div>{client.addresS}</div>
                </div>
                <div style={{fontSize: '20px', textAlign: 'end', lineHeight: 1.5}}>
                    <div>METI-CONSTRUCTION</div>
                    <div>Uhlenhorst 149A</div>
                    <div>21435 Stelle</div>
                    <div>Tel.:+49 1522 3681507</div>
                    <div>Steuernummer: 50/202/04222</div>
                    <div>Finanzaamt Winsen/Luhe</div>
                </div>
            </div>
            <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: 50}}>
                <div style={{fontSize: '18px', display: 'flex', flexDirection: 'column'}}>
                    <div>Diverse Bauhaben</div>
                    <p style={{fontWeight: 'bolder', textAlign: 'center'}}>Rechnung</p>
                    <div>Sehr geehrte Damen und Herren</div>
                    <div>hiermit stellen wir Ihnen folgende Leistungen in rechnung</div>
                </div>
                <div style={{fontSize: '20px', width: '30%', margin: 0}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Rechn.-Datum</div>
                        <div>{invoiceInfo.rech}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Leist.-Datum</div>
                        <div>{invoiceInfo.leist}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Rechnung-Nr.</div>
                        <div>{invoiceInfo.rechnungNr}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Kd-Nummer</div>
                        <div>{invoiceInfo.kdNr}</div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>Aufftr.-Nummer</div>
                        <div>{invoiceInfo.aufftr}</div>
                    </div>
                </div>
            </div>
            <div style={{width: '100%', marginBottom: 50, display: 'flex', flexDirection: 'column'}}>
                <table width={'100%'}>
                    <tbody>
                    <tr style={{border: '1px solid black', fontSize: '20px'}}>
                        <th>Pos-Nr</th>
                        <th style={{textAlign: 'left'}}>Bezeichnung</th>
                        <th>Menge</th>
                        <th>Einheit</th>
                        <th>E-Preis</th>
                        <th>G-Preis</th>
                    </tr>
                    {articles && articles.map((x, index) => {
                        return (
                            <tr key={index} style={{textAlign: 'center', fontSize: '18px'}}>
                                <td>{index}.0</td>
                                <td style={{
                                    textAlign: 'left',
                                    textWrap: 'wrap',
                                    maxWidth: '300px'
                                }}>{x.Bezeichnung}</td>
                                <td>{x.Menge}</td>
                                <td>{x.Einheit}</td>
                                <td>{x.ePreis}</td>
                                <td>{x.gPreis}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
                <div style={{
                    paddingLeft: '60%',
                    marginTop: 10,
                    display: 'grid',
                    flexDirection: 'column',
                    fontSize: '15px'
                }}>
                    <div>Positionsfortsetzung nächste seite</div>
                    <div style={{
                        fontSize: '20px',
                        width: '150px',
                        background: 'lightgreen',
                        textAlign: 'center',
                        padding: 5,
                        borderBottom: '2px solid black',
                        color: 'white',
                        justifySelf: "end"
                    }}>
                        Übertrag: <span>€ {nettoSum?.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'end',
                paddingLeft: "50%",
                gap: 10,
                marginBottom: 50,
                fontSize: '20px'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifySelf: 'end',
                    borderBottom: '1px solid black'
                }}>
                    <div>Nettosumme</div>
                    <div>€ {nettoSum?.toFixed(2)}</div>
                </div>
                {
                    percentage &&
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'end',
                        fontSize: '20px'
                    }}>
                        <div>
                            MwSt. {percentage}%
                        </div>
                        <div>
                            von {nettoSum.toFixed(2)}
                        </div>
                        <div>
                            € {percentageToAdd.toFixed(2)}
                        </div>
                    </div>
                }
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifySelf: 'end',
                    borderBottom: '1px solid black',
                    fontSize: '20px'
                }}>
                    <div>Bruttosumme</div>
                    <div>€ {bruttoSum?.toFixed(2)}</div>
                </div>
            </div>
            <div style={{fontSize: '20px'}}>
                Zahlbar bis zum {deadline} ohne Abzug.
            </div>
        </div>
    )
}
