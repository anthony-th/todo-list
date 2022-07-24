import { Guid } from 'guid-typescript';

export class TodoArr {
  constructor(
    public id: Guid,
    public title: string,
    public isComplete: boolean
  ) {   }
}