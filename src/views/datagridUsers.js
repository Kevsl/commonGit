import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { useState, useEffect } from 'react';
import { getUsers } from "../services/usersService";

const DatagridUsers = () => {
    const [rows, setRows] = useState([]);

    const [load, setLoad] = useState(1);

    useEffect(() => {
        getUsers().then((res) => {
            setRows(res);
        });
    }, [load]);

    const columns = [
        {
          field: "id",
          headerName: "ID",
          flex: 1,
          editable: true,
        },
        {
          field: "name",
          headerName: "name",
          flex: 0.5,
          editable: true,
        },
        {
          field: "username",
          headerName: "username",
          type: "number",
          flex: 1,
          editable: true,
        },
        {
          field: "phone",
          headerName: "phone",
          type: "number",
          flex: 1,
          editable: true,
        },
        {
          field: "email",
          headerName: "username",
          type: "number",
          flex: 1,
          editable: true,
        },
      ];

      return (
        <Box sx={{ height: 600, width: "90%, margin: 0 5%"}}>
            <DataGrid 
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
            />
        </Box>
      );
};

export default DatagridUsers;