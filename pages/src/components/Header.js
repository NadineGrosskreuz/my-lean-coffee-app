import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">Home</Link>
      <br />
      <Link href="/cards">Cards</Link>
      <br />
      <Link href="/create">Create</Link>
    </header>
  );
}
