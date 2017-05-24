export class Site {
    constructor(
      public title:string,
      public url: string,
      public link: string,
      public info:string,
      public taff?: Taff,
      public offset?: string
    ){}
}

export class Taff {
  constructor(
    first:string
  ){}
}
