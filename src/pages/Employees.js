import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Page,
  Search,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { employeesData, employeesGrid } from "../data/dummy";

import { Header } from "../components";

import React from "react";

const Employees = () => {
  return (
    <div className="m-2 md:m p-2 md:p-10">
      <Header title="Employees" category="Page" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
