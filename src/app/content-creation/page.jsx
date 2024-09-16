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
    name: "Der Rose 2 Pack Fake Plants Artificial Potted Faux Plants for Office Desk Home Farmhouse Decor",
    description:
      "2 pack artificial plants for home decor indoor which have 12 beautiful green leaves each.",
    price: 16.99,
    imageUrl: FakeRose1,
    buyUrl: "https://amzn.to/3BaGsnK",
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
        <h2 className="text-3xl font-bold mb-6">Office Designs Products</h2>
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

      <Footer />
    </div>
  );
}
