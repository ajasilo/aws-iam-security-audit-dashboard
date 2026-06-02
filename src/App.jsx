function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef3fb",
        display: "flex",
        justifyContent: "center",
        padding: "30px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          width: "1200px",
          display: "grid",
          gridTemplateColumns: "240px 1fr",
          gap: "20px",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            background: "linear-gradient(180deg,#1e3a8a,#172554)",
            color: "white",
            borderRadius: "20px",
            padding: "25px",
          }}
        >
          <h2>☁️ Cloud Security Team</h2>

          {[
            "Dashboard",
            "IAM",
            "WAF Events",
            "CloudTrail",
            "Compliance",
          ].map((item) => (
            <div
              key={item}
              style={{
                marginTop: "15px",
                background: "rgba(255,255,255,0.15)",
                padding: "15px",
                borderRadius: "12px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div>
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            }}
          >
            <h1
              style={{
                textAlign: "center",
                marginBottom: "10px",
              }}
            >
              Cloud Security Team Dashboard
            </h1>

            <p
              style={{
                textAlign: "center",
                color: "#555",
              }}
            >
              AWS Security Visibility • Threat Monitoring • Compliance
            </p>

            {/* Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: "15px",
                marginTop: "25px",
              }}
            >
              {[
                ["IAM Users", "124"],
                ["WAF Events", "45"],
                ["CloudTrail", "1,284"],
                ["Alerts", "12"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  style={{
                    background: "#f8fafc",
                    borderRadius: "15px",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <h3>{title}</h3>
                  <h1 style={{ color: "#2563eb" }}>{value}</h1>
                </div>
              ))}
            </div>

            {/* Events */}
            <div
              style={{
                marginTop: "25px",
                background: "#f8fafc",
                borderRadius: "15px",
                padding: "20px",
              }}
            >
              <h2>Recent Security Events</h2>

              <table
                style={{
                  width: "100%",
                  marginTop: "15px",
                }}
              >
                <thead>
                  <tr>
                    <th>Severity</th>
                    <th>Event</th>
                    <th>Source</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td style={{ color: "red" }}>High</td>
                    <td>XSS Attack</td>
                    <td>Radware WAF</td>
                    <td>Blocked</td>
                  </tr>

                  <tr>
                    <td style={{ color: "orange" }}>Medium</td>
                    <td>Failed AWS Login</td>
                    <td>AWS IAM</td>
                    <td>Investigating</td>
                  </tr>

                  <tr>
                    <td style={{ color: "green" }}>Low</td>
                    <td>CloudTrail Update</td>
                    <td>CloudTrail</td>
                    <td>Completed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Security Score */}
            <div
              style={{
                marginTop: "25px",
                background: "#2563eb",
                color: "white",
                borderRadius: "20px",
                padding: "25px",
                textAlign: "center",
              }}
            >
              <h2>Security Posture Score</h2>
              <h1 style={{ fontSize: "60px" }}>92%</h1>
              <p>Excellent Security Posture</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
