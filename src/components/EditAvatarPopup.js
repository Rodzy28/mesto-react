import PopupWithForm from "./PopupWithForm";
import { useEffect, useRef } from "react";

export default function EditAvatarPopup(props) {

  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [props.isOpen])

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      ariaLabel="Закрыть окно редактирования аватарки"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input id="avatar-input" ref={avatarRef} className="popup__input popup__input_type_avatar" type="url" name="avatar"
        placeholder="Ссылка на аватар" required />
      <span className="popup__input-error avatar-input-error"></span>
    </PopupWithForm>
  )
}