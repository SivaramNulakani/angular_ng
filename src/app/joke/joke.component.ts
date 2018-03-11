import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, OnDestroy, AfterViewChecked, AfterViewInit, AfterContentChecked, ViewChild, ElementRef, HostListener, Renderer, HostBinding } from '@angular/core';
import { Joke } from "../joke";
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnDestroy {
 
  subscription: Subscription;
  inputText:string;
  /* OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy */
 // promiseData: string;

  promiseData: Promise<string>;
  observableData:Object;

  observable: Observable<number>;

  @Input('joke') data: Joke;
  imagePath = 'https://unsplash.it/200/300?image=201';
  flag: boolean;
  @HostBinding('class.hostBinding') private ishovering: boolean;
  @ViewChild('h4Header') h4HeaderRef: ElementRef;
  color: string = "yellow";
  ngOnChanges() {
    console.log(`ngOnChanges - data is ${this.data}`);

    if (this.data === null) {
      this.flag = true;
    }
  }
  constructor(private el: ElementRef, private renderer: Renderer) {

    //this.getPromise().then((val) => this.promiseData = val.toString(),(err)=>console.log(err));

    this.promiseData = this.getPromise();

    let obs = Rx.Observable.interval(2000).take(5).map(v => Date.now);

    obs.subscribe(value => console.log("Subscriber: " + value));

    Rx.Observable.of(1, 2, 3);

    this.getSubscription();

    this.observable = this.getObservable();


  }
  getPromise() :Promise<string>{
    return new Promise((resolve, reject) => {
      //setTimeout(() => resolve("Promise complete!"), 3000),
     let val=true;
      if (val)
        setTimeout(() => resolve("Promise complete!"), 3000)
      else
        reject("Rejected !!!");
    });
  }


    /* ngOnInit() {
      //this.h4HeaderRef.nativeElement.textContent = "Best Joke Machine";
      console.log(`ngOnInit - data is ${this.data}`);
    }
    ngDoCheck() {
      console.log("ngDoCheck")
    }
    ngAfterContentInit() {
      console.log("ngAfterContentInit");
    }
    ngAfterContentChecked() {
      console.log("ngAfterContentChecked");
    }
    ngAfterViewInit() {
      console.log("ngAfterViewInit");
    }
    ngAfterViewChecked() {
      console.log("ngAfterViewChecked");
    }
    ngOnDestroy() {
      console.log("ngOnDestroy");
    }
   */
    @Output() jokeDeleted = new EventEmitter<Joke>();
    deleteJoke(joke: Joke) {
      this.jokeDeleted.emit(joke);
    }

    @HostListener('mouseover') onmouseOver() {
      let part = this.el.nativeElement.querySelector('.card-text');
      this.renderer.setElementStyle(part, 'display', 'inline-block');
      this.ishovering = true;
    }

    @HostListener('mouseout') onMouseOut() {
      let part = this.el.nativeElement.querySelector('.card-text');
      this.renderer.setElementStyle(part, 'display', 'none');
      this.ishovering = false;
    }

getObservable(){
  return Observable.interval(1000).take(10).map(v=>v*3);
}

getSubscription(){
  this.subscription=this.getObservable().subscribe(data=>this.observableData=data);
}

 ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();

        console.log("unsubscribe =========== unsubscribe");
  }else{

        console.log("unsubscribe ********* unsubscribe");
  }

  }
}
