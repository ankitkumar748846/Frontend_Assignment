import "./UserProfile.css";
const UserProfile = ({ intials, available, bgColor }) => {
  return (
    // Implement the UserProfile component
    <div className="user">
      <div className="icon" style={{ backgroundColor: bgColor }}>
        {intials}
      </div>
      <div className="dot" style={available ? { color: "#50B053" } : {}}></div>
    </div>
  );
};
export default UserProfile;
