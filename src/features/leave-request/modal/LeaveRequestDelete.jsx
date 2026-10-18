import Button from "@/components/Button";
import Modal from "@/components/Modal";

const LeaveRequestDelete = ({ onCloce = () => {}, onDelete = () => {} }) => {
  return (
    <Modal>
      Apakah data ini mau dihapus
      <div className="flex gap-3">
        <Button onClick={onCloce} variant="primary">
          Batal
        </Button>
        <Button onClick={onDelete} variant="secondary">
          Hapus
        </Button>
      </div>
    </Modal>
  );
};

export default LeaveRequestDelete;
