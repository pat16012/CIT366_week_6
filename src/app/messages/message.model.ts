export class Message {
  constructor(id: number, subject: string, msgText: string, sender: string) {
    this.id = id;
    this.subject = subject;
    this.msgText = msgText;
    this.sender = sender;
  }
  public id: number;
  public subject: string;
  public msgText: string;
  public sender: string;
}
