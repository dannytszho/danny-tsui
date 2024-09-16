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
import Mic from "@/public/images/mic.jpg";

const products = [
  {
    id: 1,
    name: "Comica Wireless Lavalier Microphone, BoomX-D2 2.4G Compact Wireless Lapel Microphone System with 2 Transmitter and 1 Receiver",
    description:
      "Comica BoomX-D2 wireless mic comes with two transmitters and one receiver. The working distance of up to 650ft, is ideal for Tiktok Livestream, interviews, Youtube video recordings, etc. The receiver of BoomX-D2 Wireless lapel mic has a 3.5mm headphone monitor hole, you can test whether it is working normally during recording. Press the power button briefly on the transmitter to mute, for short pauses or adjustments to the device during recording.",
    price: 105.0,
    imageUrl: Mic,
    buyUrl: "https://amzn.to/4glikPH",
  },
];

export default function ContentCreationPage() {
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
        <h2 className="text-3xl font-bold mb-6">Content Creation Products</h2>
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
