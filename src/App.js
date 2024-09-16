import './App.css';
import { useState } from 'react';

const InputField = ({ label, value, onChange }) => (
    <label>
        {label}
        <input value={value} onChange={onChange} />
    </label>
);

function App() {
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [rech, setRech] = useState('');
    const [leist, setLeist] = useState('');
    const [rechnungNr, setRechnungNr] = useState('');
    const [kdNr, setKdNr] = useState('');
    const [aufftr, setAufftr] = useState('');
    const [deadline, setDeadline] = useState('');
    const [percentage, setPercentage] = useState('');

    const [inputData, setInputData] = useState({
        column1: '',
        column2: '',
        column3: '',
        column4: '',
        column5: ''
    });
    const [tableData, setTableData] = useState([]);

    const handleAddRow = () => {
        setTableData([...tableData, inputData]);
        setInputData({ column1: '', column2: '', column3: '', column4: '', column5: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="App">
            <div style={{display:'flex',width:'100%',justifyContent:'space-around'}}>

            <fieldset>
                <legend>Client Information</legend>
                <InputField label="Name" value={clientName} onChange={e => setClientName(e.target.value)} />
                <InputField label="Address" value={clientAddress} onChange={e => setClientAddress(e.target.value)} />
            </fieldset>

            <fieldset>
                <legend>Invoice Information</legend>
                <InputField label="Rechn.-Datum" value={rech} onChange={e => setRech(e.target.value)} />
                <InputField label="Leist.-Datum" value={leist} onChange={e => setLeist(e.target.value)} />
                <InputField label="Rechnung-Nr." value={rechnungNr} onChange={e => setRechnungNr(e.target.value)} />
                <InputField label="Kd-Nummer" value={kdNr} onChange={e => setKdNr(e.target.value)} />
                <InputField label="Aufftr.-Nummer" value={aufftr} onChange={e => setAufftr(e.target.value)} />
            </fieldset>
            </div>

            <fieldset>
                <legend>Other Information</legend>
                <InputField label="Frist" value={deadline} onChange={e => setDeadline(e.target.value)} />
                <InputField label="Prozentsatz" value={percentage} onChange={e => setPercentage(e.target.value)} />
            </fieldset>

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Pos.nr</th>
                        <th>Bezeichnung</th>
                        <th>Menge</th>
                        <th>Einheit</th>
                        <th>E-Preis</th>
                        <th>G-Preis</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{row.column1}</td>
                            <td>{row.column2}</td>
                            <td>{row.column3}</td>
                            <td>{row.column4}</td>
                            <td>{row.column5}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <div>
                    <input type="text" name="column1" placeholder="Bezeichnung" value={inputData.column1} onChange={handleInputChange} />
                    <input type="text" name="column2" placeholder="Menge" value={inputData.column2} onChange={handleInputChange} />
                    <input type="text" name="column3" placeholder="Einheit" value={inputData.column3} onChange={handleInputChange} />
                    <input type="text" name="column4" placeholder="E-Preis" value={inputData.column4} onChange={handleInputChange} />
                    <input type="text" name="column5" placeholder="G-Preis" value={inputData.column5} onChange={handleInputChange} />
                    <button onClick={handleAddRow}>+ Add Row</button>
                </div>
            </div>
            <fieldset style={{marginTop:50,display:'flex',width:'100%',justifyContent:'space-around'}}>
              <legend>Actions</legend>
            <button>Print</button>
            <button>Print    Preview</button>
            <button>Download</button>
            </fieldset>
        </div>
    );
}

export default App;
