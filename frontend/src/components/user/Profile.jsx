import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MetaData } from "../../components";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);

  return <div>Profile</div>;
};

export default Profile;
