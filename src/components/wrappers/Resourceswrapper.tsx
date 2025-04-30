import React, { useState } from "react";
import ContentWrapper from "./ContentWrapper";

interface ResourcesWrapperProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const ResourcesWrapper: React.FC<ResourcesWrapperProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <ContentWrapper title={title} description={description}>
      {children}
    </ContentWrapper>
  );
};

export default ResourcesWrapper;
