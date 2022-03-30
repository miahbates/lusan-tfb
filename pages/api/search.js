export default async function handler(req, res) {
  console.log("changed to all seeds");
  res.status(200).redirect("/all-seeds");
}
