import React, { useEffect, useLayoutEffect, useState } from "react";
import "../component-articleEditor/component-articleEditor.scss";
import { Editor } from "@tinymce/tinymce-react";
import { Button, Input, Space } from "antd";
import { scrollToTop } from "../../../common/common";

// Initialize the app
import prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

const ArticlesList: React.FC = () => {
  const INIT_VALUE = `<p></p>`;
  const [value, setValue] = useState(INIT_VALUE);
  const [editorShow, seteditorShow] = useState(false);
  useEffect(() => {}, []);
  const handleEditorChange = (e) => {
    setValue(e.target.getContent() ? e.target.getContent() : INIT_VALUE);
  };
  useEffect(() => {
    prism.highlightAll();
  }, [value]);
  function handleClickSave() {}

  const code = `const handleEditorChange = (e) => {
    setValue(e.target.getContent() ? e.target.getContent() : INIT_VALUE);
  };`;
  const readerOptions = {
    menubar: false,
    statusbar: false,
    language: "zh_CN",
    plugins: "codesample",
    toolbar: false,
    min_height: 400,
  };

  const editorOptions = {
    menubar: false,
    min_height: 230,
    max_height: 230,
    statusbar: false,
    language: "zh_CN",
    plugins:
      "preview searchreplace autolink directionality visualblocks visualchars fullscreen image link template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount imagetools textpattern help emoticons autosave autoresize",
    toolbar:
      " undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent | styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat | table image media charmap emoticons hr pagebreak insertdatetime print preview | fullscreen | bdmap indent2em lineheight formatpainter axupimgs | codesample code",
    fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
    font_formats:
      "微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",
    init_instance_callback() {
      //编辑器加载完成回调
    },
    setup(editor: {
      on: (arg0: string, arg1: { (e: any): void; (e: any): void }) => void;
    }) {
      editor.on("init", (e) => {
        seteditorShow(true);
      });
    },
  };
  return (
    <div className="view-container">
      <div>
        <pre className="language-javascript">
          <code>{code}</code>
        </pre>
      </div>

      <div className="view-edit-container">
        <div className="view-editor">
          <div style={{ display: editorShow ? "block" : "none" }}>
            <h1 style={{ fontWeight: "bold" }}>撰写新文章</h1>
            <div className="view-header-container">
              <span className="view-header-text">文章标题:</span>
              <Input className="view-header-input"></Input>
              <Button onClick={handleClickSave}>确定</Button>
            </div>
          </div>
          <Button
            type="primary"
            style={{ display: editorShow ? "block" : "none" }}
            onClick={scrollToTop}
          ></Button>
        </div>
        <div className="view-main">
          <Editor
            apiKey="cxvj1cgf4r46llfs065c721epo0n3d6ejvxwa1ah0ej5m3na"
            initialValue={INIT_VALUE}
            tagName="div"
            init={editorOptions}
            onChange={handleEditorChange}
          ></Editor>
          {/* <Editor
            apiKey="cxvj1cgf4r46llfs065c721epo0n3d6ejvxwa1ah0ej5m3na"
            initialValue={INIT_VALUE}
            disabled
            tagName="div"
            value={value}
            init={readerOptions}
          ></Editor> */}

          <div dangerouslySetInnerHTML={{ __html: value }}></div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;
