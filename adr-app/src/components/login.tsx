import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  function printSomething() {
    navigate("/devices");
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <h1>Enter Name</h1>
        <TextField id="outlined-basic" variant="outlined" />
        <Button
          onClick={() => {
            printSomething();
          }}
          variant="contained"
        >
          Start
        </Button>
      </div>
    </div>
  );
}
