import { SEO_CONFIG } from "~/app";

import type { Notification } from "./notification-center";

export const mockNotifications: Notification[] = [
  {
    description:
      "Gracias por registrarte. Descubre los mejores gadgets y ofertas exclusivas.",
    id: "1",
    read: false,
    timestamp: new Date(Date.now() - 60 * 1000),
    title: `¡Bienvenido a ${SEO_CONFIG.name}!`,
    type: "success",
  },
  {
    description: "Hubo un problema con tu método de pago. Intenta nuevamente.",
    id: "2",
    read: false,
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    title: "Pago rechazado",
    type: "error",
  },
  {
    description: "Tu pedido #1234 fue enviado y está en camino.",
    id: "3",
    read: false,
    timestamp: new Date(Date.now() - 3600 * 1000),
    title: "Pedido enviado",
    type: "info",
  },
  {
    description: "Los audífonos inalámbricos que querías ya están disponibles.",
    id: "4",
    read: true,
    timestamp: new Date(Date.now() - 3600 * 1000),
    title: "Producto nuevamente disponible",
    type: "info",
  },
  {
    description:
      "Aprovecha 10% de descuento en relojes inteligentes por tiempo limitado.",
    id: "5",
    read: true,
    timestamp: new Date(Date.now() - 2 * 86400 * 1000),
    title: "¡Oferta especial!",
    type: "warning",
  },
];
