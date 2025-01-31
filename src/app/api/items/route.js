export async function GET() {
  const data = {
    message: "successful!",
    error: false,
    status: 200,
  };

  return Response.json({ data });
}

export async function POST(req) {
  const postData = await req.json();

  return Response.json({ postData });
}
