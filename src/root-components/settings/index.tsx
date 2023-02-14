import css from "./index.module.scss";
import cn from "classnames";
import { useToggle } from "@/hooks";
import { Modal } from "@/modules/modal";
import { ThemeList } from "@/containers/theme-list";

function Settings() {
  const [open, _togglePopup] = useToggle(false);

  const togglePopup = () => {
    if (open) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }

    _togglePopup();
  };

  return (
    <>
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
        <ThemeList />
      </Modal>
    </>
  );
}

export default Settings;
