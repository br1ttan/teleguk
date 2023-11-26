import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { AppRouteEnum } from '@core';

interface Nodes {
  name: string;
  route?: string;
  icon?: string;
  children?: Nodes[];
}

const TREE_DATA: Nodes[] = [
  {
    name: 'Каталог',
    children: [
      {
        name: 'Канали',
        route: `/${AppRouteEnum.Channels}`,
        icon: 'contact_mail'
      },
      {
        name: 'Розробники',
        route: `/${AppRouteEnum.Developers}`,
        icon: 'code'
      }
    ]
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
  route?: string;
  icon?: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {
  private _transformer = (node: Nodes, level: number): ExampleFlatNode => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      route: node.route,
      icon: node.icon
    };
  };

  public treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  public treeFlattener = new MatTreeFlattener<Nodes, ExampleFlatNode, ExampleFlatNode>(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  

  public dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  public hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
