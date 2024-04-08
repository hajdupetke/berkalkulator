export interface MemberDataIF {
  name: string;
  amount: number;
  discounts: boolean[];
  date?: Date;
  dependants?: number;
  dependantsWithDiscount?: number;
}
