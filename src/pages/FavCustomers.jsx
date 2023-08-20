import {Button, Table } from "antd";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const FavCustomers = () => {
  const favCustomer = useSelector((state) => state.favorites.favosites);
  const dispatch = useDispatch();




  let columns = [
    {
      title: "ID",
      dataIndex: "id",
    },

    {
      title: "Company Name",
      dataIndex: "companyName",
    },
    {
      title: "Contact Name",
      dataIndex: "contactName",
    },
    {
      title: "Phone",
      dataIndex: "address",
      render: (el) => `${el.phone}`,
    },
    {
      title: "Action",
      render: () => (
        <Button danger>
          <BsFillTrashFill />
        </Button>
      ),
    },
  ];
  return <Table columns={columns} rowKey={"id"} dataSource={favCustomer} />;
};

export default FavCustomers;
