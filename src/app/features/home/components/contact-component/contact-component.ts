import { Component, OnInit } from "@angular/core";
import { HomeDataService } from "../../services/home-data.service";
import { FAQ } from "../../models/home.model";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact",
  templateUrl: "./contact-component.html",
  styleUrls: ["./contact-component.scss"],
  imports: [CommonModule]
})
export class ContactComponent implements OnInit {
  faqs: FAQ[] = [];

  constructor(private homeDataService: HomeDataService) {}

  ngOnInit(): void {
    this.loadFAQs();
  }

  loadFAQs(): void {
    this.homeDataService.getFAQs().subscribe(faqs => {
      this.faqs = faqs.map(faq => ({ ...faq, isOpen: false }));
    });
  }

  toggleFaq(index: number): void {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
