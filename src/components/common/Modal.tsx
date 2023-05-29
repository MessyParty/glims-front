import { Dialog, DialogContent, DialogProps, IconButton } from "@mui/material";
import useModal from "@/hooks/useModal";
import styled from "@emotion/styled";
import { CloseOutlined } from "@mui/icons-material";

interface ModalProps extends DialogProps {
  modalKey: string;
  modalContent: React.ReactNode;
}

const Modal = ({ modalKey, modalContent }: ModalProps) => {
  const { isOpen, closeModal } = useModal(modalKey);

  return (
    <GlimsDialog open={isOpen} onClose={closeModal}>
      <GlimsDialogContent>
        <CloseIconButton onClick={closeModal}>
          <CloseOutlined />
        </CloseIconButton>
        {modalContent}
      </GlimsDialogContent>
    </GlimsDialog>
  );
};

export default Modal;

const GlimsDialog = styled(Dialog)`
  & .MuiPaper-root {
    border-radius: 0;
  }
`;

const GlimsDialogContent = styled(DialogContent)`
  border: solid 2px;
`;

const CloseIconButton = styled(IconButton)`
  float: right;
`;
