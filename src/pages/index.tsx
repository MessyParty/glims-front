import Modal from "@/components/common/Modal";
import { MODAL_KEYS } from "@/constants/modalKeys";
import useModal from "@/hooks/useModal";
import { Button } from "@mui/material";
import LoginRequiredModalContent from "@/components/view/main/LoginRequiredModalContent";
import LoginModalContent from "@/components/view/main/LoginModalContent";

export default function Home() {
  const loginModal = useModal(MODAL_KEYS.login);
  const loginRequiredModal = useModal(MODAL_KEYS.loginRequired);

  return (
    <>
      <Button variant="text" onClick={loginModal.openModal}>
        login 모달
      </Button>
      <Button variant="text" onClick={loginRequiredModal.openModal}>
        login required 모달
      </Button>
      <Modal
        modalKey={MODAL_KEYS.login}
        modalContent={<LoginModalContent />}
        open={loginModal.isOpen}
      />
      <Modal
        modalKey={MODAL_KEYS.loginRequired}
        modalContent={<LoginRequiredModalContent />}
        open={loginRequiredModal.isOpen}
      />
    </>
  );
}
