export const clients = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Company A" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Company B" },
  { _id: "5b21ca3eeb7f6fbccd471815", name: "Company C" },
  { _id: "5b21ca3eeb7f6fbccd471832", name: "Company D" },
];

export function getClients() {
  return clients.filter(client => client);
}
