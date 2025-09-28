import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonModule,
  GridModule,
  TilesModule,
  ListModule
} from 'carbon-components-angular';

interface Account {
  id: string;
  name: string;
  accountNumber: string;
  fullAccountNumber: string;
  balance: number;
  type: string;
}

interface AccountCategory {
  name: string;
  icon: string;
  accounts: Account[];
}

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    GridModule,
    TilesModule,
    ListModule
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  showAccountNumbers = false;

  accountCategories: AccountCategory[] = [
    {
      name: 'Bank',
      icon: '🏦',
      accounts: [
        {
          id: '1',
          name: 'Checking Account',
          accountNumber: '****1234',
          fullAccountNumber: '4532 1234 5678 1234',
          balance: 2428.18,
          type: 'checking'
        },
        {
          id: '2',
          name: 'Savings Account',
          accountNumber: '****5678',
          fullAccountNumber: '4532 1234 5678 5678',
          balance: 12850.45,
          type: 'savings'
        }
      ]
    },
    {
      name: 'Credit Card',
      icon: '💳',
      accounts: [
        {
          id: '3',
          name: 'Visa Credit Card',
          accountNumber: '****9012',
          fullAccountNumber: '4532 1234 5678 9012',
          balance: -1234.56,
          type: 'credit'
        },
        {
          id: '4',
          name: 'MasterCard',
          accountNumber: '****3456',
          fullAccountNumber: '5432 1098 7654 3456',
          balance: -567.89,
          type: 'credit'
        }
      ]
    },
    {
      name: 'Consumer Loan',
      icon: '🏠',
      accounts: [
        {
          id: '5',
          name: 'Personal Loan',
          accountNumber: '****7890',
          fullAccountNumber: 'PL-2024-001-7890',
          balance: -15000.00,
          type: 'loan'
        },
        {
          id: '6',
          name: 'Auto Loan',
          accountNumber: '****2468',
          fullAccountNumber: 'AL-2023-456-2468',
          balance: -22500.00,
          type: 'loan'
        }
      ]
    },
    {
      name: 'Cash',
      icon: '💵',
      accounts: [
        {
          id: '7',
          name: 'Wallet Cash',
          accountNumber: 'N/A',
          fullAccountNumber: 'N/A',
          balance: 150.00,
          type: 'cash'
        },
        {
          id: '8',
          name: 'Emergency Fund',
          accountNumber: 'N/A',
          fullAccountNumber: 'N/A',
          balance: 500.00,
          type: 'cash'
        }
      ]
    }
  ];

  getTotalAssets(): number {
    return this.accountCategories
      .flatMap(category => category.accounts)
      .filter(account => account.balance > 0)
      .reduce((total, account) => total + account.balance, 0);
  }

  getTotalLiabilities(): number {
    return this.accountCategories
      .flatMap(category => category.accounts)
      .filter(account => account.balance < 0)
      .reduce((total, account) => total + account.balance, 0);
  }

  getNetWorth(): number {
    return this.getTotalAssets() + this.getTotalLiabilities();
  }

  toggleAccountNumbers(): void {
    this.showAccountNumbers = !this.showAccountNumbers;
  }

  getDisplayAccountNumber(accountNumber: string, fullAccountNumber: string): string {
    if (this.showAccountNumbers) {
      return fullAccountNumber;
    }

    return accountNumber;
  }
}
