import React, { useState } from "react";
import "../component-articlesList/component-articlesList.scss";
import { Editor } from "@tinymce/tinymce-react";
// Render the Slate context.

const ArticlesList: React.FC = () => {
  const [value, setValue] = useState("<p></p>");
  const handleEditorChange = (e) => {
    setValue(e.target.getContent());
  };
  return (
    <div className="view-container">
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
      <div className="view-edit-container">
        <Editor
          initialValue="<p></p>"
          init={{
            height: 280,
            menubar: false,
            statusbar: false,
            apikey: "cxvj1cgf4r46llfs065c721epo0n3d6ejvxwa1ah0ej5m3na",
            language: "zh_CN",
            font_formats:
              "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
            plugins: [
              "advlist autolink lists link image code",
              "charmap print preview anchor help",
              "searchreplace visualblocks ",
              "insertdatetime media table paste wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | help",
          }}
          onChange={handleEditorChange}
        />
      </div>
    </div>
  );
};

export default ArticlesList;
