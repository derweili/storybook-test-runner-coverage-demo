
export enum GridJustify {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
  SpaceEvenly = 'space-evenly',
  Stretch = 'stretch'
}

export enum GridAlignItems {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Stretch = 'stretch',
  Baseline = 'baseline',
}

export enum GridDirection {
  Column = 'column',
  ColumnReverse = 'column-reverse',
  Row = 'row',
  RowReverse = 'row-reverse',
}

export enum GridAlignContent {
  FlexStart = 'flex-start',
  FlexEnd = 'flex-end',
  Center = 'center',
  Stretch = 'stretch',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
}

export enum GridArea {
  Warenkorb = 'content sidebar',
  Sidebar = 'sidebar',
  Content = 'content',
}

export enum GridColumn {
  CartTiles = 'minmax(70px, 100px) auto auto',
  WarenkorbTemplate = 'auto minmax(150px,400px)',
  LineItemsAction = '70px repeat(auto-fit, 90px)',
  HeaderNavigation = 'auto auto',
  HeaderLogo = 'minmax(100px, 255px) auto',
  Footer = 'repeat(3, 190px)',
  FooterWrapper = '600px minmax(100px,330px)',
  FooterImprint = 'auto minmax(300px, 600px)',
}

export enum GridAutoFlow {
  Dense = 'dense',
  Column = 'column',
  Row = 'row',
  RowDense = 'row dense',
  ColumnDense = 'column dense',
}
