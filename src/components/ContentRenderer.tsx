import React from 'react';
import { LongText, TextNode } from '../api/types';

const applyStyles = (node: TextNode): React.ReactNode => {
  let element = <span>{node.text}</span>;

  if (node.code) {
    element = <code>{element}</code>;
  } else if (node.italic) {
    element = <em>{element}</em>;
  }
  if (node.underline) {
    element = <u>{element}</u>;
  }
  if (node.strikethrough) {
    element = <s>{element}</s>;
  }
  if (node.bold) {
    element = <strong>{element}</strong>;
  }

  return element || null;
};

export const renderContent = (node: LongText, className?: string) => {
  if (!node) return null;

  return node.map((content, idx) => {
    if (content.type === 'list') {
      if (content.format === 'ordered') {
        return (
          <ol key={idx} className={`text-white ${className}`}>
            {content.children.map((child, childIdx) => (
              <li key={childIdx}>
                {child.children?.map((listItemChild, listItemChildIdx) =>
                    <React.Fragment key={listItemChildIdx}>{applyStyles(listItemChild as TextNode)}</React.Fragment>
                )}
              </li>
            ))}
          </ol>
        );
      } else {
        return (
          <ul key={idx} className={`${className}`}>
            {content.children.map((child, childIdx) => (
              <li key={childIdx}>
                {child.children?.map((listItemChild, listItemChildIdx) =>
                  <React.Fragment key={listItemChildIdx}>{applyStyles(listItemChild as TextNode)}</React.Fragment>
                )}
              </li>
            ))}
          </ul>
        );
      }
    } else if (content.type === 'quote') {
      return (
        <div key={idx} className={`${className}`}>
          {content.children.map((quoteChild, quoteChildIdx) => (
            <blockquote
              key={quoteChildIdx}
              className="w-11/12 italic font-medium"
            >
              {applyStyles(quoteChild as TextNode)}
            </blockquote>
          ))}
        </div>
      );
    } else if (content.type === 'heading') {
      return (
        content.level && (
          <span key={idx} className={`${className}`}>
            <>
              {content.children.map((child, idx) => {
                return <React.Fragment key={idx}>{applyStyles(child as TextNode)}</React.Fragment>;
              })}
            </>
          </span>
        )
      );
    } else
      return (
        <p key={idx} className={className}>
          {content.children.map((child, childIdx) => {
            if (child.type === 'link') {
              return (
                <a
                  href={child.url}
                  key={childIdx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="custom-link"
                >
                  {child.children?.map((linkChild, idx) => <React.Fragment key={idx}>{applyStyles(linkChild)}</React.Fragment>)}
                </a>
              );
            } else {
              return <React.Fragment key={childIdx}>{applyStyles(child as TextNode)}</React.Fragment>;
            }
          })}
        </p>
      );
  });
};

const ContentRenderer = (props: {
  node: LongText;
  className?: string;
  sx?: object;
}) => {
  return renderContent(props.node, props.className);
};

export default ContentRenderer;
