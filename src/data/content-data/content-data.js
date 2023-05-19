import { useEffect } from "react";
import { useApplicationContext } from "../../context/app-context";

const ContentData = () => {
  const { setContentData, isContentUpdated } = useApplicationContext();

  useEffect(() => {
    fetch("https://backendcms-renjithcmrenju.b4a.run/api/content/data").then(
      async (response) => {
        const data = await response.json();
        setContentData(data);
      }
    );
  }, [setContentData, isContentUpdated]);
};

export default ContentData;
