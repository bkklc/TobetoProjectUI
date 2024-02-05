import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

interface MyLanguagesProps {
    // Define any props if needed
}

const MyLanguages: React.FC<MyLanguagesProps> = () => {
    const [language, setLanguage] = useState<string>('');
    const [proficiency, setProficiency] = useState<string>('');

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value);
    };

    const handleProficiencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setProficiency(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <div className="col-12 col-lg-9" style={{ minHeight: '90vh' }}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-2 mt-4">
                    <Col md={6} xs={12}>
                        <Form.Select
                            name="languageName"
                            aria-label="Dil Seçiniz*"
                            value={language}
                            onChange={handleLanguageChange}
                        >
                            <option value="">Dil Seçiniz*</option>
                            {/* Add language options here */}
                        </Form.Select>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Select
                            name="proficiency"
                            aria-label="Seviye Seçiniz*"
                            value={proficiency}
                            onChange={handleProficiencyChange}
                        >
                            <option value="">Seviye Seçiniz*</option>
                            {/* Add proficiency options here */}
                        </Form.Select>
                    </Col>
                </Row>
                <Button type="submit" className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
                    Kaydet
                </Button>
            </Form>
            <Row>
                <div className="tobeto-light-bg section-p my-langs">
                    {/* Display selected language and proficiency */}
                </div>
            </Row>
        </div>
    );
};

export default MyLanguages;