import { Button } from "@mui/material";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

export default function Devices() {
  function printSomething() {}
  const columns: GridColDef[] = [
    { field: "deviceName", headerName: "Device Name", width: 130 },
  ];

  const rows = [
    { id: 1, deviceName: "Device1" },
    { id: 2, deviceName: "Device2" },
    { id: 3, deviceName: "Device3" },
  ];

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
        <h1>Select Device</h1>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{ border: 0 }}
          hideFooter={true}
          onRowSelectionModelChange={}
        />
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
