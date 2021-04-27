import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Oppps ...</h1>
      <h2>That page doesn't exist </h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>{" "}
      </p>
    </div>
  );
}
