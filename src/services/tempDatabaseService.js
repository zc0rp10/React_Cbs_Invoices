export let invoicesDB = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    invNbr: 1,
    clientName: "Company A",
    totalAmount: 100,
    status: true,
    date: 1586196647503,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    invNbr: 2,
    clientName: "Company B",
    totalAmount: 200,
    status: false,
    date: 1586196705016,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    invNbr: 3,
    clientName: "Company C",
    totalAmount: 50,
    status: true,
    date: 1586196647403,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    invNbr: 4,
    clientName: "Company D",
    totalAmount: 250,
    status: false,
    date: 1581196705016,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    invNbr: 5,
    clientName: "Company A",
    totalAmount: 80,
    status: true,
    date: 1586196647503,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    invNbr: 6,
    clientName: "Company B",
    totalAmount: 220,
    status: false,
    date: 1586196705016,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    invNbr: 7,
    clientName: "Company C",
    totalAmount: 90,
    status: true,
    date: 1586196647403,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    invNbr: 8,
    clientName: "Company D",
    totalAmount: 1300,
    status: false,
    date: 1581196705016,
  },
];

export function getInvoices() {
  return invoicesDB;
}
