"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 180 : 0,
                    scale: theme === 'dark' ? 0 : 1,
                    opacity: theme === 'dark' ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-[1.2rem] w-[1.2rem] text-orange-500" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : -180,
                    scale: theme === 'dark' ? 1 : 0,
                    opacity: theme === 'dark' ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-[1.2rem] w-[1.2rem] text-blue-500" />
            </motion.div>
            <div className="w-[1.2rem] h-[1.2rem]" /> {/* Spacer */}
        </button>
    )
}
