"use client"

import React, { useState, ChangeEvent } from 'react';

function Page() {
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>('');

    const handleDownload = () => {
        const csvHeaders = [
            "EventName",
            "StageName",
            "UserEmail",
            "TicketQuantity"
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

        const formData = new FormData();
        formData.append('csv', file);

        try {
            const response = await fetch('/api/upload-csv', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setUploadStatus('CSV cargado con éxito');
            } else {
                setUploadStatus('Error al cargar el CSV');
            }
        } catch (error) {
            console.error('Error:', error);
            setUploadStatus('Error al cargar el CSV');
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
        </div>
    )
}

export default Page;