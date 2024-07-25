export default function Show({ post }) {
    return (
        <>
            <h1 className="title">Post</h1>

            <div className="p-4">
                <div className="text-sm text-slate-600">
                    <span>Posted on: </span>
                    <span>{ new Date(post.created_at).toLocaleDateString() }</span>
                </div>
                <p className="font-medium">
                    {post.body}
                </p>
            </div>

        </>
    )
}
