interface EditorProps {
  isSaveLoading: boolean;
  onClose: Function;
  title: string;
  setTitle: Function;
  text: string;
  setText: Function;
  onSave: Function;
  onDelete?: Function;
  isDeleteLoading?: boolean;
  important: boolean;
  setImportant: Function;
}

export default EditorProps;
