import { inject } from 'aurelia-framework';
import { DataServices } from './data-services';

@inject(DataServices)
export class HelpTicket {

    constructor(data) {
        this.data = data;
        this.HELP_TICKET_SERVICE = 'helpTickets';
        this.HELP_TICKETCONTENT_SERVICE = 'helpTicketContents';
    }

    async getHelpTickets(userObj) {
        let url = this.HELP_TICKET_SERVICE;
        if (userObj.role == 'user') {
            url += '/user/' + userObj._id;
        }
        let response = await this.data.get(url);
        if (!response.error) {
            this.helpTicketsArray = response;
        } else {
            this.helpTicketsArray = [];
        }
    }

    async saveHelpTicket(helpTicket) {
        let serverResponse;
        if (helpTicket) {
            if (helpTicket.helpTicket._id) {
                serverResponse = await this.data.put(helpTicket, this.HELP_TICKET_SERVICE);
            } else {
                serverResponse = await this.data.post(helpTicket, this.HELP_TICKET_SERVICE);
            }
            return serverResponse;
        }
    }

    async deleteHelpTicket(helpTicket) {
        console.log("deleting ticket and contents");
        if (helpTicket) {
            await this.data.delete(this.HELP_TICKET_SERVICE + '/' + helpTicket._id)
            console.log(helpTicket._id);
        }
    }

    // async getHelpTicketsContents() {
    //     // let url = this.HELP_TICKETCONTENT_SERVICE;
    //     let response = await this.data.get(url);
    //     console.log(this.HELP_TICKETCONTENT_SERVICE);
    //     if (!response.error) {
    //         this.helpTicketscontentArray = response;
    //     } else {
    //         this.helpTicketscontentArray = [];
    //     }     
    // }

    async getHelpTicketsContents(helpTicketId) {
        let url = this.HELP_TICKETCONTENT_SERVICE + '/helpTicket/' + helpTicketId;
        let response = await this.data.get(url);
        console.log(helpTicketId);
        if (!response.error) {
            this.helpTicketscontentArray = response;
        } else {
            this.helpTicketscontentArray = [];
        }     
    }

    async uploadFile(files, id) {
        await this.data.uploadFiles(files, this.HELP_TICKETCONTENT_SERVICE + "/upload/" + id );
    }
    
}