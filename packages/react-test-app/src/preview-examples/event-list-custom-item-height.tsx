/*
 * COPYRIGHT (c) Siemens AG 2018-2022 ALL RIGHTS RESERVED.
 */
import { IxEventList, IxEventListItem } from '@siemens/ix-react';
import React from 'react';

export const EventListCustomHeight: React.FC = () => {
  return (
    <IxEventList itemHeight={'L'}>
      <IxEventListItem color="color-primary">Text 1</IxEventListItem>
      <IxEventListItem color="color-primary">Text 2</IxEventListItem>
      <IxEventListItem color="color-primary">Text 3</IxEventListItem>
      <IxEventListItem color="color-primary">Text 4</IxEventListItem>
    </IxEventList>
  );
};