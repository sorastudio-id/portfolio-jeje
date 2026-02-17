export function GET() {
  return new Response("google-site-verification: google1f852cc356e065f5.html", {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
