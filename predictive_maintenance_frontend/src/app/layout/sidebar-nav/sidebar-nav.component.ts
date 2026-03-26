import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type NavItem =
  | {
      id: string;
      label: string;
      kind?: 'link';
      route: string;
      icon?: 'doc';
      children?: never;
    }
  | {
      id: string;
      label: string;
      kind: 'group';
      children: Array<{
        id: string;
        label: string;
        route: string;
        icon?: 'doc';
      }>;
    };

/**
 * SidebarNavComponent
 *
 * Renders the left navigation list with group titles and link items.
 */
@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css',
})
export class SidebarNavComponent {
  @Input({ required: true }) items: NavItem[] = [];
}
