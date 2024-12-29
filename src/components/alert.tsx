import Alert from '@mui/material/Alert';
import { useState } from 'react';

export default function AlertComponent({
  message,
  severity,
  onClose,
}: {
  message: string;
  severity: 'success' | 'error';
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = useState(true);

  const handClose = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div>
      {isOpen && (
        <Alert severity={severity} onClose={handClose} sx={{ py: 0 }}>
          {message}
        </Alert>
      )}
    </div>
  );
}
