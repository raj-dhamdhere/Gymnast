import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as Reactbootstrap from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import cellEditFactory from "react-bootstrap-table2-editor";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
  CSVExport,
  Search,
} from "react-bootstrap-table2-toolkit";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import axios from "axios";
const API_URL = "http://localhost:3001";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Summary() {

  const classes = useStyles();
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPlayerData = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3001/api/Summary"
      );
      console.log(data.data.data)
      setPlayers(data.data.data)
      setLoading(true)

    } catch (e) {
      console.log(e);
    }
  };

  const { SearchBar } = Search;
  const { ExportCSVButton } = CSVExport;

  const pending = [
    { dataField: "name", text: "Name", sort: true, filter: textFilter(), footer: "" ,editable: false},
    { dataField: "dob", text: "Date Of Birth", sort: true, filter: textFilter(), footer: "",editable: false },
    { dataField: "AgeGroup", text: "Under AgeGroup", sort: true, filter: textFilter(), footer: "", editable: false},
    { dataField: "Sex", text: "Sex", sort: true, filter: textFilter(), footer: "",editable: false },
    { dataField: "District", text: "District", sort: true, filter: textFilter(), footer: "", editable: false},
    { dataField: "Discipline", text: "Discipline", sort: true, filter: textFilter(), footer: "", editable: false},
    { dataField: "AddList", text: "AddList", sort: true, filter: textFilter(), footer: "", },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  useEffect(() => {
    getPlayerData();
  }, []);


  return (
    <React.Fragment>
      
              <h2>Summary</h2>
                <div >
                  {loading ? (
                    <>
                      <ToolkitProvider
                        bootstrap4
                        keyField="id"
                        data={players}
                        columns={pending}
                        defaultSorted={defaultSorted}
                        exportCSV={{
                          onlyExportFiltered: true,
                          exportAll: false,
                        }}
                        search
                      >
                        {(props) => (
                          <div>
                            <Row>
                              <Col md={2}>
                                <h6>Search Here- </h6>
                                <SearchBar {...props.searchProps} />
                              </Col>
                              <Col md={2}>
                                <h6>Export- </h6>
                                <ExportCSVButton
                                  style={{
                                    backgroundColor:
                                      "AntiqueWhite",
                                    border: "1px solid",
                                  }}
                                  {...props.csvProps}
                                >
                                  Export Excel
											</ExportCSVButton>
                              </Col>
                            </Row>
                            <BootstrapTable
                              {...props.baseProps}
                              pagination={paginationFactory()}
                              filter={filterFactory()}
                              cellEdit={cellEditFactory({
                                mode: "click",
                                blurToSave: true,
                                onStartEdit: (
                                  row,
                                  column,
                                  rowIndex,
                                  columnIndex
                                ) => {
                                  console.log(
                                    "row",
                                    row
                                  );
                                  console.log(
                                    "column",
                                    column
                                  );
                                  console.log(
                                    "rowIndex",
                                    rowIndex
                                  );
                                  console.log(
                                    "columnIndex",
                                    columnIndex
                                  );
                                },
                                afterSaveCell: (
                                  oldValue,
                                  newValue,
                                  row,
                                  column
                                ) => {
                                  console.log(
                                    "After Saving Cell!!",
                                    row
                                  );
                                },
                              })}
                            />
                          </div>
                        )}
                      </ToolkitProvider>
                    </>
                  ) : (
                    <Reactbootstrap.Spinner animation="border"></Reactbootstrap.Spinner>
                  )}

                </div>
              
           
          
        
      




    </React.Fragment>
  );
}