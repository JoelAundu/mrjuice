import React, { useState } from "react";
import Modal from "../modal/Modal"; // Assuming Modal component exists
import Input from "../inputs/Input"; // <-- import your reusable Input
import Button from "../buttons/Button";
import "./WarningBanner.css";

interface WarningBannerProps {
  message: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
  contentClassName?: string;
  icon?: React.ReactNode; // <-- new: allow an icon to be passed
  iconClassName?: string; // (single icon class now)
  messageClassName?: string;
  buttonClassName?: string;
  buttonTextClassName?: string;
  modalContentClassName?: string;
  modalTitleClassName?: string;
  modalDescriptionClassName?: string;
  modalFormClassName?: string;
  modalInputClassName?: string;
  modalInputCvvClassName?: string;
  modalInputGroupClassName?: string;
  modalSubmitClassName?: string;
}

const WarningBanner: React.FC<WarningBannerProps> = ({
  message,
  buttonText,
  onButtonClick,
  className = "",
  contentClassName = "",
  icon = "⚠️", // <-- default icon is ⚠️
  iconClassName = "",
  messageClassName = "",
  buttonClassName = "",
  buttonTextClassName = "",
  modalContentClassName = "",
  modalTitleClassName = "",
  modalDescriptionClassName = "",
  modalFormClassName = "",
  modalInputClassName = "",
  modalInputCvvClassName = "",
  modalInputGroupClassName = "",
  modalSubmitClassName = "",
}) => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPaymentModalOpen(true);
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <>
      <div className={`warning-banner ${className}`}>
        <div className={`warning-banner__content ${contentClassName}`}>
          <div className={`warning-banner__icon ${iconClassName}`}>{icon}</div>
          <div className={`warning-banner__message ${messageClassName}`}>
            {message}
          </div>
        </div>

        <Button variant="slate" size="sm" onClick={handleButtonClick}>
          {buttonText}
        </Button>
      </div>

      {/* Payment Modal */}
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Make a Payment"
      >
        <div
          className={`warning-banner__modal-content ${modalContentClassName}`}
        >
          <p
            className={`warning-banner__modal-description ${modalDescriptionClassName}`}
          >
            This is a fake payment modal. Enter your payment details below.
          </p>
          <div className={`warning-banner__modal-form ${modalFormClassName}`}>
            <input
              type="text"
              placeholder="Card Number"
              className={`warning-banner__modal-input ${modalInputClassName}`}
            />
            <div
              className={`warning-banner__modal-input-group ${modalInputGroupClassName}`}
            >
              <input
                type="text"
                placeholder="Expiry Date (MM/YY)"
                className={`warning-banner__modal-input ${modalInputClassName} flex-1`}
              />
              <input
                type="text"
                placeholder="CVV"
                className={`warning-banner__modal-input warning-banner__modal-input--cvv ${modalInputClassName} ${modalInputCvvClassName}`}
              />
            </div>
            <Button
              variant="slate"
              size="md"
              onClick={() => setIsPaymentModalOpen(false)}
            >
              Submit Payment (Fake)
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default WarningBanner;
