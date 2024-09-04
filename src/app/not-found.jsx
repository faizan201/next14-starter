import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1> Not Found Page </h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link href="/">Return to home page</Link>
    </div>
  );
};

export default NotFound;
