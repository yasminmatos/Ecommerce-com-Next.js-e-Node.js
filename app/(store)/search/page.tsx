import Image from "next/image";

export default async function Search() {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return <h1> Search </h1>
}