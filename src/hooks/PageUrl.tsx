import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function PageUrl() {
    const location:any = useLocation(); 
    const [url, setUrl] = useState(null);
    useEffect(() => {
      setUrl(location.pathname);
    }, [location]);

  return url;
}

export default PageUrl;
