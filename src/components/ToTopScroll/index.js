import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ToTopScroll() {
  const { pathname } = useLocation();
  useEffect(() => {
    // making the pages scroll  back when you click on the the nav items (X,Y)
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
