declare type ISVG = {
  active: boolean;
};

declare type IChild = {
  name: string;
  path: string;
  icon: React.FC<ISVG>;
};

declare type ISidebar = {
  name: string;
  path: string;
  icon: any;
  hasChild: boolean;
  target?: string;
  child?: IChild[];
};

export type { ISidebar, IChild };
