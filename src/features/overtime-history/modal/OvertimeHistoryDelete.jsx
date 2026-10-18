import Button from "@/components/Button";
import Modal from "@/components/Modal";

const OvertimeHistoryDelete = ({ onClose = () => {}, onDelete = () => {} }) => {
  return (
    <Modal>
      Apakah data ini mau dihapus
      <div className="flex gap-3">
        <Button onClick={onClose} variant="primary">
          Batal
        </Button>
        <Button onClick={onDelete} variant="secondary">
          Hapus
        </Button>
      </div>
    </Modal>
  );
};

export default OvertimeHistoryDelete;
