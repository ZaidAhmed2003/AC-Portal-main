export interface EstimateDto {
  createdBy: string;
  customerNote: string;
  dateCreated: Date;
  dateEstimate: Date;
  dateStatusChange: Date;
  dateUploaded: Date;
  internalNote: string;
  isArchived: boolean;
  location: string;
  markup: number;
  number: string;
  related: string;
  salesRep: string;
  salesRepImage: string;
  signatureStatus: string;
  status: string;
  subTotal: number;
  syncedToQB: boolean;
  tax: number;
  total: number;
  lineItems: LineItemDto[];
}

export interface LineItemDto {
  itemName: string;
  description: string;
  quantity: number;
  markup: number;
  unitPrice: number;
  totalPrice: number;
}
