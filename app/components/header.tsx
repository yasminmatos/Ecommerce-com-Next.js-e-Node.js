import Link from "next/link";
import { search } from 'lucide-react'
import Image from "next/image";


export function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
                <Link href="/" className="text-2xl font-extrabold text-white">
                    devstore
                </Link>

                <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700">
                    <search className="w-5 h-5 text-zinc-500" />

                    <input
                        placeholder="Buscar produtos..."
                        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500" />
                </form>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    
                    <span> Cart {0} </span>
                </div>

                <Link href="/" className="flex items-center gap-2 hover:underline">
                    <span className="text-sm"> Account </span>
                    <Image src="https://github.com/yasminmatos.png"
                    className="h-6 w-6 rounded-full" width={24} height={24}/>
                </Link>

            </div>

        </div>
    );
}