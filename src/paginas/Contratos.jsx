import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const ContratoForm = () => {
    const [formData, setFormData] = useState({
        fecha_contrato: "",
        archivo_contrato: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            archivo_contrato: e.target.files[0],
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);

        const data = new FormData();
        data.append("fecha_contrato", formData.fecha_contrato);
        data.append("archivo_contrato", formData.archivo_contrato);

        // Aquí puedes descomentar y configurar la solicitud fetch:
        // fetch('/api/contratos', {
        //     method: 'POST',
        //     body: data,
        // }).then(response => console.log(response));
    };

    return (
        <Container className="mt-4">
            <h2>Registrar Contrato</h2>
            <Form onSubmit={handleSubmit}>
                {/* Fecha del Contrato */}
                <Form.Group controlId="fecha_contrato" className="mb-3">
                    <Form.Label>Fecha del Contrato</Form.Label>
                    <Form.Control
                        type="date"
                        name="fecha_contrato"
                        value={formData.fecha_contrato}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                {/* Archivo del Contrato */}
                <Form.Group controlId="archivo_contrato" className="mb-3">
                    <Form.Label>Archivo del Contrato</Form.Label>
                    <Form.Control
                        type="file"
                        name="archivo_contrato"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                    />
                    <Form.Text className="text-muted">
                        Solo se permiten archivos en formato PDF o Word.
                    </Form.Text>
                </Form.Group>

                {/* Botón de Enviar */}
                <Button variant="primary" type="submit">
                    Registrar Contrato
                </Button>
            </Form>
        </Container>
    );
};

export default ContratoForm;
