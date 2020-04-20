import { Component } from '@angular/core';
import add from 'date-fns/add';
import format from 'date-fns/format';
import formatDistance from 'date-fns/formatDistance';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date: string = null;
  birthdays = [];

  constructor() { }

  onChange() {
    this.birthdays = [];
    const d = new Date(this.date);
    for (let index = 1; index < 46; index++) {
      const nextDate = add(d, {
        years: 0,
        months: 0,
        weeks: 0,
        days: index * 1000,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      this.birthdays.push(
        index + "k: " +
        format(nextDate, "PPP") +
        " (" + formatDistance(nextDate, d) + ")");
    }
  }

}
