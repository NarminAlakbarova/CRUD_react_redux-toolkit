import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/getDataSlice";
import { addFavorites } from "../redux/slice/favoritesCustomerSlice";
import { editCustomer } from "../redux/slice/editCustomerSlice";
import { Link } from "react-router-dom";

const Customers = () => {
  const favCustomer = useSelector((state) => state.favCustomer.favorites);
  const customers = useSelector((state) => state.customers.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleAddToFav = (customer) => {
    if (!favCustomer.find((item) => item.id === customer.id)) {
      dispatch(addFavorites(customer));
    } else {
      window.alert("Alredy added favorites!");
    }
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
      render: (el) => el?.phone,
    },

    {
      title: "Action",
      render: (obj) => (
        <div>
          <Button danger onClick={() => handleAddToFav(obj)}>
            <AiOutlineHeart />
          </Button>
          <Link
            to={`/form`}
            onClick={() => dispatch(editCustomer({ data: obj, id: obj.id }))}
          >
            <AiFillEdit />
          </Link>
        </div>
      ),
    },
  ];
  return <Table columns={columns} rowKey="id" dataSource={customers} />;
};

export default Customers;
