import { XIcon } from "@heroicons/react/outline";
import React, { ReactNode } from "react";
import Card from "./Card";

interface ModalProps {
  isOpen?: boolean;
  title: string;
  handleCloseModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  handleCloseModal,
  children,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen flex items-center justify-center z-50 bg-black/40 dark:bg-white/40">
          <Card className=" w-[80%] py-3 lg:w-[60%]    rounded shadow !p-0">
            <>
              <div className="bg-primary p-3 w-full rounded-t flex justify-between items-center text-white">
                <div>{title}</div>
                <button onClick={handleCloseModal}>
                  <XIcon className="w-5 h-5 text-white" />
                </button>
              </div>
              <div className="p-3 pb-5 max-h-[80vh] !scrollbar-custom overflow-y-auto">
                {children}
              </div>
            </>
          </Card>
        </div>
      )}
    </>
  );
};
export default Modal;
