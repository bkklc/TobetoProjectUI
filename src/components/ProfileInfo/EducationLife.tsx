import React from 'react';

const EducationLife = () => {
    return (
        <div className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
            <form data-hs-cf-bound="true">
                <div className="row mb-2">
                    {/* Eğitim Durumu */}
                    <div className="col-12 col-md-6 mb-6">
                        <label className="form-label">Eğitim Durumu*</label>
                        <select name="EducationStatus" className="form-select tobeto-input">
                            <option value="">Seviye Seçiniz</option>
                            <option value="Lisans">Lisans</option>
                            <option value="Ön Lisans">Ön Lisans</option>
                            <option value="Yüksek Lisans">Yüksek Lisans</option>
                            <option value="Doktora">Doktora</option>
                        </select>
                    </div>
                    {/* Üniversite */}
                    <div className="col-12 col-md-6 mb-6">
                        <label className="form-label">Üniversite*</label>
                        <input name="University" className="form-control tobeto-input" type="text" placeholder="Kampüs 365" />
                    </div>
                    {/* Bölüm */}
                    <div className="col-12 col-md-6 mb-6">
                        <label className="form-label">Bölüm*</label>
                        <input name="Department" className="form-control tobeto-input" type="text" placeholder="Yazılım" />
                    </div>
                    {/* Başlangıç Yılı */}
                    <div className="col-12 col-md-6 mb-6">
                        <label className="form-label">Başlangıç Yılı*</label>
                        <input type="text" placeholder="Başlangıç Yılınızı Seçiniz" className="form-control tobeto-input" />
                    </div>
                    {/* Mezuniyet Yılı */}
                    <div className="col-12 col-md-6 mb-6">
                        <label className="form-label">Mezuniyet Yılı*</label>
                        <input type="text" placeholder="Mezuniyet Yılınızı Seçiniz"  className="form-control tobeto-input" />
                        <div className="form-check mt-3">
                            <input name="checkbox" className="form-check-input me-2" type="checkbox" />
                            <label className="form-check-label small">Devam Ediyorum</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary py-2 mb-3">Kaydet</button>
            </form>
        </div>
    )
}

export default EducationLife;
