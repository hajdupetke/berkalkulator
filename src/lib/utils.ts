import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MemberDataIF } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const diff_years = (dt2: Date, dt1: Date) => {
  let diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  return Math.abs(Math.round(diff / 365.25));
};

export function calculateNetAmount(data: MemberDataIF) {
  let tax = data['amount'] * 0.185;
  let bonus = 0;
  //SZJA mentesség
  if (data['discounts'][0]) {
    if (data['amount'] > 499592) {
      tax += (data['amount'] - 499592) * 0.15;
    }
  } else {
    tax += data['amount'] * 0.15;
  }

  //Friss házasok kedvezménye
  if (
    data['discounts'][1] &&
    data['date'] &&
    diff_years(data['date'], new Date()) <= 2
  ) {
    bonus += 5000;
  }

  //Személyi adókedvezmény
  if (data['discounts'][2]) tax = tax > 77300 ? tax - 77300 : 0;

  //Családi adókedvezmény
  if (data['discounts'][3]) {
    const realDependants = data['dependants'] < 3 ? data['dependants'] : 3;
    if (data['dependantsWithDiscount'] === 1) tax -= realDependants * 10000;
    if (data['dependantsWithDiscount'] === 2) tax -= realDependants * 20000;
    if (data['dependantsWithDiscount'] === 3) tax -= realDependants * 33000;
  }

  if (tax < 0) tax = 0;

  let net = data['amount'] - tax;
  net += bonus;
  return net;
}
