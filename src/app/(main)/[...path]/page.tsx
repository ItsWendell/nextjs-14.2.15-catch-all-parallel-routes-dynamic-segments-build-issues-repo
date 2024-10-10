export default function BlogPost({ params }: { params: Record<string, string | string [] | undefined> }) {
    return (
        <div>
            <h1 className="text-4xl font-bold">Catch all</h1>
            {JSON.stringify(params)}
        </div>
    )
}