import Link from "next/link";

export default function BlogPost({ params }: { params: Record<string, string | string[] | undefined> }) {
    return (
        <div>
            <h1 className="text-4xl font-bold">Blog Post: {params.slug}</h1>
            <div className="mt-4 whitespace-pre-wrap text-lg">
                {JSON.stringify(params)}
            </div>
            <div className="flex gap-4">

                <Link href={`/blog/${Number(params.slug) + 1}`}>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Next blog post
                    </button>
                </Link>
            </div>
        </div>
    )
}