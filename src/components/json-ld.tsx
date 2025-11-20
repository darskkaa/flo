export function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "FloPro Pools",
        "image": "https://flopropools.com/logo.png",
        "telephone": "(941) 555-0123",
        "email": "service@flopropools.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Harbor Blvd",
            "addressLocality": "Port Charlotte",
            "addressRegion": "FL",
            "postalCode": "33952",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.9762,
            "longitude": -82.0905
        },
        "url": "https://flopropools.com",
        "priceRange": "$$",
        "areaServed": [
            {
                "@type": "City",
                "name": "Port Charlotte"
            },
            {
                "@type": "City",
                "name": "Punta Gorda"
            },
            {
                "@type": "City",
                "name": "North Port"
            },
            {
                "@type": "City",
                "name": "Englewood"
            },
            {
                "@type": "Place",
                "name": "Rotonda West"
            }
        ],
        "description": "Marine-Grade Asset Management for pools in Port Charlotte, Punta Gorda, and North Port. Specializing in salt corrosion defense and pet-safe service."
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
