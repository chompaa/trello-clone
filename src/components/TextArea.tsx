import { Ref } from "preact";
import { TargetedEvent, forwardRef, useState } from "preact/compat";

const TextArea = forwardRef(function TextArea(
  {
    children,
    styles,
    placeholder,
    minRows,
    maxRows,
    maxLength,
  }: {
    children?: string;
    styles?: string;
    placeholder?: string;
    minRows: number;
    maxRows: number;
    maxLength: number;
  },
  ref: Ref<HTMLTextAreaElement>
) {
  const [rows, setRows] = useState<number>(minRows);

  const handleChange = (e: TargetedEvent<HTMLTextAreaElement>) => {
    const textArea = e.target as HTMLTextAreaElement;

    const { lineHeight } = window.getComputedStyle(textArea);

    const previousRows = textArea.rows;
    textArea.rows = minRows;

    const currentRows = ~~(textArea.scrollHeight / parseFloat(lineHeight));

    if (currentRows === previousRows) {
      textArea.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      textArea.rows = maxRows;
      textArea.scrollTop = textArea.scrollHeight;
    }

    setRows(currentRows < maxRows ? currentRows : maxRows);
  };

  return (
    <textarea
      class={`height-auto box-border w-full resize-none overflow-hidden bg-inherit leading-6 
             outline-none ${styles}`}
      ref={ref}
      rows={rows}
      maxLength={maxLength}
      placeholder={placeholder}
      onChange={handleChange}
    >
      {children}
    </textarea>
  );
});

export default TextArea;