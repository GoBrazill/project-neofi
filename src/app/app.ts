import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { HeroSection } from './hero-section/hero-section';
import { PartnerSection } from './partner-section/partner-section';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, HeroSection, PartnerSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('neofi');
}
