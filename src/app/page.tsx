import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Home</h1>
      <div className="mt-4">
        We are trying to reproduce issues with dynamic routes, parallel routes and catch all routes, it does not seem to be possible to have a catch-all route, next to a dynamic parallel route.
        Try deleting the catch-all route, rebuild the app and see if it works. In this state building is not possible and the regular dev server (not turbo) will give errors.
      </div>
      <div>
        <Link
          href="/blog/1"
        >
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Lets visit a blog post that contains a slot with a dynamic parallel route.
          </button>
        </Link>
      </div>
      <div>
        <Link
          href={`/this-is-a-catch-all-route/${Math.random()}`}
        >
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Lets visit a random catch-all route.
          </button>
        </Link>
      </div>
    </div>
  );
}
