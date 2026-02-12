export default async function handler(req, res) {
    return res.status(403).json({
        message: "Manual signup is disabled. Use Google OAuth only.",
        data: { state: false }
    })
}
