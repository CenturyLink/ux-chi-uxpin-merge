import PropTypes from "prop-types";
import React from "react";

const loremIpsum = [
  "Lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
  "Ut",
  "enim",
  "ad",
  "minim",
  "veniam",
  "quis",
  "nostrud",
  "exercitation",
  "ullamco",
  "laboris",
  "nisi",
  "ut",
  "aliquip",
  "ex",
  "ea",
  "commodo",
  "consequat",
  "Duis",
  "aute",
  "irure",
  "dolor",
  "in",
  "reprehenderit",
  "in",
  "voluptate",
  "velit",
  "esse",
  "cillum",
  "dolore",
  "eu",
  "fugiat",
  "nulla",
  "pariatur",
  "Excepteur",
  "sint",
  "occaecat",
  "cupidatat",
  "non",
  "proident",
  "sunt",
  "in",
  "culpa",
  "qui",
  "officia",
  "deserunt",
  "mollit",
  "anim",
  "id",
  "est",
  "laborum",
];

export default class Table extends React.Component {
  randomNumber() {
    return Math.floor(Math.random() * 100000000) + 1;
  }
  
  render() {
    let columns = [];
    let rows = [];

    if (this.props.data) {
      columns = JSON.parse(this.props.data).columns.map((column) => {
        return <th
          className = {`
            ${column.align ? `-text--${column.align}` : ``}
          `}
          key={this.randomNumber()}
          >{column.title}</th>;
      });
      rows = JSON.parse(this.props.data).rows.map((row) => {
        return (
          <tr
            className={`
          ${row.state ? row.state === 'active' ? `-active` : `-row--${row.state}` : ``}
          `}
          key={this.randomNumber()}
          >
            {JSON.parse(this.props.data).columns.map((column) => {
              return <td
                className = {`
                  ${column.align ? `-text--${column.align}` : ``}
                `}
                key={this.randomNumber()}>{row[column.title.toLowerCase()]}</td>;
            })}
          </tr>
        );
      });
    } else {
        let columnNumber;
        let rowNumber;

        if (this.props.randomGrid) {
            columnNumber = parseInt(this.props.randomGrid.split("x")[0]);
            rowNumber = parseInt(this.props.randomGrid.split("x")[1]);
        } else {
            columnNumber = 5;
            rowNumber = 5;
        }

      const populateRow = (type) => {
        const row = [ ...Array(columnNumber).keys() ].map(() => {
            if (type === "td") {
                return <td key={this.randomNumber()}>
                    {loremIpsum[Math.floor(Math.random() * loremIpsum.length)]}
                </td>
              } else {
                return <th key={this.randomNumber()}>
                    {loremIpsum[Math.floor(Math.random() * loremIpsum.length)]}
                </th>
              }
        });

        return row;
      };

      columns.push(populateRow("th"));

      for (let i = 0; i < rowNumber; i++) {
        rows.push(<tr key={this.randomNumber()}>{populateRow("td")}</tr>);
      }
    }

    return (
      <table
        className={`
        chi-table
        ${this.props.striped ? "-striped" : ""}
        ${this.props.hover ? "-hover" : ""}
        ${this.props.portal ? "-portal" : ""}
    `}
      >
        <thead>
          <tr>{columns}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

/* eslint-disable sort-keys */
Table.propTypes = {
  data: PropTypes.string,
  randomGrid: PropTypes.string,
  striped: PropTypes.bool,
  hover: PropTypes.bool,
  portal: PropTypes.bool,
};
/* eslint-enable sort-keys */

Table.defaultProps = {};
