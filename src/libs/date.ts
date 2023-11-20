import dayjs from "dayjs";

interface IDateClass {
  curDate: Date;
  dateFormat(date: Date): string;
  dateTemplate(template?: string): string;
  diffDate(date: Date): number;
}

export class DateClass implements IDateClass {
  static koTemplate = "YYYY년 MM월 DD일";

  constructor(public curDate: Date) {}

  dateFormat(date: Date) {
    return date.toLocaleDateString("ko-KR");
  }

  dateTemplate(template?: string) {
    return dayjs(this.dateFormat(this.curDate)).format(
      template || DateClass.koTemplate
    );
  }

  diffDate(date: Date) {
    return dayjs(date).diff(dayjs(this.curDate), "day");
  }
}
