import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

export interface MobileMenuContextType {
  isOpenMenu: boolean;
  setIsOpenMenu: Dispatch<SetStateAction<boolean>>;
}

interface MobileMenuProviderProps {
  children: React.ReactNode;
}

export const MobileMenuContext = createContext<MobileMenuContextType | null>(
  null
);

export const MobileMenuProvider: React.FC<MobileMenuProviderProps> = ({
  children,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <MobileMenuContext.Provider value={{ isOpenMenu, setIsOpenMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
