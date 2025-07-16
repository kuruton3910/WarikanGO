export type Member = {
  id: string;
  name: string;
};

export type Expense = {
  id: string;
  payerId: string;
  comment: string;
  amount: number;
};

export type Project = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  members: Member[];
  expenses: Expense[];
};
