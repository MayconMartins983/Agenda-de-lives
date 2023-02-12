import { SafeResourceUrl } from '@angular/platform-browser';

export class Live {
    id: string;
    liveName: string;
    channelName: string;
    liveDate: string;
    liveTime: string;
    liveLink: string;
    registrationDate: string;
    urlSafe?: SafeResourceUrl;

    constructor(id: string = "", liveName: string = "",
     channelName: string = "", liveDate: string = "",
      liveTime: string = "", liveLink: string = "",
       registrationDate: string = "") {
        this.id = id;
        this.liveName = liveName;
        this.channelName = channelName;
        this.liveDate = liveDate;
        this.liveTime = liveTime;
        this.liveLink = liveLink;
        this.registrationDate = registrationDate;
        this.urlSafe = undefined;
    }
}