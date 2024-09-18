// src/components/CookieConsent.tsx
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    document.cookie = "cookie-consent=true; max-age=31536000; path=/";
  };

  useEffect(() => {
    const cookieConsent = Cookies.get("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  return isVisible ? (
    <div className="w-full fixed bottom-0 left-0 bg-gray-900 text-primary p-4 flex flex-col md:flex-row justify-center items-center gap-4 shadow-lg z-30 animate-[cookieConsent_2s_ease-in-out]">
      <p className="text-sm">
        We use cookies to improve your experience on our site. By using our
        site, you agree to our use of cookies.
        <Link to="/privacy-policy" className="underline ml-1">
          Learn more
        </Link>
      </p>
      <Button onClick={handleAccept} py={2} className="!text-sm !px-4 !bg-gray-800">
        Accept
      </Button>
    </div>
  ) : null;
};

export default CookieConsent;
