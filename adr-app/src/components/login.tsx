import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function Login() {
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
        <Button variant="contained">Start</Button>
      </div>
    </div>
  );
}
