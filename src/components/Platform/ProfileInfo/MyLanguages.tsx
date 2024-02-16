import React, { FormEvent, useEffect, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import languageService from '../../../services/languageService';
import GetAllLanguage from '../../../models/response/language/GetAllLanguage';
import Paginate from '../../../models/paginate';
import GetAllLanguageLevel from '../../../models/response/languageLevel/GetAllLanguageLevel';
import languageLevelService from '../../../services/languageLevelService';
import AddRequestUserLanguage from '../../../models/requests/userLanguage/AddRequestUserLanguage';
import userLanguageService from '../../../services/userLanguageService';
import tokenDecode from '../../../hooks/tokenDecode';
import GetAllResponseUserLanguage from '../../../models/response/userLanguage/GetAllResponseUserLanguage';

interface MyLanguagesProps {
    // Define any props if needed
}

const MyLanguages: React.FC<MyLanguagesProps> = () => {
    const [languages, setLanguages] = useState<Paginate<GetAllLanguage>>({ items: [] });
    const [languagesLevel, setLanguagesLevel] = useState<Paginate<GetAllLanguageLevel>>({ items: [] });
    const [responseData, setResponseData] = useState<Paginate<GetAllResponseUserLanguage>>({ items: [] });
    const [formData, setFormData] = useState<AddRequestUserLanguage>(
        {
            userId: Number(tokenDecode().ID),
            languageId: 0,
            languageLevelId: 0
        }
    );



    const fetchData = async () => {
        try {
            await userLanguageService.getByUserId(tokenDecode().ID).then(
                (res) => {
                    if (res.status === 200) {
                        setResponseData(res.data)
                        console.log(res.data)
                    }
                }
            );

        } catch (error) {
            console.error("Veri çekme sırasında bir hata oluştu:", error);
        }
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        userLanguageService
            .add(formData)
            .then(() => { fetchData();})
            .catch(error => console.log(error))
    };

    const deleteData = async (id: number) => {
        try {
            await userLanguageService.delete(id)
            fetchData();
        }
        catch (error) {
            console.error("Veri silme sırasında bir hata oluştu:", error);
        }
    }

    const fetchLanguage = async () => {
        try {
            await languageService.getAll().then(
                (res) => {
                    if (res.status === 200) {
                        setLanguages(res.data)
                    }
                }
            );

        } catch (error) {
            console.error("Veri çekme sırasında bir hata oluştu:", error);
        }
    };

    const fetchLanguageLevel = async () => {
        try {
            await languageLevelService.getAll().then(
                (res) => {
                    if (res.status === 200) {
                        setLanguagesLevel(res.data)
                    }
                }
            );

        } catch (error) {
            console.error("Veri çekme sırasında bir hata oluştu:", error);
        }
    };

    useEffect(() => {
        fetchLanguage();
        fetchLanguageLevel();
        fetchData();
    }, []);

    return (
        <div className="col-12 col-lg-9" style={{ minHeight: '90vh' }}>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-2 mt-4">
                    <Col md={6} xs={12}>
                        <Form.Select
                            name="languageName"
                            aria-label="Dil Seçiniz*"
                            onChange={e => setFormData({ ...formData, languageId: Number(e.target.options[e.target.selectedIndex].id) })}>
                            <option value="">Dil Seçiniz*</option>
                            {
                                languages.items.map((language: any) => (
                                    <option id={language.id}>{language.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col md={6} xs={12}>
                        <Form.Select
                            name="proficiency"
                            aria-label="Seviye Seçiniz*"
                            onChange={e => setFormData({ ...formData, languageLevelId: Number(e.target.options[e.target.selectedIndex].id) })}>
                            <option value="">Seviye Seçiniz*</option>
                            {
                                languagesLevel.items.map((languageLevel: any) => (
                                    <option id={languageLevel.id}>{languageLevel.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                </Row>
                <Button type="submit" className="btn btn-primary py-2 mb-3 d-inline-block mobil-btn">
                    Kaydet
                </Button>
            </Form>
            <Row>
                <div className="tobeto-light-bg section-p my-langs">
                    {
                        responseData.items.map((data: any) => (
                            <div className="lang-edit" key={data.id} id={data.id}>
                                <div className="lang-info">
                                    <div className="lang-title ">
                                        <div className="d-flex flex-column">
                                            <span className="lang-name">{data.languageName}</span>
                                            <span className="lang-degree">{data.languageLevelName}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="lang-degree-symbol main-lang" />
                                <span className="delete-lang" onClick={() => deleteData(data.id)}/>
                            </div>
                        ))

                    }
                </div>
            </Row>
        </div>
    );
};

export default MyLanguages;