import React, { ReactNode, FC } from 'react';

export type CheckboxWrapperProps = {
  label?: ReactNode;
  children: ReactNode;
};

export const CheckboxWrapper: FC<CheckboxWrapperProps> = ({
  label,
  children
}) => {
  if (!label) {
    return <>{children}</>;
  }

  return (
    <div className="flex items-center mb-4">
      {children}
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
    </div>
  );
};
