import type { Metadata } from "next"
import BusinessProfile from "@/components/business-profile"

export const metadata: Metadata = {
  title: "Tharuh | Chill & Space",
  description:
    "Nikmati aroma dan rasa kopi selagi melihat mobil anda semakin bersih.",
}

export default function Home() {
  return <BusinessProfile />
}

