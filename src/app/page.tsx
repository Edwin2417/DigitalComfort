import { ArrowRight, Clock, ShoppingBag, Star, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { HeroBadge } from "~/ui/components/hero-badge";
import { ProductCard } from "~/ui/components/product-card";
import { Button } from "~/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/ui/primitives/card";

import { categories, featuredProductsHomepage } from "./mocks";

const featuresWhyChooseUs = [
  {
    description:
      "Envío gratuito en compras mayores a RD$5000. Entrega rápida y segura hasta tu puerta.",
    icon: <Truck className="h-6 w-6 text-primary" />,
    title: "Envío Gratis",
  },
  {
    description:
      "Tu información de pago está siempre protegida. Utilizamos tecnología de encriptación avanzada.",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
    title: "Pago Seguro",
  },
  {
    description:
      "Nuestro equipo de atención al cliente está disponible en todo momento para ayudarte.",
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Soporte 24/7",
  },
  {
    description:
      "Respaldamos cada producto con garantía y política de devolución de 30 días.",
    icon: <Star className="h-6 w-6 text-primary" />,
    title: "Garantía de Calidad",
  },
];

export default function HomePage() {
  return (
    <>
      <main
        className={`
          flex min-h-screen flex-col gap-y-16 bg-gradient-to-b from-muted/50
          via-muted/25 to-background
        `}
      >
        {/* Sample banner */}

        {/* Hero Section */}
        <section
          className={`
            relative overflow-hidden py-24
            md:py-32
          `}
        >
          <div
            className={`
              bg-grid-black/[0.02] absolute inset-0
              bg-[length:20px_20px]
            `}
          />
          <div
            className={`
              relative z-10 container mx-auto max-w-7xl px-4
              sm:px-6
              lg:px-8
            `}
          >
            <div
              className={`
                grid items-center gap-10
                lg:grid-cols-2 lg:gap-12
              `}
            >
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <HeroBadge />

                  <h1
                    className={`
                      font-display text-4xl leading-tight font-bold
                      tracking-tight text-foreground
                      sm:text-5xl
                      md:text-6xl
                      lg:leading-[1.1]
                    `}
                  >
                    Potencia tu{" "}
                    <span
                      className={`
                        bg-gradient-to-r from-primary to-primary/70 bg-clip-text
                        text-transparent
                      `}
                    >
                      Mundo Digital
                    </span>
                  </h1>
                  <p
                    className={`
                      max-w-[700px] text-lg text-muted-foreground
                      md:text-xl
                    `}
                  >
                    Descubre productos tecnológicos premium a precios
                    competitivos, con envíos rápidos y un servicio al cliente
                    excepcional.
                  </p>
                </div>
                <div
                  className={`
                    flex flex-col gap-3
                    sm:flex-row
                  `}
                >
                  <Link href="/products">
                    <Button
                      className={`
                        h-12 gap-1.5 px-8 transition-colors duration-200
                      `}
                      size="lg"
                    >
                      Comprar Ahora <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button
                      className="h-12 px-8 transition-colors duration-200"
                      size="lg"
                      variant="outline"
                    >
                      Sobre Nosotros
                    </Button>
                  </Link>
                </div>
                <div
                  className={`
                    flex flex-wrap gap-5 text-sm text-muted-foreground
                  `}
                >
                  <div className="flex items-center gap-1.5">
                    <Truck className="h-5 w-5 text-primary/70" />
                    <span>Envíos gratis en compras mayores a RD$5000</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-5 w-5 text-primary/70" />
                    <span>Atención al Cliente 24/7</span>
                  </div>
                </div>
              </div>
              <div
                className={`
                  relative mx-auto hidden aspect-square w-full max-w-md
                  overflow-hidden rounded-xl border shadow-lg
                  lg:block
                `}
              >
                <div
                  className={`
                    absolute inset-0 z-10 bg-gradient-to-tr from-primary/20
                    via-transparent to-transparent
                  `}
                />
                <Image
                  alt="Shopping experience"
                  className="object-cover"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src="https://images.unsplash.com/photo-1624767735494-1929dc24ad43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                />
              </div>
            </div>
          </div>
          <div
            className={`
              absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent
              via-primary/20 to-transparent
            `}
          />
        </section>

        {/* Featured Categories */}
        <section
          className={`
            py-12
            md:py-16
          `}
        >
          <div
            className={`
              container mx-auto max-w-7xl px-4
              sm:px-6
              lg:px-8
            `}
          >
            <div className="mb-8 flex flex-col items-center text-center">
              <h2
                className={`
                  font-display text-3xl leading-tight font-bold tracking-tight
                  md:text-4xl
                `}
              >
                Compra por Categoría
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Encuentra el dispositivo perfecto según tus necesidades en
                nuestras colecciones seleccionadas
              </p>
            </div>
            <div
              className={`
                grid grid-cols-2 gap-4
                md:grid-cols-4 md:gap-6
              `}
            >
              {categories.map((category) => (
                <Link
                  aria-label={`Browse ${category.name} products`}
                  className={`
                    group relative flex flex-col space-y-4 overflow-hidden
                    rounded-2xl border bg-card shadow transition-all
                    duration-300
                    hover:shadow-lg
                  `}
                  href={`/products?category=${category.name.toLowerCase()}`}
                  key={category.name}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className={`
                        absolute inset-0 z-10 bg-gradient-to-t
                        from-background/80 to-transparent
                      `}
                    />
                    <Image
                      alt={category.name}
                      className={`
                        object-cover transition duration-300
                        group-hover:scale-105
                      `}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                      src={category.image}
                    />
                  </div>
                  <div className="relative z-20 -mt-6 p-4">
                    <div className="mb-1 text-lg font-medium">
                      {category.name}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.productCount} products
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section
          className={`
            bg-muted/50 py-12
            md:py-16
          `}
        >
          <div
            className={`
              container mx-auto max-w-7xl px-4
              sm:px-6
              lg:px-8
            `}
          >
            <div className="mb-8 flex flex-col items-center text-center">
              <h2
                className={`
                  font-display text-3xl leading-tight font-bold tracking-tight
                  md:text-4xl
                `}
              >
                Productos Destacados
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Descubre nuestros artículos tecnológicos más vendidos y
                recientes
              </p>
            </div>
            <div
              className={`
                grid grid-cols-1 gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              `}
            >
              {featuredProductsHomepage.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/products">
                <Button className="group h-12 px-8" size="lg" variant="outline">
                  Ver Todos los Productos
                  <ArrowRight
                    className={`
                      ml-2 h-4 w-4 transition-transform duration-300
                      group-hover:translate-x-1
                    `}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          className={`
            py-12
            md:py-16
          `}
          id="features"
        >
          <div
            className={`
              container mx-auto max-w-7xl px-4
              sm:px-6
              lg:px-8
            `}
          >
            <div className="mb-8 flex flex-col items-center text-center">
              <h2
                className={`
                  font-display text-3xl leading-tight font-bold tracking-tight
                  md:text-4xl
                `}
              >
                ¿Por Qué Elegirnos?
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p
                className={`
                  mt-4 max-w-2xl text-center text-muted-foreground
                  md:text-lg
                `}
              >
                Ofrecemos la mejor experiencia de compra con beneficios
                exclusivos
              </p>
            </div>
            <div
              className={`
                grid gap-8
                md:grid-cols-2
                lg:grid-cols-4
              `}
            >
              {featuresWhyChooseUs.map((feature) => (
                <Card
                  className={`
                    rounded-2xl border-none bg-background shadow transition-all
                    duration-300
                    hover:shadow-lg
                  `}
                  key={feature.title}
                >
                  <CardHeader className="pb-2">
                    <div
                      className={`
                        mb-3 flex h-12 w-12 items-center justify-center
                        rounded-full bg-primary/10
                      `}
                    >
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className={`
            py-12
            md:py-16
          `}
        >
          <div
            className={`
              container mx-auto max-w-7xl px-4
              sm:px-6
              lg:px-8
            `}
          >
            <div
              className={`
                relative overflow-hidden rounded-xl bg-primary/10 p-8 shadow-lg
                md:p-12
              `}
            >
              <div
                className={`
                  bg-grid-white/[0.05] absolute inset-0
                  bg-[length:16px_16px]
                `}
              />
              <div className="relative z-10 mx-auto max-w-2xl text-center">
                <h2
                  className={`
                    font-display text-3xl leading-tight font-bold tracking-tight
                    md:text-4xl
                  `}
                >
                  ¿Listo para Actualizar tu Tecnología?
                </h2>
                <p
                  className={`
                    mt-4 text-lg text-muted-foreground
                    md:text-xl
                  `}
                >
                  Únete a miles de clientes satisfechos y disfruta de los
                  mejores productos tecnológicos del mercado. Regístrate hoy y
                  recibe ofertas exclusivas.
                </p>
                <div
                  className={`
                    mt-6 flex flex-col items-center justify-center gap-3
                    sm:flex-row
                  `}
                >
                  <Link href="/auth/sign-up">
                    <Button
                      className="h-12 px-8 transition-colors duration-200"
                      size="lg"
                    >
                      Crear Cuenta
                    </Button>
                  </Link>
                  <Link href="/products">
                    <Button
                      className="h-12 px-8 transition-colors duration-200"
                      size="lg"
                      variant="outline"
                    >
                      Explorar Productos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
