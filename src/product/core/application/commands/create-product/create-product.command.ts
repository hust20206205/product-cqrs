// import { ICommand } from "@nestjs/cqrs";

// export class CreateProductCommand implements ICommand {
//   constructor(public readonly payload: {}) {}
// }
// name: ProductName;
export class CreateAlarmCommand {
  constructor(
    public readonly name: string,
    public readonly severity: string,
    public readonly triggeredAt: Date,
    public readonly items: Array<{
      name: string;
      type: string;
    }>,
  ) {}
}
