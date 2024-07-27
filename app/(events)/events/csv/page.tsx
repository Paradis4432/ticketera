"use client"

import React, { useState, ChangeEvent } from 'react';
import {processCSV} from "@/app/(events)/events/csv/actions";

type ProcessResult = {
    success: boolean;
    message: string;
    details: {
        success?: string[];
        errors: string[];
    };
};

function Page() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');
    const [results, setResults] = useState<ProcessResult['details'] | null>(null);

    const handleDownload = () => {
        const csvHeaders = [
            "EventName",
            "StageName",
            "userId",
            "TicketQuantity",
            "Notes"
        ].join(',');

        const csvContent = csvHeaders + "\n";

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement("a");
        if (link.download !== undefined) {
            const url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "plantilla_tickets.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    }

    const handleUpload = async () => {
        if (!file) {
            setUploadStatus('Por favor, seleccione un archivo CSV primero.');
            return;
        }

        try {
            const fileContent = await file.text();
            const result = await processCSV(fileContent);

            setUploadStatus(result.message);
            setResults(result.details);
        } catch (error) {
            console.error('Error:', error);
            setUploadStatus('Error al procesar el CSV');
            setResults({ errors: ['Error inesperado al procesar el CSV'] });
        }
    }

    return (
        <div>
            <h1>Página de CSV para Tickets de Eventos</h1>
            <button onClick={handleDownload}>Descargar Plantilla CSV</button>
            <br /><br />
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Cargar CSV</button>
            {uploadStatus && <p>{uploadStatus}</p>}
            {results && (
                <div>
                    <h3>Resultados:</h3>
                    {results.success && results.success.length > 0 && (
                        <div>
                            <h4>Éxitos:</h4>
                            <ul>
                                {results.success.map((msg, index) => (
                                    <li key={index}>{msg}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {results.errors.length > 0 && (
                        <div>
                            <h4>Errores:</h4>
                            <ul>
                                {results.errors.map((msg, index) => (
                                    <li key={index}>{msg}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default Page;