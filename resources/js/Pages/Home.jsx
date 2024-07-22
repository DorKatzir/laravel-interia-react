import { Link } from "@inertiajs/react";

export default function Home({name}) {
    return (
        <>
            <h1 className="title text-green-500">Hello {name} </h1>

            <Link preserveScroll className="block title mt-[1000px]" href="">
                {new Date().toLocaleTimeString()}
            </Link>
        </>
    )
}
