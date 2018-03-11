import { OnInit } from "@angular/core/core";

export class Joke implements OnInit {
    count = 0;
    ngOnInit() {
        console.log("Called only one >>>1")
    }

    public setup: string;
    public punchline: string;
    public hide: boolean;
    constructor(setup: string, punchline: string) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
        this.count=this.count+1;
        console.log("Called every time with new operator >>>"+this.count)
    }
    toggle() {
        this.hide = !this.hide;
    }
}
