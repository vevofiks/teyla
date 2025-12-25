import { NextResponse } from "next/server";

export async function GET() {

    const experiences = [
    {
      id: "houseboat-alleppey-01",
      name: "Luxury Spice Coast Cruise",
      location: "Alleppey",
      category: "Backwater",
      verifiedStatus: true,
      contactInfo: "+91 98470 12345",
      slug: "spice-coast-cruise", 
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "tea-garden-munnar-02",
      name: "Misty Valley Tea Trek",
      location: "Munnar",
      category: "Hills",
      verifiedStatus: true,
      contactInfo: "+91 98470 54321",
      slug: "misty-valley-trek",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: "varkala-surf-03",
      name: "North Cliff Surfing School",
      location: "Varkala",
      category: "Beaches",
      verifiedStatus: false,
      contactInfo: "+91 98470 99887",
      slug: "varkala-surf-school",
      image: "https://plus.unsplash.com/premium_photo-1669018131050-e7b5719d201b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  return NextResponse.json({ experiences });
}