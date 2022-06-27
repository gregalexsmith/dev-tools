import React, { ReactNode, FC } from 'react';

export type InputWrapperProps = {
  icon?: ReactNode;
  children: ReactNode;
};

export const InputWrapper: FC<InputWrapperProps> = ({ icon, children }) => {
  if (!icon) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        {icon}
      </div>
      {children}
    </div>
  );
};
