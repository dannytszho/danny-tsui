import Head from "next/head";
import Header from "@/components/header";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import HighChair from "@/public/images/foho_baby_high_chair.jpg";
import Playmat from "@/public/images/fisher-price_baby_playmat_deluxe_kick.jpg";
import Lovvie from "@/public/images/lovvie.jpg";
import FlowCleaningBush from "@/public/images/dr_browns_natural_flow_cleaning_brush.jpg";
import BottleBush from "@/public/images/soft_touch_bottle_brush.png";
import Bottle8oz from "@/public/images/dr_brown_8oz_bottle.jpg";
import HelloBaby from "@/public/images/helloBaby.jpg";
import EarProtection from "@/public/images/alpine_muffy_baby_ear_protection.jpg";
import FIEMOL from "@/public/images/FIEMOL_baby_sleep_sack.jpg";

const products = [
  {
    id: 1,
    name: "Foho Baby High Chair",
    description:
      "Foho Wood High Chair is made from food-grade PP or polypropylene material that is known to be tough, economical, and has good resistance to fatigue. The legs are made from beech tree wood which means that the chair is durable, shock-absorbing, and can withstand bearing weight or high impact force.",
    price: 105.99,
    imageUrl: HighChair,
    buyUrl: "https://amzn.to/4cOJoDT",
  },
  {
    id: 2,
    name: "Fisher-Price Baby Playmat Deluxe Kick & Play Piano",
    description:
      "Newborn set featuring the Fisher-Price Deluxe Kick & Play Piano Gym and Rattle 'n Rock Maracas soft baby rattles. Baby gym has 4 ways to play as your child grows: Lay & Play, Tummy Time, Sit & Play, and Take-Along.",
    price: 39.88,
    imageUrl: Playmat,
    buyUrl: "https://amzn.to/3AWwnLf",
  },
  {
    id: 3,
    name: "Lovvie & Joy 2-in-1 Tummy Time Mat & Seated Support Pillow",
    description:
      "Detachable Pillow Playmat: Including Pillow mat, upper cushion, foot pad, teething toy, crinkle paper. Support early body development and sensory exploration. ABP free teether is safe for baby to chew on which relieve teething pain. Crinkle paper allow babies to play and can make the sound to attract baby, boost babies' hearing skill.",
    price: 45.99,
    imageUrl: Lovvie,
    buyUrl: "https://amzn.to/4giLUF9",
  },
  {
    id: 4,
    name: "Dr. Brown's Natural Flow Cleaning Brush- Assorted Color(4-Count/Single Pack)",
    description:
      "ANTI-COLIC BABY BOTTLE VENT BRUSH. Use the small cleaning brush to scrub the internal components in Dr. Brown’s bottle, including vent inserts, reservoir and other difficult to reach places. BABY BOTTLE CLEANING. Easily maneuvers through Dr. Brown’s Internal Vent System. FITS NARROW AND WIDE-NECK BOTTLES.",
    price: 8.15,
    imageUrl: FlowCleaningBush,
    buyUrl: "https://amzn.to/3Zh7T9q",
  },
  {
    id: 5,
    name: "Dr. Brown's Soft Touch Bottle Brush, Blue",
    description:
      "BABY BOTTLE CLEANING BRUSH. Durable yet soft synthetic rubber bristles effectively clean baby bottles, cups, breast pump parts, and more without scratching.",
    price: 5.99,
    imageUrl: BottleBush,
    buyUrl: "https://amzn.to/4d1U56b",
  },
  {
    id: 6,
    name: "Dr. Brown's Natural Flow Anti-Colic Options+ Narrow Baby Bottle, 8 oz/250 mL",
    description:
      "ANTI-COLIC BABY BOTTLE. Anti-Colic internal vent system is clinically proven to reduce colic. Decreases spit-up, burping and gas. CONSISTENT FLOW RATE. Vacuum-free feeding is closest to breastfeeding and Dr. Brown’s silicone nipples provide a consistent flow so babies can feed at their own pace.",
    price: 24.96,
    imageUrl: Bottle8oz,
    buyUrl: "https://amzn.to/3Xhan57",
  },
  {
    id: 7,
    name: "HelloBaby Upgrade Baby Monitor, 5''Sreen with 30-Hour Battery",
    description: `Remote 355° Pan and Tilt Baby Monitor & 5" & Color Display. Infrared Night Vision & 2-Way Audio Video Baby Monitoring. Easy Set up & Safe Baby Monitor No WiFi Needed. Smart Baby Monitor Features`,
    price: 79.98,
    imageUrl: HelloBaby,
    buyUrl: "https://amzn.to/4cXWkHB",
  },
  {
    id: 8,
    name: "Alpine Muffy Baby Ear Protection for Babies and Toddlers up to 36 Months",
    description:
      "Cover made of ABS, padding made of PVC and PU, headband made of polyester. PROTECT YOUR BABY FROM NOISE. NO PRESSURE ON FONTANEL. ADJUSTABLE AND SAFE.TESTED AND CERTIFIED. AWARD-WINNING DUTCH DESIGN. MUST HAVE TRAVEL ESSENTIALS.",
    price: 29.99,
    imageUrl: EarProtection,
    buyUrl: "https://amzn.to/3ATx9Zw",
  },
  {
    id: 9,
    name: "FIEMOL Baby Sleep Sack 6-12 Months, 100% Cotton Sleeping Sack for Newborn and Infant",
    description:
      "Made from 100% cotton. Sustainable Double Zipper. Designed for Safety: Concerning for the safety and comfort for babies. Enough Kicking Room",
    price: 22.99,
    imageUrl: FIEMOL,
    buyUrl: "https://amzn.to/4egZxmq",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>My Amazon Affiliate Recommendations</title>
        <meta
          name="description"
          content="Check out my top Amazon product recommendations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow container mx-auto py-8 px-10 md:px-6">
        <h2 className="text-3xl font-bold mb-6">Top Recommended Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col h-full">
              <CardHeader className="p-0 items-center">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={400}
                  height={200}
                  className="w-48 h-48"
                />
              </CardHeader>
              <CardContent className="p-4 flex-grow">
                <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                <p className="text-muted-foreground mb-2">
                  {product.description}
                </p>
                <p className="text-primary font-bold mt-auto">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <a
                    href={product.buyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-8">
        <div className="container mx-auto py-4 text-center">
          <p>&copy; 2024 Danny Tsui. Amazon affiliate links included.</p>
        </div>
      </footer>
    </div>
  );
}
