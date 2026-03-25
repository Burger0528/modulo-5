import React from "react";
import { User } from "../interfaces";

export interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-avatar">{user.fullName.charAt(0)}</div>
      <div className="user-info">
        <h4 className="user-name">{user.fullName}</h4>
        <p className="user-email">{user.email}</p>
        <div className="user-meta">
          <span className={`user-role role-${user.role}`}>{user.role}</span>
          <span className={`user-status ${user.isActive ? "active" : "inactive"}`}>
            {user.isActive ? "Activo" : "Inactivo"}
          </span>
        </div>
        <p className="user-address">
          {user.address.city}, {user.address.country}
        </p>
        {user.description && <p className="user-description">{user.description}</p>}
      </div>
    </div>
  );
};

export default UserCard;
