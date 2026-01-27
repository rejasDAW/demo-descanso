import { MetadataRoute } from 'next';
import { PRODUCTS } from './data/products';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://demo-mobiliario.vercel.app'; // Placeholder domain

    // Static routes
    const routes = [
        '',
        '/catalogo/sofas',
        '/catalogo/sillones',
        '/catalogo/camas',
        '/colecciones',
        '/tienda',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic product routes
    const productRoutes = PRODUCTS.map((product) => ({
        url: `${baseUrl}/producto/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [...routes, ...productRoutes];
}
