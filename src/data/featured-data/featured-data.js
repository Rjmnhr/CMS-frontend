import { useEffect } from "react";
import { useApplicationContext } from "../../context/app-context";

export const FeaturedData = () => {
  const { setFeaturedData } = useApplicationContext();

  useEffect(() => {
    fetch("https://backendcms-renjithcmrenju.b4a.run/api/featured/content")
      .then(async (response) => {
        const data = await response.json();

        setFeaturedData(data);
      })
      .catch((err) => console.log(err));
  }, [setFeaturedData]);
};
