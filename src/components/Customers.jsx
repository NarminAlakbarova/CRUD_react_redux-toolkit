import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/getDataSlice";
import { addFavorites } from "../redux/slice/favoritesCustomerSlice";

const Customers = () => {
  const favCustomer = useSelector((state) => state.favCustomer.favorites);
  console.log(favCustomer);
  const customers = useSelector((state) => state.customers.data);
  console.log(customers);
  const dispatch = useDispatch();
  console.log(customers);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const handleAddToFav = (customer) => {
    const isAlreadyFav = favCustomer.find((fav) => fav.id === customer.id);

    if (!isAlreadyFav) {
      dispatch(addFavorites(customer));

    } else {
      window.alert("Bu müşteri zaten favorilerinizde!");
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
      render: (el) => `${el.phone}`,
    },
    {
      title: "Action",
      render: (obj) => (
        <div>
          <Button danger onClick={()=>handleAddToFav(obj)}>
            <AiOutlineHeart />
          </Button>
          <Button>
            <AiFillEdit />
          </Button>
        </div>
      ),
    },
  ];
  return <Table columns={columns} rowKey="id" dataSource={customers} />;
};

export default Customers;
