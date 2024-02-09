import { useState } from "react";
import Form from "react-bootstrap/Form";

const CatalogFilter = () => {
  // todo
  const [searchQuery, setSearchQuery] = useState("");
  const [radioData, setRadioData] = useState([
    {
      text: "Tüm Eğitimler",
      id: "Tüm Eğitimler",
      value: true,
    },
    {
      text: "Ücretli Eğitimler",
      id: "Ücretli Eğitimler",
      value: false,
    },
    {
      text: "Ücretsiz Eğitimler",
      id: "Ücretsiz Eğitimler",
      value: false,
    },
  ]);

  interface IRadioData {
    text: string;
    id: string;
    value: boolean;
  }

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const toggleValue = (id: string, data: IRadioData[]) => {
    return data?.map((item) => ({
      ...item,
      value: item.id === id,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clickedRadioButtonID = event.target.id;
    const updatedRadioData = toggleValue(clickedRadioButtonID, radioData);
    setRadioData(updatedRadioData);
  };

  const filterResults = (query: string, data: IRadioData[]) => {
    if (!query.trim()) return data;

    return data.filter((item) =>
      item.text.toLowerCase().includes(query.toLowerCase())
    );
  };

  const filteredResults = filterResults(searchQuery, radioData);

  return (
    <>
      <Form.Control
        type="text"
        id="filterSearch"
        value={searchQuery}
        onChange={handleSearchQuery}
        placeholder="Arama"
        className="mb-5"
      />
      <Form style={{ marginLeft: "8px" }}>
        {filteredResults.map(({ text, value, id }) => (
          <div key={id} className="mb-3">
            <Form.Check
              checked={value}
              type="radio"
              id={id}
              label={text}
              onChange={handleChange}
              name="radioButtons"
            />
          </div>
        ))}
      </Form>
    </>
  );
};

export default CatalogFilter;
