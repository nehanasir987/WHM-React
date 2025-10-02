const DashboardBox = ({ title, value, icon: Icon, color }) => {
  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${color[0]}, ${color[1]})`,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px",
        borderRadius: "12px",
        height: "150px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      {/* Left Side - Title & Value */}
      <div>
        <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "600" }}>
          {title}
        </h4>
        <span style={{ fontSize: "28px", fontWeight: "bold" }}>{value}</span>
      </div>

      {/* Right Side - Icon */}
      <div style={{ fontSize: "40px", opacity: 0.9 }}>
        <Icon />
      </div>
    </div>
  );
};

export default DashboardBox;
