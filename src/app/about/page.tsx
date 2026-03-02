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
                Sobre DigitalComfort
              </h1>
              <br />
              <p className="text-justify text-xl text-muted-foreground">
                En DigitalComfort creemos que la tecnología no solo debe ser
                moderna, sino útil, accesible y capaz de mejorar tu día a día.
                Ofrecemos productos seleccionados con altos estándares de
                calidad para brindarte comodidad, rendimiento y confianza en
                cada compra.
              </p>
              <Link href="/products">
                <Button className="px-8" size="lg">
                  Explorar Productos
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
                alt="DigitalComfort"
                className="object-cover"
                fill
                src="https://images.unsplash.com/photo-1624767735494-1929dc24ad43?w=800&auto=format&fit=crop&q=60"
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
            Somos una tienda especializada en tecnología enfocada en ofrecer
            soluciones prácticas y modernas para el hogar, el trabajo y el
            entretenimiento. Comercializamos audífonos, relojes inteligentes,
            celulares, televisores y accesorios tecnológicos cuidadosamente
            seleccionados.
          </p>

          <p className="text-justify leading-relaxed text-muted-foreground">
            Nos distinguimos por nuestra atención personalizada, procesos de
            compra seguros y un servicio postventa responsable. Nuestro equipo
            está comprometido en asesorar a cada cliente para que encuentre el
            producto ideal según sus necesidades y presupuesto.
          </p>

          <p className="text-justify leading-relaxed text-muted-foreground">
            En DigitalComfort no solo vendemos tecnología, construimos
            relaciones de confianza a largo plazo.
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
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Misión</CardTitle>
            </CardHeader>
            <CardContent
              className={`
                space-y-3 text-justify leading-relaxed text-muted-foreground
              `}
            >
              <p>
                Ofrecer productos tecnológicos innovadores y de alta calidad que
                aporten comodidad, eficiencia y conectividad a la vida diaria de
                nuestros clientes.
              </p>
              <p>
                Garantizamos precios competitivos, procesos de compra seguros y
                un servicio excepcional que genere confianza y satisfacción en
                cada experiencia.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Visión</CardTitle>
            </CardHeader>
            <CardContent
              className={`
                space-y-3 text-justify leading-relaxed text-muted-foreground
              `}
            >
              <p>
                Ser la tienda tecnológica de referencia en República Dominicana,
                reconocida por la excelencia en el servicio, la innovación
                constante y la confianza que inspiramos en nuestros clientes.
              </p>
              <p>
                Aspiramos a expandir nuestra presencia digital y consolidarnos
                como una marca líder en soluciones tecnológicas accesibles.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Valores</CardTitle>
            </CardHeader>

            <CardContent className="text-justify">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">
                    Innovación Constante
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">
                    Compromiso con la Calidad
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">
                    Transparencia y Confianza
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">
                    Orientación al Cliente
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span className="font-medium text-foreground">
                    Responsabilidad y Ética Profesional
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
