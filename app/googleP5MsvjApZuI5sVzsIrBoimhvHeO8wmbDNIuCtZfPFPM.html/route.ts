export function GET() {
  return new Response(
    "google-site-verification: googleP5MsvjApZuI5sVzsIrBoimhvHeO8wmbDNIuCtZfPFPM.html",
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}
