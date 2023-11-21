import { get_bmi_category,calculate_bmi } from "../service_deps";

const port = 8080;

const handler = async (request: Request): Promise<Response> => {
    if (request.method === "POST") {
       const obj=await request.json();
    const body = `Your bmi is:\n\n${
        calculate_bmi(obj.height,obj.weight,obj.unit==="metric").toFixed(2) ?? "Invalid Input"
    }`;

    return new Response(body, { status: 200 });
}
  return new Response(null,{status:404})
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port }, handler);