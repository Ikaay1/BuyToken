export interface ElectricityDetailsInterface {
  _id: string;
  merchantId: string;
  name: string;
  image: string;
}

export interface CustomerDetailsInterface {
  FirstName: string;
  LastName: string;
  CustomerName: string;
  CustomerAddress: string;
  meterNumber: string;
  meterType: string;
  amount: string;
}

export interface TransactionInterface {
  _id: string;
  description: string;
  amount: number;
  refNumber: string;
  billerType: string;
  createdAt: string;
  status: string;
  transactionType: string;
}

export interface PlannedInterface {
  electricity: number;
  data: number;
  airtime: number;
  cableTv: number;
}

export interface ExpensesInterface {
  electricity: number;
  data: number;
  airtime: number;
  cable: number;
}
