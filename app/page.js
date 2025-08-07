import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Technical Addu</h1>
      <nav style={{ display: "flex", gap: "10px" }}>
        <Link href="/about">About</Link>
        <Link href="/service">Service</Link>
      </nav>
    </main>
  );
}
