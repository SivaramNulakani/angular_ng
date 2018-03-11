import { Component, OnInit } from '@angular/core';
import { Joke } from "app/joke";

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent {

  jokes: Joke[];
  constructor() {
    this.jokes = [new Joke("What did the cheese say when it looked in the mirror?", "Hello-me(Halloumi)"), new Joke("What kind of cheese do you use to disguise a small horse?", "Mask - apony(Mascarpone)"), new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’")];
  }
  addJoke(joke: Joke) {
    this.jokes.unshift(joke);
  }

  refreshJokes(jokes: Joke[]) {
    this.jokes = jokes;
  }

  jokeDelete(joke: Joke) {
    console.log("jokeDelete >>>" + joke.punchline);
    const index: number = this.jokes.indexOf(joke);
    this.jokes.slice(index, 1);
    this.refreshJokes(this.jokes);
    //this.jokes=[];
  }

  /* ngOnChanges(changes: Joke) {
    console.log(`ngOnChanges - data is ${this.data}`);
    for (let key in changes) {
      console.log(`${key} changed.
Current: ${changes[key].currentValue}.
Previous: ${changes[key].previousValue}`);
    }
  } */

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }

}
