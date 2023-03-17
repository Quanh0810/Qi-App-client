import { Table } from "antd";
import React from "react";
import PageTitle from "../../../components/PageTitle";

function Chart() {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Score",
      dataIndex: "score",
      sorter: {
        compare: (a, b) => a.score - b.score,
        multiple: 2,
      },
    },
    {
      title: "Time",
      dataIndex: "time",
      sorter: {
        compare: (a, b) => a.time - b.time,
        multiple: 1,
      },
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      score: 98,
      time: 60,
    },
    {
      key: "2",
      name: "Jim Green",
      score: 98,
      time: 66,
    },
    {
      key: "3",
      name: "Joe Black",
      score: 98,
      time: 90,
    },
    {
      key: "4",
      name: "Jim Red",
      score: 88,
      time: 99,
    },
  ];

  //   const onChange = (pagination, filters, sorter, extra) => {
  //     console.log('params', pagination, filters, sorter, extra);
  return (
    <div>
      <PageTitle title="Chart"></PageTitle>
      <div className="divider"></div>

      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default Chart;
