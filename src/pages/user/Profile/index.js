import { Button, Col, Form, message, Row } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUserInfo } from "../../../apicalls/users";
import PageTitle from "../../../components/PageTitle";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";

function Profile() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profiles, setProfiles] = React.useState([]);
  const params = useParams();

  const getProfile = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getUserInfo({});
      dispatch(HideLoading());
      if (response.success) {
        setProfiles(response.data);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => {
        return Object.keys(record.name).map((key) => {
          return (
            <div>
              {key} : {record.name[key]}
            </div>
          );
        });
      },
    },
    {
      title: "Email Address",
      dataIndex: "email",
      render: (text, record) => {
        return Object.keys(record.email).map((key) => {
          return (
            <div>
              {key} : {record.email[key]}
            </div>
          );
        });
      },
    },
    {
      title: "Password",
      dataIndex: "password",
    },
    {
      title: "Confirm Password",
      dataIndex: "confirm",
    },
  ];

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <PageTitle title="Profile"></PageTitle>
      <div className="divider"></div>
      
      <Col columns={columns} dataSource={profiles}></Col>
    </div>
  );
}

export default Profile;
