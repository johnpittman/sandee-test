import * as React from "react";

import "./style.css";

interface SectionCardProps {
  className?: string;
  contentClassName?: string;
  headerClassName?: string;
  centerHeader?: boolean;
  title: string;
  children?: any;
}

function SectionCard(props: SectionCardProps) {
  let baseClassName = "SectionCard";
  let className = baseClassName;
  let baseHeaderClassName = `${baseClassName}__Header`;
  let headerClassName = baseHeaderClassName;
  let baseContentClassName = `${baseClassName}__Content`;
  let contentClassName = baseContentClassName;

  if (props.className) {
    className += ` ${props.className}`;
  }

  if (props.centerHeader) {
    headerClassName += ` ${headerClassName}--center`;
  }

  if (props.contentClassName) {
    contentClassName += ` ${props.contentClassName}`;
  }

  if (props.headerClassName) {
    headerClassName += ` ${props.headerClassName}`;
  }

  return (
    <div className={className}>
      <div className={headerClassName}>{props.title}</div>
      <div className={contentClassName}>{props.children}</div>
    </div>
  );
}

export default SectionCard;
