import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { HeroSection } from './hero-section/hero-section';
import { PartnerSection } from './partner-section/partner-section';
import { FeaturesSection } from './features-section/features-section';
import { StatisticsSection } from './statistics-section/statistics-section';
import { BlockchainTechnologySection } from './blockchain-technology-section/blockchain-technology-section';
import { FaqSection } from './faq-section/faq-section';
import { RevolutonarySection } from './revolutonary-section/revolutonary-section';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    Header, 
    HeroSection, 
    PartnerSection, 
    FeaturesSection, 
    StatisticsSection, 
    BlockchainTechnologySection, 
    FaqSection,
    RevolutonarySection,
    Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('neofi');
}
