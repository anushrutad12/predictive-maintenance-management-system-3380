import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarNavComponent, type NavItem } from '../sidebar-nav/sidebar-nav.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { TocComponent, type TocItem } from '../toc/toc.component';

/**
 * AppShellComponent
 *
 * Provides the documentation-style application shell:
 * - Top header spanning the full width
 * - Left navigation sidebar
 * - Center router outlet content
 * - Optional right "On this page" TOC rail (hidden on smaller screens)
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, SidebarNavComponent, TopbarComponent, TocComponent],
  templateUrl: './app-shell.component.html',
  styleUrl: './app-shell.component.css',
})
export class AppShellComponent {
  /** Whether the sidebar is in expanded mode (wider) as seen in screenshot state 3. */
  protected readonly sidebarExpanded = signal(false);

  /** Sample nav items inferred from the design notes (labels can be refined later). */
  protected readonly navItems: NavItem[] = [
    {
      id: 'docs',
      label: 'Docs',
      kind: 'group',
      children: [
        { id: 'architecture', label: 'Architecture', route: '/docs/architecture' },
        { id: 'user-stories', label: 'User Stories', route: '/docs/user-stories' },
        { id: 'deployment', label: 'Deployment', route: '/docs/architecture#deployment' },
        { id: 'testing', label: 'Testing', route: '/docs/architecture#testing' },
      ],
    },
  ];

  /**
   * Basic TOC items for the currently visible docs. In a full implementation this
   * would be provided by each page (or derived from headings).
   */
  protected readonly tocItems = computed<TocItem[]>(() => [
    { id: 'overview', label: 'Overview', level: 1 },
    { id: 'models', label: 'Models', level: 1 },
    { id: 'routes', label: 'Routes', level: 1 },
    { id: 'schemas', label: 'Schemas', level: 1 },
  ]);

  // PUBLIC_INTERFACE
  toggleSidebarExpanded(): void {
    /** Toggles the sidebar expanded/collapsed visual state. */
    this.sidebarExpanded.update((v) => !v);
  }
}
