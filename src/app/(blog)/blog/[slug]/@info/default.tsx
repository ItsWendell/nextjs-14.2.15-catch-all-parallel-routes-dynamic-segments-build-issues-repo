import Link from "next/link";

export default function InfoSlotDefault({ params }: { params: Record<string, string | string[] | undefined> }) {
    return (
        <div>
            <h1 className="text-4xl font-bold">Info Slot Default</h1>
            <Link href={`/blog/${params.slug}/info/${Number(params.infoId ?? 0) + 1}`}>
                <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Start slotting
                </button>
            </Link>
        </div>
    )
}