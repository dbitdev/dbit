/**
 * Textos legales del sitio. Borrador base conforme a la LFPDPPP (México):
 * deben revisarse con un abogado y completarse los datos entre [corchetes].
 */
export interface LegalDoc {
  slug: "privacidad" | "terminos" | "cookies";
  title: string;
  summary: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}

export const LEGAL_VERSION = "2026-10-24";
const updated = "24 de octubre de 2026";
const contact = "legal@dbit.inc";

export const legalDocs: LegalDoc[] = [
  {
    slug: "privacidad",
    title: "Aviso de privacidad",
    summary: "Qué datos personales recabamos, para qué los usamos y cómo ejercer tus derechos.",
    updated,
    sections: [
      {
        heading: "Responsable",
        body: [
          `Dbit, Inc. ("Dbit"), con domicilio en [domicilio completo], es responsable del tratamiento de tus datos personales conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su Reglamento.`,
          `Para cualquier asunto relacionado con este aviso puedes escribir a ${contact}.`,
        ],
      },
      {
        heading: "Datos que recabamos",
        body: [
          "Datos de identificación y contacto que nos proporcionas al escribirnos o comprar en la tienda: nombre, correo electrónico, teléfono y, en su caso, domicilio de envío.",
          "Datos de navegación recabados mediante cookies y tecnologías similares, como dirección IP, tipo de navegador y páginas visitadas.",
          "No recabamos datos personales sensibles a través de este sitio. Los datos de pago se procesan directamente por los proveedores de pago y no se almacenan en Dbit.",
        ],
      },
      {
        heading: "Finalidades",
        body: [
          "Finalidades primarias, necesarias para la relación contigo: responder solicitudes de contacto, evaluar propuestas de colaboración o inversión, procesar y enviar pedidos de la tienda, y emitir comprobantes fiscales.",
          "Finalidades secundarias: enviarte noticias sobre los proyectos del ecosistema y medir el uso del sitio para mejorarlo. Puedes oponerte a estas finalidades escribiendo a " + contact + " sin que ello afecte las primarias.",
        ],
      },
      {
        heading: "Transferencias",
        body: [
          "Podemos compartir tus datos con proveedores que nos prestan servicios (alojamiento, pagos, envíos, correo) y que están obligados a protegerlos, así como con las empresas del ecosistema Dbit cuando sea necesario para atender tu solicitud.",
          "No vendemos tus datos personales. Cualquier otra transferencia que requiera tu consentimiento te será solicitada previamente.",
        ],
      },
      {
        heading: "Derechos ARCO y revocación",
        body: [
          `Puedes acceder, rectificar, cancelar u oponerte al tratamiento de tus datos (derechos ARCO), así como revocar tu consentimiento o limitar su uso, enviando una solicitud a ${contact} con tu nombre, un medio para responderte, una copia de tu identificación y la descripción clara de lo que solicitas.`,
          "Responderemos en un plazo máximo de 20 días hábiles y, de ser procedente, la haremos efectiva dentro de los 15 días hábiles siguientes.",
        ],
      },
      {
        heading: "Cookies",
        body: ["Este sitio utiliza cookies. Consulta la Política de cookies para conocer cuáles usamos y cómo desactivarlas."],
      },
      {
        heading: "Cambios a este aviso",
        body: ["Cualquier modificación se publicará en esta página con su fecha de actualización."],
      },
    ],
  },
  {
    slug: "terminos",
    title: "Términos y condiciones",
    summary: "Las reglas para usar este sitio y comprar en la tienda Dbit.",
    updated,
    sections: [
      {
        heading: "Aceptación",
        body: [
          "Al usar dbit.inc aceptas estos términos. Si no estás de acuerdo con ellos, te pedimos no utilizar el sitio.",
        ],
      },
      {
        heading: "Sobre el sitio",
        body: [
          "Este sitio es el portal informativo de Dbit, Inc. y de los proyectos, empresas y marcas en los que participa. La información sobre cada proyecto es de carácter general y puede cambiar sin previo aviso.",
          "Cada proyecto del ecosistema puede tener sus propios términos, que aplican cuando usas sus servicios directamente.",
        ],
      },
      {
        heading: "Propiedad intelectual",
        body: [
          "Las marcas, logotipos, textos, imágenes y demás contenidos del sitio pertenecen a Dbit, Inc. o a sus respectivos titulares. No pueden usarse sin autorización previa y por escrito.",
        ],
      },
      {
        heading: "Tienda Dbit",
        body: [
          "Los precios se muestran en la moneda indicada e incluyen los impuestos aplicables salvo que se diga lo contrario. Los pagos se procesan a través de proveedores externos.",
          "Los tiempos de envío son estimados. Las políticas de cambios y devoluciones se informan en el proceso de compra y se rigen por la Ley Federal de Protección al Consumidor.",
        ],
      },
      {
        heading: "Información no vinculante",
        body: [
          "El contenido sobre inversión, finanzas, tecnología o temas legales es informativo y no constituye asesoría profesional, oferta de valores ni recomendación de inversión. Cualquier colaboración se formaliza por escrito.",
        ],
      },
      {
        heading: "Responsabilidad",
        body: [
          "Procuramos que el sitio funcione correctamente, pero no garantizamos que esté libre de errores o interrupciones. Dbit no es responsable por daños derivados del uso del sitio o de sitios de terceros enlazados.",
        ],
      },
      {
        heading: "Ley aplicable",
        body: [
          "Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier controversia se someterá a los tribunales competentes de [ciudad], renunciando a cualquier otro fuero.",
          `Dudas: ${contact}.`,
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Política de cookies",
    summary: "Qué cookies usa el sitio y cómo puedes controlarlas.",
    updated,
    sections: [
      {
        heading: "Qué son",
        body: ["Las cookies son pequeños archivos que el navegador guarda para recordar información sobre tu visita."],
      },
      {
        heading: "Cuáles usamos",
        body: [
          "Necesarias: permiten que el sitio funcione y recuerdan tu aceptación de estos términos. No pueden desactivarse desde el sitio.",
          "De la tienda: mantienen tu carrito y el proceso de compra.",
          "De medición: nos ayudan a entender cómo se usa el sitio, de forma agregada. Solo se activan si las aceptas.",
        ],
      },
      {
        heading: "Cómo controlarlas",
        body: [
          "Puedes aceptar o rechazar las cookies opcionales desde el aviso que aparece al entrar al sitio, y cambiar tu elección en cualquier momento con el enlace “Preferencias de cookies” del pie de página.",
          "También puedes borrarlas o bloquearlas desde la configuración de tu navegador; algunas funciones podrían dejar de funcionar.",
        ],
      },
    ],
  },
];
