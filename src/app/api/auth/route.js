export async function GET() {
    return Response.json({ message: 'Hello from API!' });
}

export async function POST(request) {
    const body = await request.json();
    const { username, password } = body;
    console.log("body", body, username, password)
    return Response.json({ message: 'You sent:', data: {...body, state:true} });
}
