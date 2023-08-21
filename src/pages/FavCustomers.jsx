import { Button, Table } from "antd";
import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  removeAllFavorites,
  removeFavorites,
} from "../redux/slice/favoritesCustomerSlice";

const FavCustomers = () => {
  const favCustomer = useSelector((state) => state.favCustomer.favorites);
  const dispatch = useDispatch();

  const handleDeleteFavCustomer = (id) => {
    dispatch(removeFavorites(id));
  };
  const handleRemoveAllFavorites = () => {
    dispatch(removeAllFavorites());
  };

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
      render: (obj) => (
        <Button danger onClick={() => handleDeleteFavCustomer(obj.id)}>
          <BsFillTrashFill />
        </Button>
      ),
    },
  ];
  return (
    <>
      <Button onClick={handleRemoveAllFavorites}>Remove All</Button>{" "}
      <Table columns={columns} rowKey={"id"} dataSource={favCustomer} />;
    </>
  );
};

export default FavCustomers;
