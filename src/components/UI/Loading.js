export default function Loading() {
    
    return (
        <div className="flex justify-center items-center">
            <div className="h-2.5 w-2.5 bg-current rounded-full animate-pulse animate-bounce"></div>
            <div className="h-2.5 w-2.5 bg-current rounded-full mx-4 animate-pulse animate-bounce200"></div>
            <div className="h-2.5 w-2.5 bg-current rounded-full animate-pulse animate-bounce400"></div>
        </div>
    )
}