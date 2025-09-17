import {Component} from '@angular/core';

@Component({
    selector: 'hero-component',
    templateUrl: './hero-component.html',
    styleUrls: ['./hero-component.scss']
})
export class HeroComponent {
    /* ===== COMPONENT STATE PROPERTIES ===== */
    heroRating = {
    score: 4.8,
    text: 'High Rated'
    };
}