interface EditorProps {
  isSaveLoading: boolean;
  onClose: any;
  title: string;
  setTitle: any;
  text: string;
  setText: any;
  onSave: any;
  onDelete?: any;
  isDeleteLoading?: boolean;
  important: boolean;
  setImportant: any;
}

export default EditorProps;
