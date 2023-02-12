export class ResponsePageable {
    content: any[];
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: any[];
    size: number;
    sort: number;
    totalElements: number;
    totalPages: number;

    constructor() {
        this.content = [];
        this.first = false;
        this.last = false;
        this.number = 0;
        this.numberOfElements = 0;
        this.pageable = [];
        this.size = 0;
        this.sort = 0;
        this.totalElements = 0;
        this.totalPages = 0;
    }
}