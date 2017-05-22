export class Site {
    constructor(
      public title:string,
      public url: string,
      public link: string,
      public info:string,
      public taff?: Taff
    ){}
}

export class Taff {
  constructor(
    first:string
  ){}
}
