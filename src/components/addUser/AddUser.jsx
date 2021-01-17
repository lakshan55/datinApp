import React from "react";
import { forwardRef } from "react";

import {
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";

import DevicesOtherOutlined from "@material-ui/icons/DevicesOtherOutlined";
import MaterialTable from "material-table";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import Refresh from "@material-ui/icons/RefreshOutlined";

// import Snackbar from "../Snackbar";
// import AddCardData from "./CreateScheme/AddCardData";
// import EditSchemeWizaed from "./EditScheme/EditSchemeWizaed";
// import DeleteCardSchem from "./DeleteCardSchem";

import DialogAddUser from "./DialogAddUser";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Refresh: forwardRef((props, ref) => <Refresh {...props} ref={ref} />),
};

function AddUser(props) {
  const { classes } = props;
  // table ref(for refresh table)
  let tableRef = React.createRef();

  // table view massage
  const [message, setMessage] = React.useState("Loading");

  // get edit details
  const [editDetails, setEditDetails] = React.useState("");

  //Add Scheme Dialog open and close state
  const [dialogOpenState, setDialogOpenState] = React.useState(false);

  // Add Scheme Dialog close
  const handleDialogClose = () => {
    setDialogOpenState(false);
  };

  //Edit Scheme Dialog open and close state
  const [editDialogOpenState, setEditDialogOpenState] = React.useState(false);

  // Edit Scheme Dialog close
  const editDialogClose = () => {
    setEditDialogOpenState(false);
  };

  //Delete Scheme Dialog open and close state
  const [deleteSchemeDailogSatae, setDeleteSchemeDailogSatae] = React.useState(
    false
  );

  // Delete Scheme Dialog close
  const deleteSchemeClose = () => {
    setDeleteSchemeDailogSatae(false);
  };

  // get scheme id(for delete scheme)
  const [deleteSchemeId, setDeleteSchemeId] = React.useState(null);

  // table refresh
  const refreshTable = () => {
    tableRef.current && tableRef.current.onQueryChange();
  };

  // check scheme already created or not
  const [schemeName, setSchemeName] = React.useState("");

  let state = {
    columns: [
      {
        title: "Name",
        field: "name",
        editable: "never",
      },

      {
        title: "IP Address",
        field: "ip",
        editable: "never",
      },

      {
        title: "Port",
        field: "port",
        editable: "never",
      },
      {
        title: "NII",
        field: "nii",
        editable: "never",
      },
      {
        title: "TPDU",
        field: "tpdu",
        editable: "never",
      },
    ],
  };
  const getToken = localStorage.getItem("session2");
  const packet = {
    method: "GET",
    headers: {
      //   Accept: "application/json, text/plain, *!/!*",
      "Content-Type": "application/json",
      "auth-token": getToken,
    },
  };

  return (
    <Grid>
      <div>
        <DialogAddUser
          classes={classes}
          dialogOpenState={dialogOpenState}
          handleDialogClose={handleDialogClose}
          refreshTable={refreshTable}
        />

        <MaterialTable
          style={{ opacity: "0.8", borderRadius: " 20px 20px 20px 20px" }}
          tableRef={tableRef}
          title={
            <ListItem disableGutters={true}>
              <ListItemIcon style={{ margin: "30px 10px 30px 10px" }}>
                <DevicesOtherOutlined
                  style={{
                    color: "#383E47",
                    width: "35px",
                    height: "35px",
                  }}
                />
              </ListItemIcon>
              <ListItemText>
                <Typography variant="h6">Add Fake Users</Typography>
              </ListItemText>
            </ListItem>
          }
          columns={[
            { title: "firstName", field: "firstName" },
            { title: "lastName", field: "lastName" },
            { title: "country", field: "country" },
            {
              title: "city",
              field: "city",
            },
          ]}
          // data={[
          //   {
          //     firstName: "Lakshan",
          //     lastName: "Sampath",
          //     country: "Sri Lanka",
          //     city: "Kekirawa",
          //   },
          //   {
          //     firstName: "Mehmet",
          //     lastName: "Baran",
          //     country: "Sri Lanka",
          //     city: "Kekirawa",
          //   },
          // ]}
          //   columns={state.columns}
          data={(query) =>
            new Promise((resolve, reject) => {
              // let url = "https://wataniface.herokuapp.com/admin/getAllFakeUsers?limit=10&skip=0"
              console.log("query");
              console.log(query);
              let url =
                "https://wataniface.herokuapp.com/admin/getAllFakeUsers?";
              url += "limit=" + query.pageSize;
              url += "&skip=" + 2;
              fetch(url, packet)
                .then((response) => response.json())
                .then(async (result) => {
                  console.log(result);
                  setSchemeName(result);
                  if (result.data) {
                    if (result.data.length === 0)
                      await setMessage("No Devices");
                    resolve({
                      data: result.data,
                      page: result.page,
                      totalCount: result.total + 1,
                    });
                  } else if (result.error === "invalid_token") {
                    console.log("here is go to login page");
                  } else {
                    // await setSnackVariant("error");
                    // await setSnackText(
                    //   "Device module is not working properly."
                    // );
                    await setMessage("Could not reach the server");
                    resolve({
                      data: [],
                      page: 0,
                      totalCount: 1,
                    });
                  }
                })
                .catch((err) => reject(err));
            }).catch((err) => console.log(err))
          }
          icons={tableIcons}
          actions={[
            {
              icon: tableIcons.Refresh,
              tooltip: "Refresh Data",
              isFreeAction: true,
              onClick: () =>
                tableRef.current && tableRef.current.onQueryChange(),
            },
            {
              icon: tableIcons.Add,
              tooltip: "Add Schemes",
              isFreeAction: true,
              onClick: () => setDialogOpenState(true),
            },
            {
              icon: tableIcons.Edit,
              tooltip: "Edit Scheme",
              onClick: (event, rowData) => {
                setEditDetails(rowData);
                setEditDialogOpenState(true);
              },
            },
            // {
            //   icon: tableIcons.Delete,
            //   tooltip: "Delete Scheme",
            //   onClick: (event, rowData) => {
            //     console.log(rowData);
            //     setDeleteSchemeId(rowData.id);
            //     setDeleteSchemeDailogSatae(true);
            //   },
            // },
          ]}
          options={{
            pageSize: 50,
            actionsColumnIndex: -1,
            headerStyle: {
              fontSize: "1rem",
              backgroundColor: "#595E65",
              opacity: "80%",
              color: "#FFFFFF",
            },
            sorting: true,
            rowStyle: {
              padding: "5rem",
              height: "4rem",
            },
            columnsButton: true,
            exportButton: true,
            exportAllData: true,
            loadingType: "overlay",
            paginationType: "stepped",
            search: false,
            pageSizeOptions: [50, 150, 200],
          }}
          localization={{
            body: {
              editRow: {
                deleteText: "Are you sure delete this Scheme?",
              },
              emptyDataSourceMessage: message,
            },
          }}
        />
      </div>
    </Grid>
  );
}

export default AddUser;
