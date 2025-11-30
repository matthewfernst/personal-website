'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8">
      <div className="flex items-center gap-4">
        <Image 
        src="/profilePicture.jpeg" 
        alt="Profile picture"
        width={375}
        height={385}
        className="pointer-events-none w-12 h-12 rounded-full"
        / >
        <div className="flex flex-col">
        <Link href="/" className="font-medium text-black dark:text-white">
          Matthew Ernst
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.5}
        >
          Software Engineer
        </TextEffect>
      </div>
      </div>
    </header>
  )
}
