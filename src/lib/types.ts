export interface MemberDataIF {
  id: number;
  name: string;
  amount: number;
  discounts: boolean[];
  date?: Date;
  dependants?: number;
  dependantsWithDiscount?: number;
}
