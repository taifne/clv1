import React, { ReactElement } from "react";

interface IconsProps {
  Icon: React.ElementType;
}

export default function Icons({ Icon }: IconsProps): ReactElement {
  return <Icon className="text-6xl"></Icon>;
}
