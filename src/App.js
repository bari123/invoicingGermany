import './App.css';
import {useRef, useState} from 'react';
import {PrintableFile} from "./printablefile";
import generatePDF from 'react-to-pdf';

const InputField = ({ label, value, onChange }) => (
    <label>
        {label}
        <input value={value} onChange={onChange} />
    </label>
);

function App() {

    const targetRef = useRef();
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
        Bezeichnung: '',
        Menge: '',
        Einheit: '',
        ePreis: 0,
        gPreis: 0
    });
    const [tableData, setTableData] = useState([]);

    const invoiceInfo={rech,leist,rechnungNr,kdNr,aufftr}

    const handleAddRow = () => {
        setTableData([...tableData, inputData]);
        setInputData({ Bezeichnung: '',Menge: '',  Einheit: '', ePreis: 0, gPreis: 0 });
    };
    const handleDownloadPdf=()=>{
        generatePDF(targetRef, {filename: `${clientName}-${new Date().toLocaleDateString()}.pdf`})
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="App">
            <div ref={targetRef} style={{width:'100%',height:'100%',padding:20,marginBottom:50}}>
                <PrintableFile deadline={deadline} percentage={percentage} articles={tableData} client={{clientName,clientAddress}} invoiceInfo={invoiceInfo} />
            </div>
            <div style={{display:'flex',width:'100%',justifyContent:'space-around',borderTop:'2px solid black'}}>
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
                <div>
                    <input type="text" name="Bezeichnung" placeholder="Bezeichnung" value={inputData.Bezeichnung}  onChange={handleInputChange} />
                    <input type="text" name="Menge" placeholder="Menge" value={inputData.Menge} onChange={handleInputChange} />
                    <input type="text" name="Einheit" placeholder="Einheit" value={inputData.Einheit} onChange={handleInputChange} />
                    <input type="text" name="ePreis" placeholder="E-Preis" value={inputData.ePreis} onChange={handleInputChange} />
                    <input type="text" name="gPreis" placeholder="G-Preis" value={inputData.gPreis} onChange={handleInputChange} />
                    <button onClick={handleAddRow}>+ Add Row</button>
                </div>
            </div>
            <fieldset style={{marginTop:50,display:'flex',width:'100%',justifyContent:'space-around'}}>
              <legend>Actions</legend>
            <button>Print</button>
            <button onClick={()=>{window.print()}}>Print    Preview</button>
            <button onClick={ handleDownloadPdf}>Download PDF</button>
            </fieldset>

        </div>
    );
}

export default App;
