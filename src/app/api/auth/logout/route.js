export async function POST(request) {
    // const body = await request.json();

    return Response.json({ message: 'logout:', data: {state:false} });
}