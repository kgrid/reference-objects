const listener = Deno.listen({ port: 8000 });
console.log(`Server is running on http://localhost:8000`);

for await (const conn of listener) {
  handleNewConnection(conn);
}

async function handleNewConnection(conn: Deno.Conn) {
  for await (const req of Deno.serveHttp(conn)) {
    await handleRequest(req.request, req.respondWith);
  }
}

async function handleRequest(req: Request, resp: any) {
  if (req.method === "POST") {
    let body = await req.json();
    console.log(body);
    resp(new Response(null));
  } else {
      console.log(req.method)
    resp(new Response(null));
  }
}
