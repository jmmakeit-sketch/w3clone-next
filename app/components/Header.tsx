export default function Header() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      borderBottom: "1px solid #ddd",
      background: "#fff"
    }}>
      <div style={{ fontWeight: "bold" }}>W3Schools</div>
      <nav style={{ display: "flex", gap: "15px" }}>
        <span>Tutorials</span>
        <span>References</span>
        <span>Exercises</span>
      </nav>
    </header>
  );
}
