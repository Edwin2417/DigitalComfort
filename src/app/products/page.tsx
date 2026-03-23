"use client";

import * as React from "react";

import { ProductCard } from "~/ui/components/product-card"; // 👈 volvemos a este
import { Button } from "~/ui/primitives/button";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

type Category = string;

interface Product {
  category: string;
  id: string;
  image: string;
  inStock: boolean;
  name: string;
  originalPrice?: number;
  price: number;
  rating: number;
}

/* -------------------------------------------------------------------------- */
/*                               Mock data                                    */
/* -------------------------------------------------------------------------- */

const products: Product[] = [
  {
    category: "Sedán",
    id: "1",
    image:
      "https://images.unsplash.com/photo-1626072557464-90403d788e8d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    name: "Toyota Corolla 2020 • 45,000 km",
    originalPrice: 1050000,
    price: 950000,
    rating: 4.7,
  },
  {
    category: "SUV",
    id: "2",
    image:
      "https://images.unsplash.com/photo-1707070182914-fb69f596c98e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    name: "Honda CR-V 2019 • 60,000 km",
    price: 1250000,
    rating: 4.8,
  },
  {
    category: "Camioneta",
    id: "3",
    image:
      "https://images.unsplash.com/photo-1559416523-140ddc3d238c?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: false,
    name: "Toyota Hilux 2021 • 30,000 km",
    price: 1850000,
    rating: 4.9,
  },
  {
    category: "Deportivo",
    id: "4",
    image:
      "https://images.unsplash.com/photo-1547744152-14d985cb937f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    inStock: true,
    name: "Ford Mustang 2022 • 15,000 km",
    price: 2500000,
    rating: 5,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Component                                     */
/* -------------------------------------------------------------------------- */

export default function VehiclesPage() {
  const categories: Category[] = React.useMemo(() => {
    const dynamic = Array.from(new Set(products.map((p) => p.category))).sort();
    return ["Todos", ...dynamic];
  }, []);

  const [selectedCategory, setSelectedCategory] =
    React.useState<Category>("Todos");

  const filteredProducts = React.useMemo(
    () =>
      selectedCategory === "Todos"
        ? products
        : products.filter((p) => p.category === selectedCategory),
    [selectedCategory],
  );

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-10">
        <div
          className={`
            container px-4
            md:px-6
          `}
        >
          {/* HEADER */}
          <div
            className={`
              mb-8 flex flex-col gap-4
              md:flex-row md:items-center md:justify-between
            `}
          >
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Vehículos</h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Encuentra el vehículo ideal según tu presupuesto y estilo de
                vida.
              </p>
            </div>

            {/* FILTROS */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  className="rounded-full"
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  size="sm"
                  variant={
                    category === selectedCategory ? "default" : "outline"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* GRID */}
          <div
            className={`
              grid grid-cols-1 gap-6
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
            `}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* EMPTY */}
          {filteredProducts.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                No hay vehículos en esta categoría.
              </p>
            </div>
          )}

          {/* PAGINACIÓN */}
          <div className="mt-12 flex justify-center gap-2">
            <Button disabled variant="outline">
              Anterior
            </Button>
            <Button variant="default">1</Button>
            <Button disabled variant="outline">
              Siguiente
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
