import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  ContextMenu,
  Resize,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Sort,
} from "@syncfusion/ej2-react-grids";
import { ContextMenuItem, ordersData, ordersGrid } from "../data/dummy";

import { Header } from "../components";

import React from "react";

const Orders = () => {
  return (
    <div className="m-2 md:m p-2 md:p-10">
      <Header title="Orders" category="Page" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            ContextMenu,
            Resize,
            Filter,
            Page,
            ExcelExport,
            PdfExport,
            Edit,
            Sort,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
