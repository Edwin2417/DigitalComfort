import { SEO_CONFIG } from "~/app";

import type { Notification } from "./notification-center";

export const mockNotifications: Notification[] = [
  {
    description:
      "Gracias por registrarte. Explora los mejores vehículos y ofertas exclusivas.",
    id: "1",
    read: false,
    timestamp: new Date(Date.now() - 60 * 1000),
    title: `¡Bienvenido a ${SEO_CONFIG.name}!`,
    type: "success",
  },
  {
    description:
      "Hubo un problema con tu solicitud de financiamiento. Intenta nuevamente.",
    id: "2",
    read: false,
    timestamp: new Date(Date.now() - 5 * 60 * 1000),
    title: "Financiamiento rechazado",
    type: "error",
  },
  {
    description:
      "Tu solicitud para el vehículo #1234 fue procesada y está en revisión.",
    id: "3",
    read: false,
    timestamp: new Date(Date.now() - 3600 * 1000),
    title: "Solicitud enviada",
    type: "info",
  },
  {
    description: "El vehículo que te interesaba ya está disponible nuevamente.",
    id: "4",
    read: true,
    timestamp: new Date(Date.now() - 3600 * 1000),
    title: "Vehículo disponible",
    type: "info",
  },
  {
    description:
      "Aprovecha un 10% de descuento en SUVs seleccionadas por tiempo limitado.",
    id: "5",
    read: true,
    timestamp: new Date(Date.now() - 2 * 86400 * 1000),
    title: "¡Oferta especial!",
    type: "warning",
  },
];
