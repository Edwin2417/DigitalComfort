import Image from "next/image";
import Link from "next/link";

import { Button } from "~/ui/primitives/button";
import { Card, CardContent, CardHeader, CardTitle } from "~/ui/primitives/card";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col gap-y-24 bg-background">
      {/* HERO */}
      <section className="py-28">
        <div className="container mx-auto max-w-6xl px-4">
          <div
            className={`
              grid items-center gap-12
              lg:grid-cols-2
            `}
          >
            <div className="space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">
                Sobre MotorHub
              </h1>

              <p className="text-justify text-xl text-muted-foreground">
                En MotorHub creemos que comprar un vehículo debe ser una
                experiencia simple, segura y transparente. Conectamos personas
                con autos de calidad, ofreciendo opciones accesibles que se
                adaptan a cada necesidad y presupuesto.
              </p>

              <Link href="/vehicles">
                <Button className="px-8" size="lg">
                  Explorar Vehículos
                </Button>
              </Link>
            </div>

            <div
              className={`
                relative hidden aspect-square w-full max-w-md overflow-hidden
                rounded-2xl border shadow-xl
                lg:block
              `}
            >
              <Image
                alt="Vehículos MotorHub"
                className="object-cover"
                fill
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop&q=60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section className="border-t bg-card py-20">
        <div className="container mx-auto max-w-4xl space-y-6 px-4">
          <h2 className="text-3xl font-bold">¿Quiénes Somos?</h2>

          <p className="text-justify leading-relaxed text-muted-foreground">
            Somos un marketplace especializado en la compra y venta de vehículos
            nuevos y usados. Ofrecemos una amplia variedad de opciones como
            SUVs, sedanes, camionetas y vehículos deportivos, cuidadosamente
            seleccionados para garantizar calidad y confianza.
          </p>

          <p className="text-justify leading-relaxed text-muted-foreground">
            Nos enfocamos en brindar una experiencia de compra segura, con
            procesos transparentes y acompañamiento en cada paso, incluyendo
            asesoría, financiamiento y verificación de vehículos.
          </p>

          <p className="text-justify leading-relaxed text-muted-foreground">
            En MotorHub no solo vendemos vehículos, ayudamos a las personas a
            encontrar el auto ideal para su estilo de vida.
          </p>
        </div>
      </section>

      {/* MISION VISION VALORES */}
      <section className="border-t py-24">
        <div
          className={`
            container mx-auto grid max-w-6xl gap-8 px-4
            md:grid-cols-3
          `}
        >
          {/* MISIÓN */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent className="text-justify text-muted-foreground">
              Facilitar la compra y venta de vehículos de forma segura, rápida y
              accesible, ofreciendo opciones confiables, asesoría personalizada
              y soluciones de financiamiento que se adapten a cada cliente.
            </CardContent>
          </Card>

          {/* VISIÓN */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent className="text-justify text-muted-foreground">
              Ser la plataforma líder en la compra y venta de vehículos en
              República Dominicana, destacándonos por la confianza, la
              innovación digital y la excelencia en la experiencia del cliente.
            </CardContent>
          </Card>

          {/* VALORES */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Valores</CardTitle>
            </CardHeader>

            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">Transparencia</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">Confianza</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">Calidad</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">Innovación</span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium">Compromiso</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
