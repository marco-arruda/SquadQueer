export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { query, location, num_pages = 1 } = body

    if (!query || !location) {
      return Response.json({ error: "Query e location são obrigatórios" }, { status: 400 })
    }

    const response = await fetch("https://buscador-de-vagas-linkd.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        location,
        num_pages,
      }),
    })

    if (!response.ok) {
      throw new Error("Erro ao buscar vagas")
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error("[v0] Erro na busca de vagas:", error)
    return Response.json({ error: "Erro ao processar a busca" }, { status: 500 })
  }
}
