import { Button, Col, Form, Row } from "react-bootstrap";
import AddRequestUserSocialMedia from "../../../models/requests/userSocialMedia/AddRequestUserSocialMedia";
import tokenDecode from "../../../hooks/tokenDecode";
import { FormEvent, useEffect, useState } from "react";
import userSocialMediaService from "../../../services/userSocialMediaService";
import { GetAllSocialMedia } from "../../../models/response/socialMedias/getAllSocialMedia";
import Paginate from "../../../models/paginate";
import socialMediaService from "../../../services/socialMediaService";
import GetAllUserSocialMedia from "../../../models/response/userSocialMedia/GetAllUserSocialMedia";

const SocialMedia = () => {
  const [socialMedia, setSocialMedia] = useState<Paginate<GetAllSocialMedia>>({ items: [] });
  const [responseData, setResponseData] = useState<Paginate<GetAllUserSocialMedia>>({ items: [] });
  const [formData, setFormData] = useState<AddRequestUserSocialMedia>(
    {
      UserId: Number(tokenDecode().ID),
      SocialMediaId: 0,
      Url: ""
    }
  );

  const fetchData = async () => {
    try {
      await userSocialMediaService.getByUserId(tokenDecode().ID).then(
        (res) => {
          if (res.status === 200) {
            setResponseData(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };



  const fetchSocialMedia = async () => {
    try {
      await socialMediaService.getAll(0,20).then(
        (res) => {
          if (res.status === 200) {
            setSocialMedia(res.data)
          }
        }
      );

    } catch (error) {
      console.error("Veri çekme sırasında bir hata oluştu:", error);
    }
  };


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userSocialMediaService
      .add(formData)
      .then(() => { fetchData(); })
      .catch(error => console.log(error))
  };

  const deleteData = async (id: number) => {
    userSocialMediaService.delete(id)
      .then(() => { fetchData(); })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchSocialMedia();
    fetchData();
  }, []);


  return (
    <Col className="col-12 col-lg-9" style={{ minHeight: "90vh" }}>
      <Col className="col-12 my-2">
        <Form data-hs-cf-bound="true" onSubmit={handleSubmit}>
          <Row className="row mb-2 mt-4">
            <Col className="col-md-4 col-12">
              <Form.Select
                name="socialMedia"
                className="form-select"
                aria-label=""
                onChange={e => setFormData({ ...formData, SocialMediaId: Number(e.target.options[e.target.selectedIndex].id) })}
              >
                <option value="">Seçiniz*</option>
                {socialMedia.items.map((socailMedias: any) => (
                  <option key={socailMedias.id} id={socailMedias.id} >{socailMedias.name}</option>
                ))}
              </Form.Select>
            </Col>
            <Col className="col-md-8 col-12">
              <Form.Control
                name="socialMediaUrl"
                type="text"
                placeholder="https://"
                className="form-control"
                aria-label="Text input with dropdown button"
                onChange={e => setFormData({ ...formData, Url: e.target.value })}
              />
            </Col>
          </Row>
          <Button type="submit" className="btn btn-primary py-2 mt-1 d-inline-block mobil-btn">
            Kaydet
          </Button>
        </Form>
      </Col>
      <Col>
        {
          responseData.items.map((data: any) => (
            <div key={data.id} className="col-12 my-2 mt-5">
              <Form.Label className="input-label-text">{data.socialMediaName}</Form.Label>
              <div className="section-header tobeto-input">
                <Form.Control
                  disabled
                  className={"input-" + String(data.socialMediaName).toLocaleLowerCase('tr-TR')}
                  type="text"
                  defaultValue={data.url}
                />
                <Button className="btn social-delete" onClick={() => deleteData(data.id)} />
              </div>
            </div>
          ))
        }

      </Col>
    </Col>
  );
};

export default SocialMedia;
