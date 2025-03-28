import type { Metadata } from "next"
import MenuDisplay from "@/components/menu-display"

export const metadata: Metadata = {
  title: "Menu | Tharuh Chill & Space",
  description: "Explore our delicious coffee, tea, and food menu at Tharuh Chill & Space.",
}

export default function MenuPage() {
  return (
    <>
      <MenuDisplay />
    </>
  )
}
