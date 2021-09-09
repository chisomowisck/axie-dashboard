import Vue from "vue";
import VueRouter from "vue-router";
import About from "../views/About";
import AddBankAcc from "../views/AddBankAcc";
import AddDebitCard from "../views/AddDebitCard";
import Condition from "../views/Condition";
import Accounts from "../views/dashboard/Accounts";
import Exchange from "../views/dashboard/Exchange";
// Landing
import Index from "../views/dashboard/Index";
import Account from "../views/dashboard/settings/Account";
import SettingsPreferences from "../views/dashboard/settings/Preferences";
import Security from "../views/dashboard/settings/Security";
import Settings from "../views/dashboard/settings/Settings";
import Demo from "../views/Demo";
import History from "../views/History";
import Landing from "../views/Landing.vue";
import Lock from "../views/Lock";
import Otp1 from "../views/Otp1";
import Otp2 from "../views/Otp2";
import Policy from "../views/Policy";
import Reset from "../views/Reset";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import VerifyStep1 from "../views/VerifyStep1";
import VerifyStep2 from "../views/VerifyStep2";
import VerifyStep3 from "../views/VerifyStep3";
import VerifyStep4 from "../views/VerifyStep4";
import VerifyStep5 from "../views/VerifyStep5";
import VerifyStep6 from "../views/VerifyStep6";
import Transactions from "../views/Transactions/Index";

import Sale from "../views/Sale/Index";
import AirtelMoneySale from "../views/Sale/AirtelMoney";
import TnmMpambaSale from "../views/Sale/Mpamba";
import ThanksSale from "../views/Sale/Thanks";
import BankSale from "../views/Sale/Bank";

import Buy from "../views/Buy/Index";
import BankBuy from "../views/Buy/Bank";
import AirtelMoneyBuy from "../views/Buy/AirtelMoney";
import TnmMpambaBuy from "../views/Buy/Mpamba";
import ThanksBuy from "../views/Buy/Thanks";
import BuyAddress from "../views/Buy/CryptoAddress";
import PaymentMethodBuy from "../views/Buy/PaymentMethod";  
import SaleAddress from "../views/Sale/CryptoAddress";
import PaymentMethodSale from "../views/Buy/PaymentMethod";  

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: Transactions,
    meta: {
      requiresAuth: true,
  }
  },

  {
    path: "/buy",
    name: "Buy",
    component: Buy,
    meta: {
      requiresAuth: true,
  }
  },

  {
    path: "/buy/address",
    name: "BuyAddress",
    component: BuyAddress,
    meta: {
      requiresAuth: true,
  }
  },

  
  {
    path: "/sale/address",
    name: "SaleAddress",
    component: SaleAddress,
    meta: {
      requiresAuth: true,
  }
  },

  {
    path: "/buy/payment-method",
    name: "PaymentMethodBuy",
    component: PaymentMethodBuy,
    meta: {
      requiresAuth: true,
  }
  },

  {
    path: "/sale/payment-method",
    name: "PaymentMethodSale",
    component: PaymentMethodSale,
    meta: {
      requiresAuth: true,
  }
  },

  {
    path: "/buy/thank-you",
    name: "ThanksBuy",
    component: ThanksBuy,
    meta: {
      requiresAuth: true,
  }
  },

  {
    path: "/buy/bank",
    name: "BankBuy",
    component: BankBuy,
        meta: {
            requiresAuth: true,
        }
  },

  {
    path: "/buy/airtel-money",
    name: "AirtelMoneyBuy",
    component: AirtelMoneyBuy,
        meta: {
            requiresAuth: true,
        }
  },

  {
    path: "/buy/tnm-mpamba",
    name: "TnmMpambaBuy",
    component: TnmMpambaBuy,
        meta: {
            requiresAuth: true,
        }
  },
  

  {
    path: "/sale",
    name: "Sale",
    component: Sale,
        meta: {
            requiresAuth: true,
        }
  },

  {
    path: "/sale/thank-you",
    name: "ThanksSale",
    component: ThanksSale,
        meta: {
            requiresAuth: true,
        }
  },
  {
    path: "/sale/airtel-money",
    name: "AirtelMoneySale",
    component: AirtelMoneySale,
        meta: {
            requiresAuth: true,
        }
  },
  {
    path: "/sale/tnm-mpamba",
    name: "TnmMpambaSale",
    component: TnmMpambaSale,
        meta: {
            requiresAuth: true,
        }
  },
  {
    path: "/sale/bank",
    name: "BankSale",
    component: BankSale,
        meta: {
            requiresAuth: true,
        }
  },
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/index",
    name: "Index",
    component: Index,
     meta: {
            requiresAuth: true,
        }
  },
  {
    path: "/buy-sell",
    name: "Exchange",
    component: Exchange,
  },
  {
    path: "/accounts",
    name: "Accounts",
    component: Accounts,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/lock",
    name: "Lock",
    component: Lock,
  },
  {
    path: "/add-bank-acc",
    name: "AddBankAcc",
    component: AddBankAcc,
  },
  {
    path: "/add-debit-card",
    name: "AddDebitCard",
    component: AddDebitCard,
  },
  {
    path: "/verify-step-1",
    name: "VerifyStep1",
    component: VerifyStep1,
  },
  {
    path: "/verify-step-2",
    name: "VerifyStep2",
    component: VerifyStep2,
  },
  {
    path: "/verify-step-3",
    name: "VerifyStep3",
    component: VerifyStep3,
  },
  {
    path: "/verify-step-4",
    name: "VerifyStep4",
    component: VerifyStep4,
  },
  {
    path: "/verify-step-5",
    name: "VerifyStep5",
    component: VerifyStep5,
  },
  {
    path: "/verify-step-6",
    name: "VerifyStep6",
    component: VerifyStep6,
  },
  {
    path: "/otp-1",
    name: "Otp1",
    component: Otp1,
  },
  {
    path: "/otp-2",
    name: "Otp2",
    component: Otp2,
  },
  {
    path: "/settings-preferences",
    name: "SettingsPreferences",
    component: SettingsPreferences,
  },
  {
    path: "/settings-account",
    name: "Account",
    component: Account,
  },
  {
    path: "/settings-security",
    name: "Security",
    component: Security,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/privacy-policy",
    name: "Policy",
    component: Policy,
  },
  {
    path: "/term-condition",
    name: "Condition",
    component: Condition,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
