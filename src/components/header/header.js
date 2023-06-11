import "./header.css";
import AddProfilePic from "../profile-pic/add-profile-pic";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled past a certain threshold (e.g., 100 pixels)
      const threshold = 400;
      const scrolled = window.scrollY > threshold;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isScrolled ? "scrolled" : ""}>
        <h3>Content Blogs.</h3>
        <div className="right-end">
          <div className="profile">
            <p style={{ fontWeight: "bold" }}>{userData.name.toUpperCase()}</p>
            <AddProfilePic />
          </div>
        </div>
      </nav>
    </>
  );
};
