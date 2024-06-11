import React, { FC, useState, HTMLAttributes } from "react";
import IconifyIcon from "../icon";

export interface ModalDialogProps extends HTMLAttributes<HTMLDivElement> {
  variant: "success" | "danger" | "warning" | "info";
  modalButton: string;
  title: string;
  text: string;
}

export const ModalDialog: React.FC<ModalDialogProps> = ({
  variant,
  modalButton,
  title,
  text,
  children,
}) => {
  const buttonColor = {
    success: "bg-[#00de2c]",
    danger: "bg-[#E90229]",
    warning: "bg-[#FFAE02]",
  };

  const icon = {
    success : "icon-park-outline:check",
    danger: "material-symbols:dangerous-outline",
    warning: "solar:danger-circle-linear"
  }
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button
        className="bg-[#005EFF] p-3 rounded-md text-white font-semibold hover:bg-primary-400"
        onClick={() => toggleModal()}
      >
        {modalButton}
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75">
          <div className="relative flex flex-col justify-between shadow-md rounded- p-4 bg-white rounded-md max-w-[800px] max-h-[180px]">
            <div className="flex justify-items-start items-center gap-2">
              <div
                className={`w-[40px] h-[40px] rounded-full flex justify-center items-center ${variant === "success" ? buttonColor.success : variant === "danger" ? buttonColor.danger : variant == "warning" ? buttonColor.warning : "bg-[#005EFF]"} text-white`}
              >
                <IconifyIcon icon={`${variant === "success" ? icon.success : variant === "danger" ? icon.danger : variant === 'warning' ? icon.warning : "mynaui:question"}`} fontSize={20} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-semibold">{title}</h4>
                <p className="text-[14px] text-neutral">{text}</p>
              </div>
            </div>
            <div>
              <div className="border border-dashed border-[#9F67E7] w-full h-10 bg-[#E6CCFFCC] rounded-md flex items-center p-4">
                {children}
              </div>
              <div className="w-full flex justify-end gap-4 mt-4">
                <button className="border border-primary text-primary font-medium bg-[#FEFEFE] rounded-md p-2 w-fit">
                  Secondary
                </button>
                <button
                  className={`border border-1 p-2 ${variant === "success" ? "bg-[#005EFF]" : variant === "danger" ? buttonColor.danger : variant === "warning" ? buttonColor.warning : "bg-[#005EFF]"} text-white font-medium rounded-md shadow-md`}
                >
                  Primary action
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
