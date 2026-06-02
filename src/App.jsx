function App() {
  const users = [
    ["john.admin", "Enabled", "2026-06-01", "15 Days", "Yes", "Low"],
    ["legacy.user", "Disabled", "2026-03-15", "92 Days", "Yes", "High"],
    ["finance.admin", "Disabled", "2026-04-01", "76 Days", "Yes", "High"],
    ["dev.engineer", "Enabled", "2026-05-30", "22 Days", "Yes", "Low"],
    ["service.account", "N/A", "Never", "N/A", "No", "Medium"],
  ];

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <header style={styles.header}>
          <div>
            <p style={styles.kicker}>CLOUD SECURITY TEAM • IAM GOVERNANCE</p>
            <h1 style={styles.title}>AWS IAM Security Audit Dashboard</h1>
            <p style={styles.subtitle}>
              MFA compliance, inactive user review, password age monitoring, and IAM risk scoring.
            </p>
          </div>

          <div style={styles.badge}>
            <strong>Audit Score</strong>
            <span>91%</span>
          </div>
        </header>

        <section style={styles.kpis}>
          <Card label="Total Users" value="124" />
          <Card label="MFA Enabled" value="97" green />
          <Card label="Inactive Users" value="12" red />
          <Card label="Privileged Users" value="8" orange />
        </section>

        <section style={styles.grid}>
          <div style={styles.panel}>
            <h2>Executive Summary</h2>
            <ul style={styles.list}>
              <li>12 inactive IAM users detected.</li>
              <li>27 users are missing MFA protection.</li>
              <li>3 high-risk users require immediate review.</li>
              <li>91% IAM security audit score achieved.</li>
            </ul>
          </div>

          <div style={styles.panel}>
            <h2>MFA Compliance</h2>
            <div style={styles.percent}>78%</div>
            <div style={styles.progressBg}>
              <div style={styles.progressFill}></div>
            </div>
            <p style={styles.note}>97 of 124 users are protected with MFA.</p>
          </div>
        </section>

        <section style={styles.grid}>
          <div style={styles.panel}>
            <h2>Risk Summary</h2>
            <div style={styles.riskGrid}>
              <Risk label="High Risk" value="3" color="#dc2626" />
              <Risk label="Medium Risk" value="7" color="#f59e0b" />
              <Risk label="Low Risk" value="114" color="#16a34a" />
            </div>
          </div>

          <div style={styles.panel}>
            <h2>Inactive Users &gt; 45 Days</h2>
            <div style={styles.inactive}>legacy.user</div>
            <div style={styles.inactive}>finance.admin</div>
            <div style={styles.inactive}>old.contractor</div>
          </div>
        </section>

        <section style={styles.tablePanel}>
          <div style={styles.tableHeader}>
            <h2>AWS IAM Users</h2>
            <button style={styles.button}>Export CSV</button>
          </div>

          <table style={styles.table}>
            <thead>
              <tr>
                <th>Username</th>
                <th>MFA</th>
                <th>Last Login</th>
                <th>Password Age</th>
                <th>Console Access</th>
                <th>Risk Score</th>
              </tr>
            </thead>

            <tbody>
              {users.map(([name, mfa, login, age, consoleAccess, risk]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{mfa}</td>
                  <td>{login}</td>
                  <td>{age}</td>
                  <td>{consoleAccess}</td>
                  <td>
                    <span style={{ ...styles.riskBadge, background: riskColor(risk) }}>
                      {risk}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <footer style={styles.footer}>
          AWS IAM Security Audit • Cloud Security Team • DevSecOps Governance
        </footer>
      </div>
    </div>
  );
}

function Card({ label, value, green, red, orange }) {
  return (
    <div style={styles.card}>
      <p>{label}</p>
      <h1 style={{ color: green ? "#16a34a" : red ? "#dc2626" : orange ? "#f59e0b" : "#2563eb" }}>
        {value}
      </h1>
    </div>
  );
}

function Risk({ label, value, color }) {
  return (
    <div style={styles.riskBox}>
      <p>{label}</p>
      <h1 style={{ color }}>{value}</h1>
    </div>
  );
}

function riskColor(risk) {
  if (risk === "High") return "#ef4444";
  if (risk === "Medium") return "#f59e0b";
  return "#10b981";
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#eef4ff",
    fontFamily: "Segoe UI, Arial, sans-serif",
    padding: "28px",
    color: "#0f172a",
  },
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
  },
  header: {
    background: "white",
    borderRadius: "22px",
    padding: "26px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 10px 30px rgba(15,23,42,0.08)",
    marginBottom: "18px",
  },
  kicker: {
    margin: 0,
    color: "#2563eb",
    fontWeight: "900",
    letterSpacing: "1px",
    fontSize: "13px",
  },
  title: {
    margin: "8px 0",
    fontSize: "32px",
    lineHeight: "1.15",
  },
  subtitle: {
    margin: 0,
    color: "#64748b",
  },
  badge: {
    background: "#dbeafe",
    color: "#1d4ed8",
    padding: "16px 26px",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "6px",
    fontWeight: "900",
    minWidth: "140px",
  },
  kpis: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    marginBottom: "18px",
  },
  card: {
    background: "white",
    borderRadius: "18px",
    padding: "22px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(15,23,42,0.07)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "18px",
    marginBottom: "18px",
  },
  panel: {
    background: "white",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(15,23,42,0.07)",
  },
  list: {
    lineHeight: "2",
    color: "#334155",
    fontWeight: "600",
  },
  percent: {
    fontSize: "44px",
    color: "#2563eb",
    fontWeight: "900",
    textAlign: "center",
  },
  progressBg: {
    background: "#e2e8f0",
    height: "12px",
    borderRadius: "999px",
    overflow: "hidden",
    margin: "14px 0",
  },
  progressFill: {
    width: "78%",
    height: "100%",
    background: "linear-gradient(90deg,#2563eb,#38bdf8)",
  },
  note: {
    color: "#64748b",
    textAlign: "center",
  },
  riskGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
  },
  riskBox: {
    border: "1px solid #dbeafe",
    borderRadius: "14px",
    textAlign: "center",
    padding: "18px",
    background: "#f8fafc",
  },
  inactive: {
    background: "#fee2e2",
    color: "#dc2626",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "10px",
    fontWeight: "900",
    textAlign: "center",
  },
  tablePanel: {
    background: "white",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 10px 25px rgba(15,23,42,0.07)",
  },
  tableHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "10px",
    padding: "11px 16px",
    fontWeight: "900",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    lineHeight: "2.8",
  },
  riskBadge: {
    color: "white",
    padding: "7px 13px",
    borderRadius: "999px",
    fontWeight: "900",
  },
  footer: {
    textAlign: "center",
    color: "#64748b",
    marginTop: "18px",
    fontWeight: "800",
  },
};

export default App;
