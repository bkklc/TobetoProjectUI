import {  useEffect, useState } from 'react';



function ResponseData(service :any) {
    const [responseData, setResponseData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await service;
        setResponseData(response.data);
      } catch (error) {
        console.error("Veri çekme sırasında bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  return responseData;
}

export default ResponseData;


