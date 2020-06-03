import React from 'react';
import Table from '../Table';

const tableData = JSON.parse('{"columns":[{"title":"ColumnA","align":"left"},{"title":"ColumnB","align":"center"},{"title":"ColumnC","align":"right"}],"rows":[{"columna":"1","columnb":"2","columnc":"3"},{"columna":"3","columnb":"4","columnc":"5"},{"columna":"6","columnb":"7","columnc":"8","state":"active"}]}');

export default (
  <Table data={tableData}></Table>
);
