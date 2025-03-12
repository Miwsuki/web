// @ts-check
import { defineConfig } from "astro/config";
import products from "./src/products.json"; // Importa el JSON de productos

// Función para validar los productos antes de iniciar Astro
function validateProducts() {
  const invalidProducts = products.filter((product) => {
    const price = product.price;
    return price === undefined || isNaN(Number(product.price)) || Number(price) <= 0;
  });

  if (invalidProducts.length > 0) {
    console.error("❌ Productos inválidos detectados:", invalidProducts);
    throw new Error("❌ Error: Algunos productos tienen precios inválidos. Revisa el JSON.");
  }
}

validateProducts(); // Ejecuta la validación antes de exportar la config

// Exporta la configuración de Astro
export default defineConfig({
  site: 'https://miwsuki.com',
  
});
