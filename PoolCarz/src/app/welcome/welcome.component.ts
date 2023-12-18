import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'welcome.component.html',
    styleUrls: ['welcome.component.css']
})
export class WelcomeComponent implements OnInit{
    public pageTitle = 'Welcome';

    constructor(private route:ActivatedRoute) {}
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}
