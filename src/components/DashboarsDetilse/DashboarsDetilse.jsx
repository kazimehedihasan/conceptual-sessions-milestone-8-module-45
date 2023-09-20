import { Link, Outlet } from "react-router-dom";

const DashboarsDetilse = () => {
  return (
    <div className="flex pl-10">
      <div className="w-{30%} ">
        <ul>
          <li>
            <Link to="/profile">dashbord</Link>
          </li>
          <li>
            <Link to="/profile/editprofile">Edit Profile</Link>
          </li>
          <li>
            <Link to="/profile/usermanual">user manua</Link>
          </li>
        </ul>
      </div>
    <div className="w-{90%}">
    <Outlet></Outlet>
    </div>
    </div>
  );
};

export default DashboarsDetilse;
