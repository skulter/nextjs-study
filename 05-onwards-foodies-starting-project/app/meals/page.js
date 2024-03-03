import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/share">share</Link>
      </p>
      <p>
        <Link href="/meals/post-1">post-1</Link>
      </p>
      <p>
        <Link href="/meals/post-2">post-2</Link>
      </p>
    </main>
  );
}
