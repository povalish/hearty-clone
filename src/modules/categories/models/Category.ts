import { Selectable } from 'modules/common/models/Selectable';

export type Category = Selectable & {
  name: string;
  count: number;
}
