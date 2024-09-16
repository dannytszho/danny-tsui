import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FakeRose1 from "@/public/images/fake_rose_1.jpg";
import FakeRose2 from "@/public/images/fake_rose_2.jpg";
import ArtificialHanging from "@/public/images/artificial_hanging_plants.jpg";
import WallGrid from "@/public/images/friade_wall_grid_panel.jpg";
import Leoenir4Pack from "@/public/images/leoenir_4_pack_round.jpg";
import QeeigFloatingShelves from "@/public/images/qeeig_floating_shelves.jpg";
import Bohopack from "@/public/images/pack_boho.jpg";

const products = [
  {
    id: 1,
    name: "Der Rose 2 Pack Fake Plants Artificial Potted Faux Plants for Office Desk Home Farmhouse Decor",
    description:
      "2 pack artificial plants for home decor indoor which have 12 beautiful green leaves each.",
    price: 16.99,
    imageUrl: FakeRose1,
    buyUrl: "https://amzn.to/3BaGsnK",
  },
  {
    id: 2,
    name: "Der Rose 2 Pack Small Fake Plants Mini Artificial Potted Plants for Table Desk Home Bathroom Office Decor",
    description:
      "The total height of the artificial potted plant is about 7.1 In , the size of the pot is about 2.5×2.5×2.7 In. The faux plants are made of high-quality plastic material,which is easy to maintain.The plastic pot is durable and not fragile",
    price: 7.99,
    imageUrl: FakeRose2,
    buyUrl: "https://amzn.to/3zhAq4g",
  },
  {
    id: 3,
    name: "Artificial Hanging Plants for Shelf, 4 Pack Fake Potted Greenery Faux Eucalyptus Vine, Mandala Vine, String of Pearls,Pea pod Leaves in Pot for Office Living Room Bathroom Indoor Outdoor Décor",
    description:
      "4 pack different style artificial hanging plant with black pot. Our artificial floral accents will add a rich and elegant look to any decor.",
    price: 16.99,
    imageUrl: ArtificialHanging,
    buyUrl: "https://amzn.to/3Zm9xqD",
  },
  {
    id: 4,
    name: `FRIADE Wall Grid Panel for Photo Display,Wall Storage Organizer,5 Metal Clips & 3 S Hooks & 4 Nails & 4 Plastic Hanging Buckles and 4 Screws Offered,Size 17.5" x 11.8"，Set of 2 (Black)`,
    description:
      "Made of iron wire,surface with electroplating technology, anti-oxidation and anti-corrosion, can extend the service life effectively",
    price: 16.0,
    imageUrl: WallGrid,
    buyUrl: "https://amzn.to/3XqdPdW",
  },
  {
    id: 5,
    name: `4 Pack Round Hanging Railing Planters - Metal Flower Pot Holder for Balcony and Fence （Black）`,
    description:
      "Made of premium iron with rust-resistant coating for durability and preventing bending or breaking. Perfect for potting plants, succulents, and flowers, adding unique charm to balconies, fences, patios, walls, gardens, homes, decks, or porches.",
    price: 14.95,
    imageUrl: Leoenir4Pack,
    buyUrl: "https://amzn.to/47qikK2",
  },
  {
    id: 6,
    name: "QEEIG Floating Shelves Bathroom Shelf Bedroom Kitchen Farmhouse Small Book Shelf for Wall 16 inch Set of 4, Rustic Brown (015-BN4)",
    description: `Medium Density Fiberboard. 6.7"D x 15.7"W x 1.5"H. 6.7" depth suitable for books, basket, toilet paper or bath towels. Contains 4 shelves perfect for small space and freedom combination. Enhanced steel brackets hold up to 25 lbs, no lean or sag during long-term placement.`,
    price: 39.82,
    imageUrl: QeeigFloatingShelves,
    buyUrl: "https://amzn.to/4eczJs0",
  },
  {
    id: 7,
    name: `7 Pack Boho Wall Basket Decor, Hanging Woven Wall Basket Decor`,
    description: `7 pieces of woven basket wall decoration are mainly made of woven grass. They are not easy to deform or fade and are hand-woven. The surface pattern is smooth, orderly, safe and wear-resistant. 5 sizes: 1 piece about 4.33 inches /11 cm, 1 piece about 5.91 inches /15 cm, 2 pieces about 7.09 inches /18 cm, 1 piece about 9.84 inches /25 cm. And 2 pieces about 11.81 inches /30 cm. You can arrange them in different way.`,
    price: 16.99,
    imageUrl: Bohopack,
    buyUrl: "https://amzn.to/3TufMoh",
  },
];

export default function OfficeDesignsPage() {
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
        <h2 className="text-3xl font-bold mb-6">Office Designs Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`
            ${
              products.length === 1
                ? "col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center"
                : ""
            }
          `}
            >
              <Card
                className={`flex flex-col h-full ${
                  products.length === 1 ? "w-full max-w-sm" : "w-full"
                }`}
              >
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
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
