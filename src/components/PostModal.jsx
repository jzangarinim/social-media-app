import TweetForm from "./TweetForm";
import PropTypes from "prop-types";

export default function PostModal({ visible, onClose, onSubmit }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 flex justify-center items-center">
      <div className="rounded w-[40%] dark:bg-violet-400">
        <div className="rounded flex justify-end border-x-2 border-t border-violet-600">
          <button
            className="text-center pr-1 w-[10%] flex justify-end"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <TweetForm onSubmit={onSubmit} />
      </div>
    </div>
  );
}

PostModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
