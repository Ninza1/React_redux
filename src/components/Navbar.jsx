import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import { NavLink } from "react-router-dom";

const Header = {
  color: "white",
  gap: "30px",
  fontSize: "25px",
  textDecoration: "notInitialized",
 TextDecoder: "none"
}

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: "20px", ...Header }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      <NavLink to={"/products/men"}>Men</NavLink>
      <NavLink to={"/products/women"}>Women</NavLink>
      <NavLink to={"/products/kids"}>Kids</NavLink>
      <NavLink to={"/products/homedecor"}>Home Decor</NavLink>
    </nav>
  );
};