import type { Metadata } from "next"
import BusinessProfile from "@/components/business-profile"

export const metadata: Metadata = {
  title: "Tharuh | Coffee & Carwash",
  description:
    "Experience the perfect blend of car care and coffee culture at Tharuh - where your vehicle gets pampered while you relax with premium beverages and snacks.",
}

export default function Home() {
  return <BusinessProfile />
}

