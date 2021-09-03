/*
 * CloudBeaver - Cloud Database Manager
 * Copyright (C) 2020-2021 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { observer } from 'mobx-react-lite';

import { NavNodeViewService, useNode } from '@cloudbeaver/core-app';
import { useService } from '@cloudbeaver/core-di';
import type { ComponentStyle } from '@cloudbeaver/core-theming';

import { ObjectPropertyTable } from './ObjectPropertyTable/ObjectPropertyTable';

interface IFolderPanelRendererProps {
  nodeId: string;
  folderId: string;
  style?: ComponentStyle;
}

export const FolderPanelRenderer = observer<IFolderPanelRendererProps>(function FolderPanelRenderer({
  nodeId,
  folderId,
  style,
}) {
  const navNodeViewService = useService(NavNodeViewService);

  for (const panel of navNodeViewService.panels) {
    const Panel = panel(nodeId, folderId);

    if (Panel) {
      return <Panel nodeId={nodeId} folderId={folderId} style={style} />;
    }
  }

  return <NavNodePanel nodeId={folderId} style={style} />;
});

interface INavNodePanelProps {
  nodeId: string;
  style?: ComponentStyle;
}

const NavNodePanel = observer<INavNodePanelProps>(function NavNodeTab({ nodeId }) {
  const nodeInfo = useNode(nodeId);

  if (!nodeInfo.node) {
    return null;
  }

  return <ObjectPropertyTable objectId={nodeId} parentId={nodeInfo.node.parentId} />;
});