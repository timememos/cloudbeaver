/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';
import styled, { css } from 'reshadow';

import { Loader } from '@cloudbeaver/core-blocks';
import { CommonDialogWrapper } from '@cloudbeaver/core-dialogs';

import type { IDriver } from './Driver';
import { DriverSelector } from './DriverSelector';

const styles = css`
  CommonDialogWrapper {
    max-height: 550px;
    min-height: 550px;
  }
  DriverSelector {
    flex: 1;
  }
`;

interface IProps {
  title: string;
  drivers: IDriver[];
  isLoading: boolean;
  onSelect: (driverId: string) => void;
  onClose: () => void;
}

export const DriverSelectorDialog = observer<IProps>(function DriverSelectorDialog({
  title,
  drivers,
  isLoading,
  onSelect,
  onClose,
}) {
  return styled(styles)(
    <CommonDialogWrapper
      title={title}
      noBodyPadding
      noOverflow
      onReject={onClose}
    >
      {isLoading && <Loader />}
      {!isLoading && <DriverSelector drivers={drivers} onSelect={onSelect} />}
    </CommonDialogWrapper>
  );
}
);
