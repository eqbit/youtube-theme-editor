import styles from "./styles.css";
import css from "./index.module.scss";
import cn from "classnames";
import { useToggle } from "./hooks";
import { Modal } from "@mui/material";

function App() {
  const [open, _toggle] = useToggle(false);

  const togglePopup = () => {
    if (open) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }

    _toggle();
  };

  return (
    <>
      <style>{styles}</style>
      <div>
        <button
          type="button"
          onClick={togglePopup}
          className={cn(css.menuButton, {
            [css.menuButtonActive]: open,
          })}
        >
          Theme settings
        </button>
      </div>

      <Modal open={open} onClose={togglePopup}>
        <div>Some content</div>
      </Modal>
    </>
  );
}

export default App;
