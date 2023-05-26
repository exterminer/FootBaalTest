import { StyledNav,StyledButton } from "./styledDash";
import { useNavigate } from "react-router-dom";
import {MdLogout} from "react-icons/md"

export function DashBoard() {
  const navigate = useNavigate();
  function handlelogOut() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <StyledNav>
      <h2>Clube da </h2>
      <StyledButton>
      <button onClick={handlelogOut}>Sair <MdLogout/></button>
      </StyledButton>
    </StyledNav>
  );
}
