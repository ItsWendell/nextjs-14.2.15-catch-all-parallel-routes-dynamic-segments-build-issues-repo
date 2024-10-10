export default function BlogLayout({ children, info }: { children: React.ReactNode, info: React.ReactNode }) {
    return (
        <div className="p-4 border-green-500 border-2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Our blog layout with slot</h1>

            <div className="p-4 border-green-500 border-2">
                <h2 className="text-xl font-bold">Children</h2>
                <div className="mt-4">
                    {children}
                </div>
            </div>
            <div className="border-green-500 border-2 p-4">
                <h2 className="text-xl font-bold">@info slot</h2>
                <div className="mt-4">
                    {info}
                </div>
            </div>
        </div>
    )
}