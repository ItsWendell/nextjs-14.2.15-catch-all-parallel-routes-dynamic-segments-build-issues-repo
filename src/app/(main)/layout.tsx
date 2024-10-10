export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="p-4 border-yellow-500 border-2 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Our main layout</h1>
            {children}
        </div>
    )
}