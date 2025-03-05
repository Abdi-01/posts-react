import * as React from "react";
import { Editor } from "@tinymce/tinymce-react";

interface IRTEFormProps {}

const RTEForm = React.forwardRef<Editor | null, IRTEFormProps>(
  (_props, ref) => {
    return (
      <Editor
        onInit={(_evt: any, editor: any) => {
          if (ref && typeof ref === "object") {
            ref.current = editor;
          }
        }}
        apiKey={process.env.NEXT_PUBLIC_RTE_TINYMCE_KEY}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "image link media table | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    );
  }
);

export default RTEForm;
