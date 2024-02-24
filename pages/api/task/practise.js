export default function handler(req, res) {
  // Assuming you have some data to return
  const data = {
    message: "This is a simple GET API route in Next.js",
  }

  // Send a JSON response
  res.status(200).json(data)
}
