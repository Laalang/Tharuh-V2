"use client"

import type React from "react"
import { useState, useEffect } from "react"

export const CursorLight: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updatePosition)

    return () => window.removeEventListener("mousemove", updatePosition)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 ease-in-out"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(200, 200, 200, 0.07), transparent 80%)`,
      }}
    />
  )
}

