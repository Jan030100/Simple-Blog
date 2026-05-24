import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ children, onClose, title }) => {
  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative">
        {title && (
          <div className="border-b px-6 py-4 sticky top-0 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
        )}
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
