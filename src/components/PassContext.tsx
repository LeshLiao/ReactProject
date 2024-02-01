import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for your context data
interface PaymentContextProps {
  paymentValue: string; // Change to the appropriate string type if needed
  setPayment: (value: string) => void; // Change to the appropriate string type if needed
}

const PaymentContext = createContext<PaymentContextProps | undefined>(undefined);

interface PaymentProviderProps {
  children: ReactNode;
}

export const PaymentProvider: React.FC<PaymentProviderProps> = ({ children }) => {
  const [paymentValue, setPaymentValue] = useState<string | null>(null); // Change to the appropriate string type if needed

  const setPayment = (value: string) => {
    setPaymentValue(value);
  };

  const contextValue: PaymentContextProps = {
    paymentValue: paymentValue || '', // Set a default value if necessary
    setPayment,
  };

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
