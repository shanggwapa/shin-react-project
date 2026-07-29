import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Card } from "@/components/ui/card";
import card1 from "../assets/card1.jpg";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-purple-200 min-h-screen">
<section className="flex justify-center items-center gap-8 flex-wrap py-12">
    <Card
    image={card1}
    title="Shane Carey Gales"
    description="Hello, I am a student in CPC currently taking the course BSIT!"
    buttonLabel="My Socials"
    buttonVariant="primary"

  />

</section>
</main>

<Footer />
    </>
  )
}