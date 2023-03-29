import React from "react";

import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Toolbar,
  Filter,
  Page,
  ExcelExport,
  Selection,
  Edit,
  Inject,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";

import { Header } from "../components";

const Customers = () => {
  return (
    <div className="m-2 md:m p-2 md:p-10">
      <Header title="Customers" category="Page" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        width="auto"
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar, Selection, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
